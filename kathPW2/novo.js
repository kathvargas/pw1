const form=document.querySelector('#form-novo');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const dados=new FormData(form);
    const descricao=dados.get('descricao');
    const valor=parseFloat(dados.get('valor'));
    const tipo=dados.get('tipo');
    let categoria=dados.get('categoria');
    const data=dados.get('data');

    let valido=true;
    if(descricao===""){
        alert("Descriçao vazia!");
        valido=false;
    }
    if(isNaN(valor) ||valor<=0){
        alert("Valor invalido!");
        valido=false;
    }
    if(data===""){
        alert("Preencha a data!");
        valido=false;
    }
    if(!valido) return;

    const valorFormatado=valor.toFixed(2);

    if(categoria===""){
        categoria="outros"
    }
    const novaTransacao={
        id:Date.now(),
        descricao:descricao,
        valor:valor,
        tipo:tipo,
        categoria:categoria,
        data:data
    }
    let transacoes=localStorage.getItem("gastos_transacoes");
    transacoes=transacoes ?JSON.parse(transacoes):[];

    transacoes.push(novaTransacao);
    localStorage.setItem("gastos_transacoes",JSON.stringify(transacoes));
    window.location.href = "lancamentos.html";

})