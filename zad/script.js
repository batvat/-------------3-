'use strict' 
 
let area = document.getElementById('area'); 
let rect = document.getElementById('rect'); 
 
area.onclick = (event) => { 
    // console.log(event); 
    // console.log('offsetX: ', event.offsetX, 'offsetY: ', event.offsetY) 
    // console.log('PageX: ', event.pageX, 'PageY: ', event.pageY) 
    // console.log('clientX: ', event.clientX, 'clientY: ', event.clientY) 
} 
 
function elemDrag(event){ 
    let shiftX = event.clientX - rect.getBoundingClientRect().left
    let shiftY = event.clientY - rect.getBoundingClientRect().top

    rect.style.position = 'absolute'; 
    moveAt(event.pageX, event.pageY)

    area.addEventListener('mousemove', elemMove); 
    area.addEventListener('mouseup', elemDrop); 

    function elemDrop(event){ 
        area.removeEventListener('mousemove', elemMove); 
        area.removeEventListener('mousemove', elemDrop); 
    } 
 
    function elemMove (event){ 
        moveAt(event.pageX, event.pageY)
    }
    
    function moveAt(pageX,pageY) {
        rect.style.left = pageX -rect.offsetWidth/2 - shiftX + 'px'
        rect.style.top = pageY -rect.offsetHeight/2 - shiftY + 'px'
    }
} 
rect.onmousedown = elemDrag; 
rect.ondragstart = null;

rect.onmouseover = function() {
    rect.style.backgroundColor = "#000000"
    rect.style.transitionDuration = '1000ms'
}
rect.onmouseout = function() {
    rect.style.backgroundColor = 'red'
}
rect.ondragstart = function() {return false}
