
const filmes=[
    {titulo:'O Poderoso Chefão',genero:'drama',assistido:true},
    {titulo:'Interestelar',genero:'ficcao',assistido:false},
    {titulo:'Todo Mundo em Pânico',genero:'comedia',assistido:false},
    {titulo:'Invocação do Mal',genero:'terror',assistido:false},
    {titulo:'Velozes e Furiosos',genero:'acao',assistido:true},
]
const form=document.querySelector('#form-filme');
const lista=document.querySelector('#lista-filmes');

function criarElementos(filme,indice){
    const li=document.createElement('li');
    li.classList.add(filme.genero);
    if(filme.assistido){
        li.classList.add('assistido')
    }
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.checked=filme.assistido;

    const spanTitulo=document.createElement('span');
    spanTitulo.textContent=filme.titulo;

    const button=document.createElement('button');
    button.textContent="❌";

    li.appendChild(checkbox);
    li.appendChild(spanTitulo);
    li.appendChild(button);

    checkbox.addEventListener('change',(event)=>{
        filmes[indice].assistido=checkbox.checked;
        renderizarLista();
    })
    button.addEventListener('click',(event)=>{
        filmes.splice(indice,1);
        renderizarLista();
    })
    return li;
}
    function renderizarLista(){

        lista.replaceChildren();
        filmes.forEach((filme,indice)=>{
            const li=criarElementos(filme,indice);
            lista.appendChild(li);
        })
    }
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const dados= new FormData(form);
        const titulo=dados.get('titulo');
        const genero=dados.get('genero');

        const newFilme={
            titulo:titulo,
            genero:genero,
            assistido:false
        };
        filmes.push(newFilme);
        renderizarLista();
        form.reset();
    })
    renderizarLista();