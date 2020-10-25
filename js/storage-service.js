'use strict'

function saveToStorage(key, value) {
    var item = JSON.stringify(value);
    localStorage.setItem(key, item);
}

function loadFromStorage(key) {
    var item = localStorage.getItem(key)
    var value = JSON.parse(item);
    return value;
}



function myDown(e){
    // var txtWidth = gCtx.measureText(meme.lines.txt).width
    var lineIdx = getSelectedLineIdx();
    var x = 10
    var y = gTxtLinePosition[lineIdx].y; 
    console.log('y',y);
    var size = getMemeObj().lines[lineIdx].size;
    var yBox = y - (size * 1.5) + 20
    console.log('yBox',yBox);
    var width = 480
    var height = (size *1.5)
    var left = x
    var right = x + width
    var top = yBox
    var bottom = yBox + height

    var eX = e.offsetX
    var eY = e.offsetY

    if (right >= eX
        && left <= eX
        && bottom >= eY
        && top <= eY) {
        console.log('Success');
  
            x = e.pageX ;
            y = e.pageY ;
            dragOk = true;
            gCanvas.onmousemove = myMove;
        }

    }