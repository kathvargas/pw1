const { createElement } = require("react");

const herois=[
    {name:'Elesbaunm',type:'guerreiro',level:47},
    {name:'Genovyy',type:'feiticeira',level:35},
    {name:'Marhvix',type:'mago',level:53},
    {name:'Aelwyn',type:'druida',level:20},
    {name:'Vesperine',type:'espia',level:61},
    {name:'Eustakkiumn',type:'ranger',level:42},
    {name:'Dorotin',type:'bardo',level:29}
]
const heroCard=document.querySelector('#hero-card');
const grid=document.querySelector('#heroes-grid');

 function criarHeroi(heroi){
    //elemento principal do card
    const card=document.createElement('div')
    card.className='hero-card';

    //imagem do heroi
    const img=document.createElement('img');
    img.src=`assets/images/${heroi.type}.jpg`;
    img.alt=`imagem do heroi${heroi.name}.jpg`;

    const infoDiv=document.createElement('div')
    infoDiv.className='hero-info';

    const spanName=document.createElement('span');
    spanName.className='hero-name';
    spanName.textContent=heroi.name;

    const spanLevel=document.createElement('span')
    spanLevel.textContent=heroi.type;

    infoDiv.appendChild(spanName);
    infoDiv.appendChild(spanLevel);
    card.appendChild(img);
    card.appendChild(infoDiv);

    return card;
 }
 function renderizarGrid(){
    grid.replaceChildren();
    herois.forEach((heroi)=>{
    const card=criarHeroi(heroi);
    grid.appendChild(card);
    });
 }
 renderizarGrid();
    