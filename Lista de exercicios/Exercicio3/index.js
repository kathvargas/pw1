// as variáveis posX e posY armazenam a posição atual da nave
// - posX representa a posição horizontal (esquerda-direita) 
// - posY representa a posição vertical (cima-baixo)
// a nave começa no centro da janela do navegador
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

// seleciona a imagem da nave e define sua posição inicial
const spaceship = document.querySelector('#spaceship');
spaceship.style.left = posX + 'px';
spaceship.style.top = posY + 'px';

// define a velocidade de movimento da nave
// quantos pixels a nave deve se mover a cada deslocamento
const speed = 20;

function moveShip(){
    spaceship.style.left=posX+'px';
    spaceship.style.top=posY+'px';
}
body.addEventListener('keydown',(event)=>{
    const key=event.key;
    if(key==='a'|| key==='A'||key==='ArrowLeft'){
        posX-=speed;
    }
    else if(key==='d'|| key==='D'||key==='ArrowRight'){
        posX-=speed;
    }
    else if(key==='w'|| key==='W'||key==='ArrowUp'){
        posY-=speed;
    }
    else if(key==='s'|| key==='S'||key==='ArrowDown'){
        posY-=speed;
    } else if(key==='Escape'){
        posX=window.innerWidth/2;
        posY=window.innerHeight/2
    }else{
        return
    }
    moveShip();

})