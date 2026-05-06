const heroes=[
    {name:'Elesbaunm',type:'guerreiro',level:47},
    {name:'Genovyy',type:'feiticeira',level:35},
    {name:'Marhvix',type:'mago',level:53},
    {name:'Aelwyn',type:'druida',level:20},
    {name:'Vesperine',type:'espia',level:61},
    {name:'Eustakkiumn',type:'ranger',level:42},
    {name:'Dorotin',type:'bardo',level:29}
]
function criarHeroi(heroi){//recebe os dados do heroi como parametro
    //cria o elemento principal
    const card=document.createElement('div');
    card.classList.add('hero-card');
    //cria a imagem
    const img=document.createElement('img');
    img.src=`assets/images/${heroi.type}.jpg`;
    img.alt=`imagem do heroi${heroi.name}.jpg`;

    const heroInfo=document.createElement('div');
    heroInfo.classList.add('hero-info');
    //cria as info que estao dentro de heroi info
    const spanName=document.createElement('span');
    spanName.classList.add('hero-name');
    spanName.textContent=heroi.name;

    const spanLevel=document.createElement('span');
    spanLevel.textContent=heroi.type;
    //adiciona a heroi info, filhos dentro de pai
    heroInfo.appendChild(spanName);
    heroInfo.appendChild(spanLevel);
    //adiciona ao card
    card.appendChild(img);
    card.appendChild(heroInfo);

    return card;
}
    function renderizarGrid(){
        const grid=document.querySelector('#heroes-grid')
        //limpa o grid
        grid.replaceChildren();
        //percorre o array
        heroes.forEach((heroi)=>{
        //para cada heroi percorrido no array vai criar o elemento
        const heroiCard=criarHeroi(heroi);
        //adiciona ao grid
        grid.appendChild(heroiCard)
        })
    }
    renderizarGrid();
