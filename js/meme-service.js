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
    },
    {
        id: 9,
        url: 'img/9.jpg',
    },
    {
        id: 10,
        url: 'img/10.jpg',
    },
    {
        id: 11,
        url: 'img/11.jpg',
    },
    {
        id: 12,
        url: 'img/12.jpg',
    },
    {
        id: 13,
        url: 'img/13.jpg',
    },
    {
        id: 14,
        url: 'img/14.jpg',
    },
    {
        id: 15,
        url: 'img/15.jpg',
    },
    {
        id: 16,
        url: 'img/16.jpg',
    },
    {
        id: 17,
        url: 'img/17.jpg',
    },
    {
        id: 18,
        url: 'img/18.jpg',
    }

]

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

var gMeme = creatMeme()

// function drawImg() {
//     console.log('lets draw an img');
//     var img = new Image()
//     img.src = gImgs[gMeme.selectedImgId].url;
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
//     }
// }
function drawImg(imageSource) {
    console.log('lets draw an img');
    var img = new Image()
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        // gCtx.strokeStyle = 'black'
        // gCtx.fillStyle = 'white'
        // gCtx.font = '48px IMPACT';
        // gCtx.fillText(gMeme.lines[0].txt, 100, 150)
        // gCtx.strokeText(gMeme.lines[0].txt, 100, 150)
    };
    img.src = imageSource;

}


// function drawText(text, x, y) {
//     console.log('lets write');
//     gCtx.strokeStyle = 'red'
//     gCtx.fillStyle = 'white'
//     gCtx.lineWidth = '2'
//     gCtx.font = '24px Ariel'
//     gCtx.textAlign = 'start'
//     gCtx.fillText(text, x, y)
//     gCtx.strokeText(text, x, y)
// }



function UserTxtInput() {
    console.log('hi');

    // let text = document.getElementById('userTxt').value;
    var newObj = {
        txt: document.getElementById('userTxt').value,
        size: 48,
        align: 'left',
        color: 'blue'
    }

    gMeme.lines.push(newObj)
    // gCtx.strokeStyle = 'black'
    //     gCtx.fillStyle = 'white'
    //     gCtx.font = '24px IMPACT';
    // gCtx.fillText(text, 50, 50)
    // gCtx.strokeText(text, 50, 50)
    console.log('gMeme.lines', gMeme.lines);
    return newObj.txt
}

// function clickedImg(img) {
//     var imgSrc = img.getAttribute('src')

//    return imgSrc
// }
function getSource(img) {
    var imageSource = img.getAttribute('src')

    return imageSource
}

function getId(img) {
    var imageId = img.getAttribute('id')

    return imageId
}

function getImagesForDisplay() {
    var images = gImgs
    return images
}

function getImageById(imgId) {
    // console.log('gBooks', gBooks);
    const image = gImgs.find((image) => {
        return imgId === image.id
    })
    console.log('image', image);
    return image
}

function IncreaseText() {
    console.log('increase text');
    console.log('gMeme', gMeme);
    var selectedID = gMeme.selectedImgId
    console.log('selectedID', selectedID);
    // console.log('gMeme.lines.color',gMeme.lines[1].color);
    console.log('gMeme.lines.size', gMeme.lines[0].size);
    

}


function drawTxt(text,) {
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.font = '48px IMPACT';
    // gCtx.font = getFontSize();
    gCtx.textAlign = gMeme.lines[0].align
    gCtx.fillText(text, 50, 50)
    gCtx.strokeText(text, 50, 50)
}

function getFontSize() {

}

function getMemeObj() {
    return gMeme;
}

function updateFontSize(diff) {

    // if (diff === 'up') gMeme.lines[gMeme.selectedLineIdx].size += 3
    gMeme.lines[gMeme.selectedLineIdx].size += diff
    // else gMeme.lines[gMeme.selectedLineIdx].size -= 3
}

function getMemeFromUser() {
    return gMeme;
}

function updateMemeText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    console.log(gMeme.lines[gMeme.selectedLineIdx].txt);
}

function getMemeImg(img) {
    var imageSource = img.getAttribute('src')
console.log(imageSource);
    return imageSource
}

function updateMeme() {
    gMeme = creatMeme();
    console.log(gMeme);
}

function creatMeme() {
    return {
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [
            { txt: 'Your Text', size: 50, align: 'center', color: 'white', font: 'Impact' },
            { txt: 'Your Text', size: 50, align: 'center', color: 'white', font: 'Impact' }
            ]
    }
}

function updateMemeImg(imgId) {
    gMeme.selectedImgId = imgId;
    console.log( gMeme.selectedImgId);
}

function getImgSrc() {
    return gImgs.find(img => img.id === gMeme.selectedImgId);
}

function changeTxtSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
}


function getSelectedLineIdx() {
    return gMeme.selectedLineIdx;
}