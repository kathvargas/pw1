const clientes=[
{   nome: "Elesbão",
    email: "elesbao@email.com", 
    limite: 4500 },
{   nome: "Genoveva", 
    email: "genoveva@email.com", 
    limite: 5750 },
{   nome: "Marvelinho", 
    email: "marvelinho@email.com", 
    limite: 9980 },
{   nome: "Marieta", 
    email: "marieta@email.com", 
    limite: 2600 }
];


let linhas="";
let soma=0;

clientes.forEach((cliente)=>{
    const formatado=(cliente.limite.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}));
linhas+=`<tr>
<td>${cliente.nome}</td>
<td>${cliente.email}</td>
<td>${formatado}</td>
</tr>`;

soma+=cliente.limite;
})

document.getElementById("dados-clientes").innerHTML=linhas;

const media=soma/clientes.length;

mediaFormatada=(media.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"}));

    document.getElementById("limite-medio").textContent=mediaFormatada





