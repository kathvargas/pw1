// Array de produtos
const products = [
    { name: "Caderno 96 folhas", reference: "c2193", price: 29.99, quantity: 2 },
    { name: "Caneta esferográfica", reference: "e9455", price: 3.50, quantity: 3 },
    { name: "Borracha branca", reference: "e8321", price: 1.50, quantity: 1 },
    { name: "Lápis preto nº2", reference: "e1894", price: 1.20, quantity: 2 },
    { name: "Mochila escolar", reference: "b4741", price: 179.90, quantity: 1 }
];

// variável para armazenar o produto que está sendo editado 
// (inicialmente nula, pois não há edição em andamento)
let editingProduct = null;

// Seleciona o input de busca e define o evento "input" 
const inputSearch = document.querySelector("#input-search");
inputSearch.addEventListener("input", renderProductsTable);

// Seleciona o select de ordenação e define o evento "change"
const selectSort = document.querySelector("#select-sort");
selectSort.addEventListener("change", renderProductsTable);

// Seleciona o botão de enviar pedido e define o evento "click"
const buttonSend = document.querySelector("#button-send");
buttonSend.addEventListener("click", sendOrder);

// Seleciona o formulário de cadastro/edição de produto 
const form = document.querySelector("#product-form");

// Chama a função renderProductsTable() para exibir os produtos na tabela
renderProductsTable();



// A função renderProductsTable() é responsável por exibir os produtos na tabela HTML
function renderProductsTable() {
    // obtém a referência para o corpo da tabela
    const tableBody = document.querySelector("#products-table tbody");

    // Limpa o conteúdo anterior da tabela
    tableBody.replaceChildren(); // Limpa o conteúdo anterior

    // chama a função filterProducts() aplicar o filtro nos produtos
    // a função retorna um novo array com os produtos filtrados
    const filteredProducts = filterProducts(products);

    // chama a função sortProducts para ordenar os produtos filtrados
    // a função modifica (de forma destrutiva) o array recebido, ordenando seus elementos
    sortProducts(filteredProducts);

    // ### QUESTÃO 1 ###
    // Utilizando o método forEach(), percorra o array com os produtos filtrados e ordenados:
    // - para cada produto, chame a função createProductRow() para criar a linha <tr>
    //   que representa o produto na tabela. Não esqueça de passar o produto como argumento!
    // - em seguida, utilize o método append() para adicionar a linha criada ao corpo da tabela.
    filteredProducts.forEach((product)=>{
        const productCriado=createProductRow(product);
        tableBody.appendChild(productCriado);
    })

    

    // ### QUESTÃO 2 ###
    // Utilizando o método reduce(), calcule o valor total do pedido:
    // - some o preço multiplicado pela quantidade de cada produto
    // - a linha abaixo deve ser substituída pela implementação correta utilizando o método reduce()
    const totalValue = filterProducts.reduce((total,product)=>{
        return total +(product.price*product.quantity,0)});
    
    // obtém a referência para o elemento que exibe o valor total do pedido
    const totalValueElement = document.querySelector("#total-value");
    totalValueElement.textContent = `R$ ${totalValue.toFixed(2)}`;
}



// A função filterProducts() recebe o array de produtos como parâmetro e retorna um novo array
// contendo apenas os produtos cujo nome inclui o termo de busca digitado no campo de busca
function filterProducts(products) {
    // obtém o valor digitado no campo de busca e converte para minúsculas
    const searchTerm = inputSearch.value.toLowerCase();



    // ### QUESTÃO 3 ###
    // Utilizando o método filter(), crie um novo array contendo apenas os produtos
    // cujo nome inclui o termo de busca (ignorando maiúsculas/minúsculas)
    // A linha abaixo deve ser substituída pela implementação correta utilizando o método filter()
    const filteredProducts =products.filter(product=>{
        return (product.name.toLowerCase().includes(searchTerm));
       
})   


    return filteredProducts;
}

function sortProducts(products) {

    // obtém o valor selecionado no select de ordenação
    const sortOption = selectSort.value;

    // ### QUESTÃO 4 ###
    // Utilize a estrutura switch abaixo para implementar a lógica de ordenação dos produtos:
    // - para cada caso, utilize o método sort() para ordenar o array de produtos com base na opção selecionada

    // conforme o valor de sortOption...
    switch (sortOption) {
        case "name-ascending":
            // ...
            products.sort((a,b)=>{
                if(a.name<b.name) return -1;
                if(a.name>b.name) return 1;
            return 0;
            })
            break;
        case "name-descending":
            // ...
            if(a.name>b.name) return -1;
                if(a.name<b.name) return 1;
            return 0;
            break;
        case "price-ascending":
            // ...
            products.sort((a,b)=>a.price-b.price)
            break;
        case "price-descending":
            // ...
             products.sort((a,b)=>b.price-a.price)
            break;
        case "quantity-ascending":
            // ...
            products.sort((a,b)=>a.quantity-b.quantity)
            break;
        case "quantity-descending":
            // ...
             products.sort((a,b)=>b.quantity-a.quantity)
            break;
        case "total-ascending":
            // ...
            break;
        case "total-descending":
            // ...
            break;
        // case "none": não faz nada, mantém a ordem original dos produtos
    }
}

// Função para lidar com a exclusão de um produto
function deleteProduct(reference) {   
    // ### QUESTÃO 5 ###
    // Utilizando o método findIndex(), encontre o índice do produto a ser excluído no array de produtos
    const index = products.findIndex(p => p.reference === reference);

    // Se o produto for encontrado, remove-o do array
    if (index !== -1) {

        // ### QUESTÃO 6 ###
        // Utilize o método splice() para remover o produto do array de produtos, 



        if (editingProduct === reference) {
            form.reset();
            editingProduct = null;
        }

        // Atualiza a tabela para refletir a remoção
        renderProductsTable();
    }
}



// Implementa o evento "submit" para o formulário
form.addEventListener("submit", event => {
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();

    // Cria um objeto FormData a partir do formulário para obter os valores dos campos
    const data = new FormData(form);
    const name = data.get("name").trim();
    const reference = data.get("reference").trim();
    const price = parseFloat(data.get("price"));
    const quantity = parseInt(data.get("quantity"), 10);

    // Valida se o nome do produto foi informado
    if (!name) {
        alert("Por favor, informe o nome do produto.");
        return;
    }

    // Valida se a referência do produto foi informada
    if (!reference) {
        alert("Por favor, informe a referência do produto.");
        return;
    }

    // Valida se o preço é um número válido e maior que zero
    if (isNaN(price) || price <= 0) {
        alert("Por favor, informe um preço válido.");
        return;
    }

    // Valida se a quantidade é um número inteiro válido e maior que zero
    if (isNaN(quantity) || quantity <= 0) {
        alert("Por favor, informe uma quantidade válida.");
        return;
    }

    // ### QUESTÃO 7 ###
    // Utilize o método some() para verificar se já existe um produto com a mesma referência    



    if (referenceExists) {
        alert("Já existe um produto com essa referência.");
        return;
    }

    if (editingProduct) { // se estiver editando um produto:         
        // encontra o produto no array e atualiza seus dados
        const product = products.find(p => p.reference === editingProduct);

        // se o produto for encontrado, atualiza seus dados com os valores do formulário
        if (product) {
            product.name = name;
            product.reference = reference;
            product.price = price;
            product.quantity = quantity;
        }
    } else { // caso não seja uma edição:
        // cria um novo objeto produto com os dados do formulário
        const newProduct = {
            name,
            reference,
            price,
            quantity
        };    
        
        // ### QUESTÃO 8 ###
        // Utilize o método push() para adicionar o novo produto ao array de produtos
 

    }

    // Atualiza a tabela para refletir as alterações (adição ou edição de produto)
    renderProductsTable();

    // Limpa os campos do formulário,
    form.reset(); 
    // reseta a variável editingProduct para null, indicando que não há mais edição em andamento
    editingProduct = null;
});




// Função para lidar com a edição de um produto
function editProduct(reference) {

    // Armazena a referência do produto que está sendo editado na variável editingProduct
    editingProduct = reference;

    // ### QUESTÃO 9 ###
    // Utilizando o método find(), encontre o produto a ser editado no array de produtos



    // Se o produto for encontrado, preenche os campos do formulário com os dados do produto
    if (product) {
        document.querySelector("#input-name").value = product.name;
        document.querySelector("#input-reference").value = product.reference;
        document.querySelector("#input-price").value = product.price;
        document.querySelector("#input-quantity").value = product.quantity;
    }
}



// Função para lidar com o envio do pedido
function sendOrder() {
    // Essa função simula o envio do pedido a uma API
    // com a lista de itens contendo referência e quantidade de cada produto
    // no formato JSON

    // Verifica se há produtos no pedido, caso contrário exibe um alerta e retorna
    if (products.length === 0) {
        alert("Não há produtos no pedido.");
        return;
    }


    // ### QUESTÃO 10 ###
    // Utilize o método map() para criar um novo array com os itens do pedido
    // cada item deve ser um objeto contendo apenas a referência e a quantidade
    



    // alerta confirmando o envio do pedido, exibindo a lista de itens no formato JSON
    alert("Pedido enviado:\n" + JSON.stringify(items, null, 4));
}



// Seleciona o botão de cancelar e define o evento "click"
const btnCancel = document.querySelector("#button-cancel");
btnCancel.addEventListener("click", () => {    
    // Limpa os campos do formulário
    form.reset();
    // reseta a variável editingProduct para null, indicando que não há mais edição em andamento
    editingProduct = null;
});



// A função createProductRow() recebe um objeto produto como parâmetro e retorna um elemento <tr>
function createProductRow(product) {

    /* Exemplo de HTML para uma linha de produto:
        <tr>
            <td>Caderno 96 folhas</td>
            <td>R$ 29,99</td>
            <td>15</td>
            <td>R$ 449,85</td>
            <td class="actions">
                <button class="btn-edit" type="button">✏️</button>
                <button class="btn-delete" type="button">❌</button>
            </td>
        </tr>
    */

    // Cria um elemento <tr> para representar a linha da tabela do produto
    const row = document.createElement("tr");

    // Cria o elemento <td> para o nome do produto e define seu conteúdo de texto 
    // como o nome do produto
    const tdName = document.createElement("td");
    tdName.textContent = product.name + " (" + product.reference + ")";

    // Cria o elemento <td> para o preço do produto e define seu conteúdo de texto 
    // como o preço do produto formatado com duas casas decimais e prefixado com "R$"
    const tdPrice = document.createElement("td");
    tdPrice.textContent = `R$ ${product.price.toFixed(2)}`;

    // Cria o elemento <td> para a quantidade do produto e define seu conteúdo de texto
    // como a quantidade do produto
    const tdQuantity = document.createElement("td");
    tdQuantity.textContent = product.quantity;

    // Cria o elemento <td> para o valor total do produto
    // calcula o valor total (preço * quantidade) 
    // e define seu conteúdo de texto com o valor formatado com duas casas decimais e prefixado com "R$" 
    const tdTotal = document.createElement("td");
    const total = product.price * product.quantity;
    tdTotal.textContent = `R$ ${total.toFixed(2)}`;

    // Cria o elemento <td> para as ações (editar e excluir)
    // e adiciona a classe "actions"
    const tdActions = document.createElement("td");
    tdActions.classList.add("actions");

    // Cria o botão de editar, adiciona a classe "btn-edit" e define seu conteúdo de texto como "✏️"
    const btnEdit = document.createElement("button");
    btnEdit.type = "button";
    btnEdit.classList.add("btn-edit");
    btnEdit.textContent = "✏️";
    
    // Define o evento de clique para o botão de editar, 
    // chamando a função editProduct() e passando a referência do produto como argumento
    btnEdit.addEventListener("click", () => {
        editProduct(product.reference);
    });

    // Cria o botão de excluir, adiciona a classe "btn-delete" e define seu conteúdo de texto como "❌"
    const btnDelete = document.createElement("button");
    btnDelete.type = "button";
    btnDelete.classList.add("btn-delete");
    btnDelete.textContent = "❌";

    // Define o evento de clique para o botão de excluir
    // chamando a função deleteProduct() e passando a referência do produto como argumento
    btnDelete.addEventListener("click", () => {
        deleteProduct(product.reference);
    });

    // Adiciona os botões de editar e excluir ao elemento <td> de ações
    tdActions.append(btnEdit, btnDelete);

    // Adiciona os elementos <td> de nome, preço, quantidade, total e ações ao elemento <tr> da linha do produto
    row.append(tdName, tdPrice, tdQuantity, tdTotal, tdActions);

    // Retorna o elemento <tr> criado (representa a linha do produto na tabela)
    return row;
}
