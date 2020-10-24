'use strict'
var gCanvas;
var gCtx;
var gSavedMemesImg;
var gSavedMemes;

var gTxtLinePosition = [{ x: 270, y: 60 }, { x: 270, y: 500 }];

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery()
    gSavedMemesImg = (loadFromStorage('memes')) ? loadFromStorage('memes') : [];
    gSavedMemes = (loadFromStorage('memesObj')) ? loadFromStorage('memesObj') : [];
}


function renderGallery() {
    var images = getImagesForDisplay()
    var strHtml = images.map(function (img) {
        return `
        <a href="#"main-header"> <img class="gallery-image" id="${img.id}"  onclick="onClickedImg(${img.id})" src="${img.url}"></a>
        `  })
    document.querySelector('.image-gallery').innerHTML = strHtml.join('')

}


function renderCanvas() {
    showImg()
}

function showImg() {
    var img = new Image()
    img.src = getImgSrc().url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        addText()
    }
}

function addText() {
    var meme = getMemeFromUser()
    drawText(meme)
}

function drawText(meme) {
    var lines = meme.lines;
    lines.forEach((line, Idx) => {
        var x = gTxtLinePosition[Idx].x;
        var y = gTxtLinePosition[Idx].y;
        gCtx.strokeStyle = line.stroke
        gCtx.fillStyle = line.color
        gCtx.font = line.size + 'px ' + line.font;
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, x, y)
        gCtx.strokeText(line.txt, x, y)
        console.log('gTxtLinePosition[Idx].x', gTxtLinePosition[gMeme.selectedLineIdx].x);
        console.log('gTxtLinePosition[Idx].y', gTxtLinePosition[gMeme.selectedLineIdx].y);

    });
    console.log('width', gCtx.measureText(meme.lines.txt).width);
}

function onWriteText() {
    var txt = document.getElementById("text-submit").value;
    console.log('txt', txt);
    renderCanvas();
    updateMemeText(txt);
    document.querySelector('.text-input').value = ' '
}

function onWriteTextAnother() {
    var position = { x: gCanvas.width / 2, y: gCanvas.height / 2 }
    gTxtLinePosition.push(position);
    addLine();
    renderCanvas();
}

function drawRect(size, y) {
    gCtx.beginPath()
    gCtx.rect(10, y - (size * 1.5) + 20, 480, size * 1.5)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}

function onClickedImg(imgId) {
    showEditor()
    updateMeme();
    updateMemeImg(imgId);
    renderCanvas()
}

function onIncreaseText() {
    console.log('CHECK PLUS');
    IncreaseText(gMeme.selectedImgId)
}


function onChangeSize(diff) {
    if (!gIsTextSelected && !gIsStckrSelected) return;

    if (gIsTextSelected) {
        updateFontSize(diff);
    } else {
        updateStckrSize(diff);
    };
    renderCanvas();
}

function onChangeTxtSize(diff) {
    changeTxtSize(diff);
    renderCanvas();
}

function onMoveTxt(diff) {
    var lineIdx = getSelectedLineIdx();
    gTxtLinePosition[lineIdx].y += diff;
    renderCanvas();
}

function onSelectLine() {
    updateMemeLine()

    var lineIdx = getSelectedLineIdx();
    var y = gTxtLinePosition[lineIdx].y;
    var size = getMemeObj().lines[lineIdx].size;
    drawRect(size, y);
}

function onChangeFontColor(chosenColor) {
    console.log('chosenColor', chosenColor);
    updateFontColor(chosenColor)
    renderCanvas()
}

function onChangeStrokeColor(chosenStroke) {
    updateStrokeColor(chosenStroke)
    renderCanvas()
}

function onAlignLeft() {
    alignLeft()
    renderCanvas()
}
function onAlignRight() {
    alignRight()
    renderCanvas()
}
function onAlignCenter() {
    alignCenter()
    renderCanvas()
}

function onChangeFontFamily(value) {
    console.log('font');
    changeFontFamily(value)
    renderCanvas()
}
function onDeleteText() {
    deleteText()
    renderCanvas()
}

function onAddNewText() {
    var position = { x: gCanvas.width / 2, y: gCanvas.height / 2 }
    gTxtLinePosition.push(position);
    addNewText();
    renderCanvas();


}

function getColor() {
    document.getElementById("colorInputBgcColor").click();
}

function showEditor() {
   
    var memeEditor = document.getElementById("meme-editor");
    var gallery = document.getElementById("image-gallery");
    if (memeEditor.style.display === "none") {
        memeEditor.style.display = "flex"
        gallery.style.display = "none"

    }
    // } else {
    //   x.style.display = "none";
}


function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    console.log(data);
    elLink.href = data
    elLink.download = 'meme.jpg'
}


function showGallery() {
    var gallery = document.getElementById('image-gallery');
    var memeEditor = document.getElementById('meme-editor');
    var savedMemes = document.getElementById('memes')
    var aboutContainer = document.getElementById('about')
    if (gallery.style.display = 'none') {
        memeEditor.style.display = 'none'
        gallery.style.display = 'flex';
        savedMemes.style.display = 'none'
        aboutContainer.style.display = 'flex'
    }
}

function showAbout() {
    var aboutContainer = document.getElementById('about')
    if (aboutContainer.style.display = 'none')  aboutContainer.style.display = 'flex'
}


function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function saveImg() {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    console.log(imgContent);
    gSavedMemesImg.push(imgContent);
    saveToStorage('memes', gSavedMemesImg);

    var meme = getMemeObj();
    gSavedMemes.push(meme);
    saveToStorage('memesObj', gSavedMemes);
}


function onDisplaySavedMemes(el) {
    document.querySelector('.canvas-container').style.display = 'none';
    document.querySelector('.control-panel').style.display = 'none';
    document.querySelector('.image-gallery').style.display = 'none';
    document.querySelector('.about-container').style.display = 'none';
    document.querySelector('.saved-memes').style.display = 'flex';

    // el.classList.add('active');
    // document.querySelector('.gallery').classList.remove('active');
    // document.querySelector('.about').classList.remove('active');

    renderSavedMemes()
}


function renderSavedMemes() {
    var strHtml = gSavedMemesImg.map((saveMeme, Idx) => {
        return `
                <img onclick="onShowSavedMeme(${Idx})" src="${saveMeme}">
               `
    });

    document.querySelector('.saved-memes').innerHTML = strHtml.join('');
}

function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn share-btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
    .then(function (res) {
        return res.text()
    })
    .then(onSuccess)
    .catch(function (err) {
        console.error(err)
    })
}