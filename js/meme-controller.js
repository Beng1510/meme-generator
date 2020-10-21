var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    // console.log('The context:', gCtx);
    // drawImg()
    // drawText(gMeme.lines[0].txt, 50, 50)
    onShowGallery()
}

console.log('gImgs', gImgs);

console.log('gMeme.lines', gMeme.lines);

console.log('gMeme.lines[0].txt', gMeme.lines[0].txt);



function onShowGallery() {
    var images = getImagesForDisplay()
    // console.log('images', images);
    var strHtml = images.map(function (img) {
        return `
        <img class="gallery-image" id="${img.id}"  onclick="onClickedImg(this)" src="${img.url}">
        `
    })
    document.querySelector('.image-gallery').innerHTML = strHtml.join('')
    // var elGallery = document.querySelector('.gallery')
    // elGallery.querySelector('h2').innerHTML = `<img class="gallery-image" src="img/${book.title}.jpg"></img>`
    // console.log('images.id',images[0].id);

    var elControl = document.querySelector('.control-panel')
    elControl.innerHTML =
        `
    <button class="increaseTxtSize" onclick="onIncreaseText()">+</button>
    `
}

function buildImages() {
    for (var i = 0; i < gImgs.length; i++) {
        document.createElement(images[i]);
    }
}


function onClickedImg(img) {
    // console.log('imgId',imgId);
    // var image = getImageById()
    // console.log('image.id',image.id);
    // var imageID = getImageById(imgId)

    // console.log('imgID',imgID);
    //    var imgSrc = img.attr('src')
    //    var imgSrc = img.src
    var imageSource = getSource(img)
    var imageId = getId(img)
    console.log('imageSource', imageSource);
    console.log('imageId', imageId);

    // var imgSrc = clickedImg(img)
    // console.log('imgSrc', imgSrc);
    drawImg(imageSource)

    console.log('gMeme', gMeme);
    gMeme.selectedImgId = +imageId
    console.log('gMeme', gMeme);
    //     let chosenImg = document.querySelector('grid-item')
    //     console.log('chosenImg',chosenImg);
}



function onUserTxtInput() {
    console.log('text', text);

    var text = UserTxtInput();
    drawTxt(text)


}

function onIncreaseText() {
    console.log('CHECK PLUS');
    IncreaseText(gMeme.selectedImgId)
}