let cardContainer = document.querySelector(".card-container");
let dados = [];

// fetch: Irá trazer a base de dados armazenadas no arquivo "json" que irá ser usada na função do JavaScript
// Qualquer dado que estiver em algum index HTML necessita está entre crases. (` `)
// "cardContainer.appendChild()": Irá definir uma conexão entre os dados e o artigo definido.
// "toLowerCase": Transforma o texto digitado na barra de pesquisa em minusculo, Mesmo que o texto digitado seja maiusculo.

async function iniciarBusca() {
    const inputBusca = document.getElementById("input-busca");
    const termoBusca = inputBusca.value.toLowerCase();

    let resposta = await fetch("data.json");
    dados = await resposta.json();

    const dadosFiltrados = dados.filter(dado => dado.name.toLowerCase().includes(termoBusca));

    renderizarCards(dadosFiltrados);

}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os resultados anteriores
    for (let dado of dados) {
        let article= document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.name}</h2>
        <p>${dado.releaseYear}</p>
        <p>${dado.creator}</p>
        <a href= "${dado.link}" target="_blank">Saiba Mais</a>
        `
        cardContainer.appendChild(article);
    }
}

iniciarBusca(); // Chama a função para carregar os dados iniciais