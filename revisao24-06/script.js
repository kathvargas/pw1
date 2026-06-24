
function obterMovimentacoes() {   
    const dados = localStorage.getItem("movimentacoes");

    if (dados !== null) {
        return JSON.parse(dados);
    }

    const movimentacoes = [
        { id: 1, descricao: "Salário", valor: 2500, tipo: "receita", data: "2026-06-05" },
        { id: 2, descricao: "Freelance", valor: 600, tipo: "receita", data: "2026-06-12" },
        { id: 3, descricao: "Mercado", valor: 350, tipo: "despesa", data: "2026-06-08" },
        { id: 4, descricao: "Internet", valor: 120, tipo: "despesa", data: "2026-06-10" },
        { id: 5, descricao: "Transporte", valor: 180, tipo: "despesa", data: "2026-06-03" }
    ];

    localStorage.setItem("movimentacoes", JSON.stringify(movimentacoes));

    return movimentacoes;
}

function renderizarMovimentacoes() {
    const listaMovimentacoes=document.querySelector('#lista-movimentacoes')
    const movimentacoes=obterMovimentacoes()
    listaMovimentacoes.replaceChildren()
    // Obtém as movimentações com a função obterMovimentacoes()
    // Limpa a lista de movimentações no HTML
    // Para cada movimentação:
    movimentacoes.forEach((movimentacao)=>{
        const html=criarHtmlMovimentacao(movimentacao);
        listaMovimentacoes.appendChild(html)
        

    })
    atualizarTotais();
    // - cria o HTML correspondente chamando criarHtmlMovimentacao()
    // - adiciona o elemento <li> retornado à lista de movimentações no HTML
    // Atualiza os totais chamando atualizarTotais()
}


function criarHtmlMovimentacao(movimentacao) {
    /*
    <li class="movimentacao despesa">
        <span>Internet</span>
        <span>10/06/2026</span>
        <span class="valor">R$ 120,00</span>
        <button>Excluir</button>
    </li>
    */
    const li=document.createElement('li');
    li.classList.add('movimentacao');
    if(movimentacao.tipo==='receita'){
        li.classList.add('receita')
    } else{
        li.classList.add('despesa')
    }
    const spanDescricao=document.createElement('span')
    spanDescricao.textContent=movimentacao.descricao;
    // Cria um elemento <li> para representar a movimentação
    // Adiciona a classe "movimentacao" e, dependendo do tipo, a classe "receita" ou "despesa"
    // Cria um <span> para a descrição, 
    const spanData=document.createElement('span')
    const partes=movimentacao.data.split('-');
    spanData.textContent=partes[2] + '/' + partes[1] + '/' + partes[0]

    // Cria um <span> para a data, formatada como DD/MM/AAAA
    // Cria um <span> para o valor, formatado como moeda, e com a classe "valor"
    const spanValor=document.createElement('span');
    spanValor.classList.add('valor');
    spanValor.textContent=movimentacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    

    
    // Cria um botão com o texto "Excluir" 
    const buttonExcluir=document.createElement('button')
    buttonExcluir.textContent='Excluir';

    
    buttonExcluir.addEventListener('click',()=>{
        excluirMovimentacao(movimentacao.id)
    })
    li.appendChild(spanDescricao);
        li.appendChild(spanData);
        li.appendChild(spanValor);
        li.appendChild(buttonExcluir);
        return li;
    
    // Adiciona um event de click para chamar a função excluirMovimentacao() passando o id da movimentação
    // Adiciona os spans e o botão como filhos do <li> 
    // Retorna o elemento <li>

   
}

function excluirMovimentacao(id) {
    const movimentacoesArray=obterMovimentacoes();
   const indice=movimentacoesArray.findIndex(movimentacao=>movimentacao.id===id);
    // Obtém as movimentações com a função obterMovimentacoes()
    // Encontra o índice da movimentação a ser excluída, procurando pelo id
    // Se a movimentação for encontrada:
    if(indice!== -1){
        movimentacoesArray.splice(indice,1)
        localStorage.setItem('movimentacoes',JSON.stringify(movimentacoesArray));
        renderizarMovimentacoes()
    } else{
        alert('a movimentação não foi encontrada')
    }
    // - remove a movimentação do array 
    // - atualiza o localStorage
    // - renderiza a lista de movimentações
    // Caso contrário, exibe um alerta informando que a movimentação não foi encontrada


}

function atualizarTotais() {
    const movimentacoes=obterMovimentacoes()
    let totalDespesa=0
    let totalReceita=0
    movimentacoes.forEach((mov)=>{
        if(mov.tipo==='receita'){
            totalReceita=+mov.valor;
        } else if(mov.tipo==='despesa'){
            totalDespesa=+mov.valor;
        }
        const saldo=totalReceita-totalDespesa;

        const totalReceitas=document.querySelector('#total-receitas');
        const totalDespesas=document.querySelector('#total-despesas');
        const totalSaldo=document.querySelector('#saldo');

        totalReceitas.textContent=totalReceita.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        totalDespesas.textContent=totalDespesa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        totalSaldo.textContent=saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    })
    // Obtém as movimentações com a função obterMovimentacoes()
    // Percorre o array de movimentações somando, separadamente, os valores de receitas e despesas
    // Calcula o saldo subtraindo as despesas das receitas
    // Atualiza o conteúdo dos spans #total-receitas, #total-despesas e #saldo com os valores formatados


}

renderizarMovimentacoes();