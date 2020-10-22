var gCanvas;
var gCtx;

var gTxtLinePosition = [{ x: 270, y: 60 }, { x: 270, y: 500 }];

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery()
}


function renderGallery() {
    var images = getImagesForDisplay()
    var strHtml = images.map(function (img) {
        return `
        <img class="gallery-image" id="${img.id}"  onclick="onClickedImg(${img.id})" src="${img.url}">
        `  })
    document.querySelector('.image-gallery').innerHTML = strHtml.join('')

    // var elControl = document.querySelector('.control-panel')
    // elControl.innerHTML =
    //     `
    // <button class="btn increase-btn" title="Increase Text" onclick="onChangeTxtSize(1)">+</button>
    // <button class="btn decrease-btn" title="Decrease Text" onclick="onChangeTxtSize(-1)">-</button>
    // <button class="btn move-up-btn" title="Moveup Text" onclick="onMoveTxt(-1)">>>>UP</button>
    // <button class="btn move-down-btn" title="Movedown Text" onclick="onMoveTxt(1)">DOWN<<<<<</button>
    // `
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
        gCtx.fillStyle = line.color
        gCtx.font = line.size + 'px ' + line.font;
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, x, y)
        gCtx.strokeText(line.txt, x, y)
        console.log('gTxtLinePosition[Idx].x',gTxtLinePosition[gMeme.selectedLineIdx].x);
        console.log('gTxtLinePosition[Idx].y',gTxtLinePosition[gMeme.selectedLineIdx].y);
        
    });
    console.log('width',gCtx.measureText(meme.lines.txt).width);
    
    // var xRect = gTxtLinePosition[gMeme.selectedLineIdx].x -20
    // var yRect = gTxtLinePosition[gMeme.selectedLineIdx].y -50;
    // var txtWidth = gCtx.measureText(meme.lines.txt).width
    // console.log('txtWidth',txtWidth);
    // gCtx.beginPath()
    // gCtx.rect(xRect, yRect, txtWidth+50, txtWidth+100)
    // gCtx.strokeStyle = 'black'
    // gCtx.stroke()
    // drawRect() 
    
    

}

// function drawRect() {
//     var xRect = gTxtLinePosition[gMeme.selectedLineIdx].x -20
//     var yRect = gTxtLinePosition[gMeme.selectedLineIdx].y -50;
//     gCtx.beginPath()
//     gCtx.rect(xRect, yRect, gCtx.measureText(line.txt)+50,gCtx.measureText(line.txt)=100)
//     gCtx.strokeStyle = 'black'
//     gCtx.stroke()
//     // gCtx.fillStyle = 'orange'
//     // gCtx.fillRect(xRect, yRect, 150, 150)
// }

function onWriteText() {
    var txt = document.getElementById("text-submit").value;
    // var txt = document.querySelector('.text-input').value;
    console.log('txt', txt);
    renderCanvas();
    updateMemeText(txt);
    document.querySelector('.text-input').value = ' '
    // drawRect()
}

function onWriteTextAnother() {
    var position = { x: gCanvas.width / 2, y: gCanvas.height / 2 }
    gTxtLinePosition.push(position);
    addLine();
    renderCanvas();
//     var txt = document.getElementById("text-submit-another").value;
    
//     var newObj = {
//         txt: document.getElementById("text-submit-another").value,
//         size: 48,
//         align: 'left',
//         color: 'blue'
//     }

//     gMeme.lines.push(newObj)

// console.log(' gMeme.lines', gMeme.lines);
//     gCtx.strokeStyle = 'black'
//     gCtx.fillStyle = 'red'
//     gCtx.font = '60px impact' ;
//     gCtx.textAlign = 'center'
//     gCtx.fillText(txt, 200, 200)
//     gCtx.strokeText(txt, 200, 200)
}

function drawRect(size,y) {
    gCtx.beginPath()
    gCtx.rect(10, y - (size * 1.5) + 20, 480, size * 1.5)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()

    // var meme = getMemeFromUser()
    // var xRect = gTxtLinePosition[gMeme.selectedLineIdx].x
    // var yRect = gTxtLinePosition[gMeme.selectedLineIdx].y ;
    // var txtWidth = gCtx.measureText(meme.lines[gMeme.selectedLineIdx].txt).width
    // console.log('txtWidth',txtWidth);
    // gCtx.beginPath()
    // gCtx.rect(xRect, yRect, txtWidth, txtWidth)
    // gCtx.strokeStyle = 'black'
    // gCtx.stroke()
}

function onClickedImg(imgId) {
    showEditor()
    updateMeme();
    updateMemeImg(imgId);
    renderCanvas()
}



// function onUserTxtInput() {
//     console.log('text', text);
//     var memeObj = getMemeObj();
//     var text = UserTxtInput();
//     memeObj.lines[memeObj.text]

//     drawTxt(text)
// }

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
    console.log('chosenColor',chosenColor);
    updateFontColor(chosenColor)
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

// var strHtml = ''
//     strHtml = `
//     <input class="text-input" type="sumbit" id="text-submit-another" placeholder="Write here your text">
//     <button onclick="onWriteTextAnother()">Submit Text</button>
//     `
//     document.querySelector('.text-add').innerHTML = strHtml;
//     addText()
//     renderCanvas()
}

function getColor(){
    document.getElementById("colorInputBgcColor").click();
}

function showEditor() {
    var x = document.getElementById("meme-editor");
    if (x.style.display === "none") {
      x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    }
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    console.log(data);
    elLink.href = data
    elLink.download = 'meme.jpg'
}