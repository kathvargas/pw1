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

const body=document.querySelector('body')
console.log(body)
body