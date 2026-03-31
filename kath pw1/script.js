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

const ulClient=document.querySelector('#client-list')

clientes.forEach((cliente)=>{
    const item=document.createElement("li")//li vazio
    item.textContent=cliente.name+"-"+cliente.limite;
if(cliente.limite>=5000){
    item.style.color='green';
}
item.addEventListener("click",()=>{
    alert("email:"+cliente.email);
})

    ulClient.appendChild(item)


})
//innerHtml nos limita.
//const liCliente=document.createElement("li");
//liCliente.textContent="Elesbao- 4500";

//ulClient.appendChild(liCliente)
