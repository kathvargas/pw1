let isDragging=false;
const square=document.querySelector('#square');
const posXSpan=document.querySelector('#posX');
const posYSpan=document.querySelector('#posy');

square.addEventListener('mousedown',(event)=>{
    isDragging=true;
})
square.addEventListener('mouseup',(event)=>{
    isDragging=false;
})

document.addEventListener('mousemove',(event)=>{
    if(isDragging){
        square.style.left=event.clientX+'px';
        square.style.top=event.clientY+'px';

        posXSpan.textContent=event.clientX;
        posYSpan.textContent=event.clientY
    }
})