function drawImg() {
    console.log('lets draw img');
    var img = new Image()
    img.src = gImgs.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}