const alunos=[
{   nome: "Elesbão",
    nota: 4.2 },
{   nome: "Genoveva",  
    nota: 9.7 },
{   nome: "Marvelinho", 
    nota: 8.5 },
{   nome: "Marieta", 
    nota: 6.3 }
];
function renderAlunos(){
    const ulLista=document.querySelector("#alunos");
    //ulLista.innerHTML="";
    ulLista.replaceChildren();//substitui todos os elementos da lista pelo oque estiver dentro ()

    alunos.forEach((aluno,indice )=> {
    const item=document.createElement("li");

    item.textContent=aluno.nome+"-"+aluno.nota;

    item.addEventListener("dblclick",()=>{
        alunos.splice(indice,1)
        renderAlunos();

    })
    ulLista.appendChild(item)
});
}

renderAlunos();

