var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    // console.log('The context:', gCtx);
    drawImg()
}
console.log('gImgs',gImgs);
var gImgs = [
    {
        id: 1,
        url: 'img/1.jpg',
    },
    {
        id: 2,
        url: 'img/2.jpg',
    },
    {
        id: 3,
        url: 'img/3.jpg',
    },
    {
        id: 4,
        url: 'img/4.jpg',
    },
    {
        id: 5,
        url: 'img/5.jpg',
    },
    {
        id: 6,
        url: 'img/6.jpg',
    },
    {
        id: 7,
        url: 'img/7.jpg',
    },
    {
        id: 8,
        url: 'img/8.jpg',
    }

]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,

    lines: [
        {
            txt: 'Love and Peace',
            size: 20,
            align: 'left',
            color: 'blue'
        }
    ]
}