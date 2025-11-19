let dados = [];

// fetch: Irá trazer a base de dados armazenadas no arquivo "json" que irá ser usada na função do JavaScript

async function iniciarBusca() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    console.log(dados);
    

}