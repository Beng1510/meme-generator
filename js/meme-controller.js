var gCanvas;
var gCtx;

var gTxtLinePosition = [{ x: 150, y: 60 }, { x: 150, y: 450 }];

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    RenderGallery()
}


function RenderGallery() {
    var images = getImagesForDisplay()
    var strHtml = images.map(function (img) {
        return `
        <img class="gallery-image" id="${img.id}"  onclick="onClickedImg(${img.id})" src="${img.url}">
        `  })
    document.querySelector('.image-gallery').innerHTML = strHtml.join('')

    var elControl = document.querySelector('.control-panel')
    elControl.innerHTML =
        `
    <button class="btn increase-btn" title="Increase Text" onclick="onChangeTxtSize(1)">+</button>
    <button class="btn decrease-btn" title="Decrease Text" onclick="onChangeTxtSize(-1)">-</button>
    <button class="btn move-up-btn" title="Moveup Text" onclick="onMoveTxt(-1)">>>>UP</button>
    <button class="btn move-down-btn" title="Movedown Text" onclick="onMoveTxt(1)">DOWN<<<<<</button>
    `
}


function renderCanvas() {
    // var imageSource = getSource(img)
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
// function  getImgToShow() {
//     var img = new Image()
//     img.src = getMemeImg(img)
//     // imageSource;
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
//         addText();
//     };

// }

function addText() {
    var meme = getMemeFromUser()
    drawText(meme)
}

function drawText(meme) {
    var lines = meme.lines;
    lines.forEach((line, Idx) => {
        var x = gTxtLinePosition[Idx].x;
        var y = gTxtLinePosition[Idx].y;
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = 'white'
        gCtx.font = line.size + 'px IMPACT';
        gCtx.textAlign = 'left'
        gCtx.fillText(line.txt, x, y)
        gCtx.strokeText(line.txt, x, y)
    });
}

function onWriteText() {
    var txt = document.querySelector('.text-input').value;
    console.log('txt', txt);
    updateMemeText(txt);
    renderCanvas();

}

function onClickedImg(imgId) {
    updateMeme();
    updateMemeImg(imgId);
    renderCanvas()


}

// function onClickedImg(img) {
//     var imageSource = getSource(img)
//     var imageId = getId(img)
//     console.log('imageSource', imageSource);
//     console.log('imageId', imageId);


//     drawImg(imageSource)

//     console.log('gMeme', gMeme);
//     gMeme.selectedImgId = +imageId
//     console.log('gMeme', gMeme);
//     //     let chosenImg = document.querySelector('grid-item')
//     //     console.log('chosenImg',chosenImg);
// }


//
//


function onUserTxtInput() {
    console.log('text', text);
    var memeObj = getMemeObj();
    var text = UserTxtInput();
    memeObj.lines[memeObj.text]

    drawTxt(text)
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
