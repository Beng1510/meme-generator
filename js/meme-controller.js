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

// var gImgs = [
//     {
//         id: 1,
//         url: 'img/1.jpg',
//     },
//     {
//         id: 2,
//         url: 'img/2.jpg',
//     },
//     {
//         id: 3,
//         url: 'img/3.jpg',
//     },
//     // {
//     //     id: 4,
//     //     url: 'img/4.jpg',
//     // },
//     // {
//     //     id: 5,
//     //     url: 'img/5.jpg',
//     // },
//     // {
//     //     id: 6,
//     //     url: 'img/6.jpg',
//     // },
//     // {
//     //     id: 7,
//     //     url: 'img/7.jpg',
//     // },
//     // {
//     //     id: 8,
//     //     url: 'img/8.jpg',
//     // },
//     // {
//     //     id: 9,
//     //     url: 'img/9.jpg',
//     // },
//     // {
//     //     id: 10,
//     //     url: 'img/10.jpg',
//     // },
//     // {
//     //     id: 11,
//     //     url: 'img/11.jpg',
//     // },
//     // {
//     //     id: 12,
//     //     url: 'img/12.jpg',
//     // },
//     // {
//     //     id: 13,
//     //     url: 'img/13.jpg',
//     // },
//     // {
//     //     id: 14,
//     //     url: 'img/14.jpg',
//     // },
//     // {
//     //     id: 15,
//     //     url: 'img/15.jpg',
//     // },
//     // {
//     //     id: 16,
//     //     url: 'img/16.jpg',
//     // },
//     // {
//     //     id: 17,
//     //     url: 'img/17.jpg',
//     // },
//     // {
//     //     id: 18,
//     //     url: 'img/18.jpg',
//     // }

// ]
console.log('gImgs', gImgs);
// console.log('gImgs[0].url;',gImgs[0].url);

// var gMeme = {
//     selectedImgId: 0,
//     selectedLineIdx: 0,

//     lines: [
//         {
//             txt: 'Love and Peace',
//             size: 20,
//             align: 'left',
//             color: 'blue'
//         }
//     ]
// }
console.log('gMeme.lines', gMeme.lines);

console.log('gMeme.lines[0].txt', gMeme.lines[0].txt);

function onUserTxtInput() {
    console.log('text', text);

    var text = UserTxtInput();

    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.font = '24px IMPACT';
    gCtx.textAlign = gMeme.lines[0].align
    gCtx.fillText(text, 50, 50)
    gCtx.strokeText(text, 50, 50)

}




function onShowGallery() {
    var images = getImagesForDisplay()
    console.log('images',images);
    var strHtml = images.map(function (img) {
        return `
        <img class="gallery-image" id="${img.id}"  onclick="onClickedImg(this)" src="${img.url}">
        `
    })
    document.querySelector('.image-gallery').innerHTML = strHtml.join('')
    // var elGallery = document.querySelector('.gallery')
    // elGallery.querySelector('h2').innerHTML = `<img class="gallery-image" src="img/${book.title}.jpg"></img>`
    // console.log('images.id',images[0].id);
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
console.log('imageSource',imageSource);
console.log('imageId',imageId);

    // var imgSrc = clickedImg(img)
    // console.log('imgSrc', imgSrc);
    drawImg(imageSource)
    //     let chosenImg = document.querySelector('grid-item')
    //     console.log('chosenImg',chosenImg);
}
