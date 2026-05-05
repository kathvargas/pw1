const alunos=[
    {id:1, nome:"Elesbao"},
    {id:2, nome:"Marvelinho"},
    {id:3, nome:"Genoveva"}
];
const disciplinas=["matematica","portugues","ciencias"]

const notas=[
    [8.0,7.5,9.0],
    [6.5, 8.0, 7.0],
    [5.0, 9.0, 6.5]
];
    const tabela=document.querySelector("#boletim-tabela")
    const thead=document.querySelector('thead');
    const tbody=document.querySelector('tbody')
    const divMedias=document.querySelector('#medias-gerais')
    const botaoAluno=document.querySelector('#adicionar-aluno');
    botaoAluno.addEventListener('click', adicionarAluno);
    const botaoDisciplina=document.querySelector('#adicionar-disciplina');
    botaoDisciplina.addEventListener('click', adicionarDisciplina);
    function renderizarBoletim(){
        thead.replaceChildren();
        tbody.replaceChildren();

       const cabecalho=document.createElement('tr')

       const thAluno=document.createElement('th')
       thAluno.textContent='Aluno/Disciplina'
       cabecalho.appendChild(thAluno);

       disciplinas.forEach(disciplina=>{
        const th=document.createElement('th');
        th.textContent=disciplina;
        cabecalho.appendChild(th);
       })
       thead.appendChild(cabecalho);

       alunos.forEach((aluno,i)=>{
        const row=document.createElement('tr');

        const thNome=document.createElement('th')
        thNome.textContent=aluno.nome;
        row.appendChild(thNome);

        disciplinas.forEach((disciplina,j)=>{
            const celula=document.createElement('td');
            const input=document.createElement('input');
            input.type='number';
            input.step='0.1';
            input.classList.add('nota-input');

            input.dataset.linha=i;
            input.dataset.coluna=j;

            input.value=notas[i][j];

            input.addEventListener('input',function(){
                const linha=parseInt(this.dataset.linha);
                const coluna=parseInt(this.dataset.coluna);
                let novoValor=parseFloat(this.value);
                if(isNaN(novoValor))novoValor=0;
                notas[linha][coluna]=novoValor;
                calcularEMostrarMedias();
            })
            celula.appendChild(input);
            row.appendChild(celula);
            
        })
        tbody.appendChild(row);
       })
       calcularEMostrarMedias()
    }
    function calcularEMostrarMedias(){
        divMedias.replaceChildren();
        containerAlunos=document.createElement('h3')
        containerAlunos.textContent="media por aluno";
        divMedias.appendChild(containerAlunos);

        const listaAlunos=document.createElement('ul')
        alunos.forEach((aluno,i)=>{
            let soma=0;
            for(let j=0;j<disciplinas.length;j++)
            {
                soma+=notas[i][j];
            }
            const media=(soma/disciplinas.length).toFixed(2)

            const item=document.createElement('li');
            item.textContent=`${aluno.nome}:${media}`
            listaAlunos.appendChild(item)
        })
        divMedias.appendChild(listaAlunos);

        containerDisciplina=document.createElement('h3');
        containerDisciplina.textContent="media por disciplina";
        divMedias.appendChild(containerDisciplina)

        const listaDisciplinas=document.createElement('ul')
        disciplinas.forEach((disciplina,j)=>{
            let soma=0;
            for(let i=0;i<alunos.length;i++){
                soma+=notas[i][j];
            }
            const media=(soma/alunos.length).toFixed(2);

            const item=document.createElement('li');
            item.textContent=`${disciplina}:${media}`
            listaDisciplinas.appendChild(item)
        })
        divMedias.appendChild(listaDisciplinas);

    }

    function adicionarAluno(){
        let nome=prompt('digite o nome do novo aluno')
        if(nome===null||nome===""){
            alert("nome invalido")
            return;
        }
        const novoId=Date.now();
        const novoAluno={
            id:novoId,
            nome:nome
        };
        alunos.push(novoAluno)

        const novaLinha=[]
        for (var i=0;i<disciplinas.length;i++){
            novaLinha.push(0);
        }
        notas.push(novaLinha);

        renderizarBoletim()
    }
    function adicionarDisciplina(){
        let nomeDisciplina=prompt('digite o nome da disciplina')
        if(nomeDisciplina===null||nomeDisciplina===""){
            alert("nome invalido")
            return;
        }
    
        disciplinas.push(nomeDisciplina)

        for (var i=0;i<alunos.length;i++){
            notas[i].push(0);
        }

        renderizarBoletim()
    }