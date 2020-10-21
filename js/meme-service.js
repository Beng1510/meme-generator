// function drawImg() {
//     console.log('lets draw an img');
//     var img = new Image()
//     img.src = gImgs[gMeme.selectedImgId].url;
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
//     }
// }
function drawImg() {
    console.log('lets draw an img');
    var img = new Image()
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        // gCtx.strokeStyle = 'black'
        // gCtx.fillStyle = 'white'
        // gCtx.font = '24px IMPACT';
        // gCtx.fillText(gMeme.lines[0].txt, 50, 50)
        // gCtx.strokeText(gMeme.lines[0].txt, 50, 50)
    };
    img.src = gImgs[gMeme.selectedImgId].url;
    
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
    let text = document.getElementById('userTxt').value;
    // gCtx.strokeStyle = 'black'
    //     gCtx.fillStyle = 'white'
    //     gCtx.font = '24px IMPACT';
        // gCtx.fillText(text, 50, 50)
        // gCtx.strokeText(text, 50, 50)
return text
}