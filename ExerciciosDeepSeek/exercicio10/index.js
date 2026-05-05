let habitos=[
    {nome:'beber 2L',categoria:'saude',concluido:false},
    {nome:'estudar js',categoria:'estudo',concluido:false},
    {nome:'ler 30min',categoria:'lazer',concluido:true},
    {nome:'caminhar',categoria:'saude',concluido:false},
    {nome:'praticar ingles',categoria:'estudo',concluido:false}
]
const form=document.querySelector('#form-habito');
const lista=document.querySelector('#lista-habitos');

function criarElementoHabito(habito,indice){
    const lista=document.createElement('li');
    lista.classList.add(habito.categoria);
    if(habito.concluido===true){
        lista.classList.add('concluido')
    }
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.checked=habito.concluido;

    const spanNome=document.createElement('span')
    spanNome.textContent=habito.nome;

    const button=document.createElement('button')
    button.textContent="❌";

    lista.appendChild(checkbox);
    lista.appendChild(spanNome);
    lista.appendChild(button);

    checkbox.addEventListener('change', (event)=>{
        habitos[indice].concluido=checkbox.checked;
        renderizarLista();
    })
    button.addEventListener('click',(event)=>{
        habitos.splice(indice,1)
        renderizarLista()
    })
    return lista;
}
    function renderizarLista(){
        lista.replaceChildren();
        habitos.forEach((habito,indice)=>{
            const li=criarElementoHabito(habito,indice);
            lista.appendChild(li)

        })
    }
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const data= new FormData(form);
        const nome=data.get('nome');
        const categoria=data.get('categoria');
        const newHabito={
            nome:nome,
            categoria:categoria,
            concluido:false
        }
        habitos.push(newHabito);
        renderizarLista();
        form.reset();
    })
    renderizarLista();