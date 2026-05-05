const produtos=[
    {id:Date.now(), nome:"smartphone x",categoria:"eletronicos",preco:1299.99,estoque:15},
    {id:Date.now(), nome:"smartphone z",categoria:"eletronicos",preco:2000.99,estoque:20},
    {id:Date.now(), nome:"smartphone m",categoria:"eletronicos",preco:3999.99,estoque:21},
    {id:Date.now(), nome:"smartphone y",categoria:"eletronicos",preco:900.99,estoque:10},
    {id:Date.now(), nome:"smartphone w",categoria:"eletronicos",preco:1599.99,estoque:3},
]
const divLista=document.querySelector('#lista-produtos');
const filtroCategoria=document.querySelector('#filtro-categoria');
const filtroMin=document.querySelector('#filtro-min');
const filtroMax=document.querySelector('#filtro-max');
const form=document.querySelector('#form-produto');

 function renderizarProdutos(){
    divLista.replaceChildren();//limpa a lista

    const categoriaSelecionada=filtroCategoria.value;
    const precoMin=parseFloat(filtroMin.value)||0;
    const precoMax=parseFloat(filtroMax.value)||Infinity;

    const produtosFiltrados=produtos.filter(produto=>{
        if(categoriaSelecionada !=="todas" && produto.categoria !== categoriaSelecionada){
            return false; //o produto tem que ser diferente de todas e diferente da categoria selecionada, ai vai ser false
            //nao passou no filtro
        }
        if(produto.preco<precoMin || produto.preco>precoMax){
            return false; //nao passou no filtro
        }
        //passou pelos filtros
        return true;
    })

    //criar para cada produto filtrado um card
    produtosFiltrados.forEach(produto=>{
    const card=document.createElement('div');
    card.classList.add('produto-card');

    const nomeProduto=document.createElement('h3');
    nomeProduto.textContent=produto.nome;

    const categoriaProduto=document.createElement('p');
    categoriaProduto.textContent=produto.categoria;

    const precoFormatado=document.createElement('p');
    precoFormatado.textContent=produto.preco.toFixed(2);

    const estoqueProduto=document.createElement('p');
    estoqueProduto.textContent=produto.estoque;

    const btnRemover=document.createElement('button');
    btnRemover.textContent='Remover';

    btnRemover.addEventListener("click",()=>{
        const index=produtos.findIndex(p=> p.id===produto.id);
        if(index!==-1){
            produtos.splice(index,1)}
        renderizarProdutos();
    })

    card.appendChild(nomeProduto)
    card.appendChild(categoriaProduto)
    card.appendChild(precoFormatado)
    card.appendChild(estoqueProduto)
    card.appendChild(btnRemover)
    
    divLista.appendChild(card);
    })
}
    filtroCategoria.addEventListener("input",renderizarProdutos);
    filtroMin.addEventListener("input",renderizarProdutos);
    filtroMax.addEventListener("input",renderizarProdutos);
    

    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const data=new FormData(form);

        const nome=data.get('nome');
        const categoria=data.get('categoria');
        const preco=parseFloat(data.get('preco'));
        const estoque=parseFloat(data.get('estoque'));

        const novoId=Date.now();
        const novoProduto={
            id:novoId, nome:nome, categoria:categoria,preco:preco,estoque:estoque
        }
        produtos.push(novoProduto);

        renderizarProdutos();

        form.reset();
    })
    
 renderizarProdutos();