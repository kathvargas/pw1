let itens=[
    {nome:'Leite',categoria:'laticinios',comprado:false},
    {nome:'pao frances',categoria:'padaria',comprado:false},
    {nome:'arroz',categoria:'graos',comprado:true},
    {nome:'tomate',categoria:'hortifruti',comprado:false},
    {nome:'frango',categoria:'carnes',comprado:false},
    {nome:'queijo mussarela',categoria:'laticinios',comprado:false},
    {nome:'manteiga',categoria:'laticinios',comprado:true}
]
const form=document.querySelector('#form-item');
const listaUl=document.querySelector('#lista-compras');
function criarElementos(item,indice){
    const lista=document.createElement('li')
    lista.classList.add(item.categoria);
    if(item.comprado){
        lista.classList.add('comprado')
    }
    const checkBox=document.createElement('input');
    checkBox.type='checkbox';
    checkBox.checked=item.comprado;

    const spanItem=document.createElement('span');
    spanItem.textContent=item.nome

    const botaoRemove=document.createElement('button');
    botaoRemove.textContent='❌';

    lista.appendChild(checkBox);
    lista.appendChild(spanItem);
    lista.appendChild(botaoRemove);

    checkBox.addEventListener('change',function(){
        itens[indice].comprado=checkBox.checked;
        renderizarLista();
    })
    botaoRemove.addEventListener('click',function(){
        itens.splice(indice,1);
        renderizarLista();
    })
    return lista;
}
function renderizarLista(){
    listaUl.replaceChildren();
    itens.forEach((item,posicao)=>{
        const li=criarElementos(item,posicao);
        listaUl.appendChild(li);
    });
}
form.addEventListener('submit',(event)=>{
    event.preventDefault()
   const data=new FormData(form);
   const nome=data.get('nome');
   const categoria=data.get('categoria')

   const item={
    nome:nome,
    categoria:categoria,
    comprado:false
   };
   itens.push(item);
   renderizarLista()
   form.reset();
})
renderizarLista();