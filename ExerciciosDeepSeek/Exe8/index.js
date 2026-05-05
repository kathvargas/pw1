const formProduto=document.querySelector('#form-produto');
const disponiveis=document.querySelector('#estoque-alto');
const baixoEstoque=document.querySelector('#estoque-baixo');

formProduto.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data=new FormData(formProduto);
const nome=data.get('nome');
const categoria=data.get('categoria');
const preco=parseFloat(data.get('preco'));
const estoque=parseInt(data.get('estoque'));

const produtoCadastrado=document.createElement('li');
produtoCadastrado.classList.add('produto');

const spanNome=document.createElement('span')
spanNome.textContent=nome;

const spanResto=document.createElement('span')
spanResto.textContent=`Categoria:${categoria}|Preço:${preco.toFixed(2)}|Estoque:${estoque}`;

produtoCadastrado.appendChild(spanNome);
produtoCadastrado.appendChild(spanResto);

if(estoque>=5){
    disponiveis.appendChild(produtoCadastrado);
}else{
    baixoEstoque.appendChild(produtoCadastrado)
}

formProduto.reset();
});
formProduto();
