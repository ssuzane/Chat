'use strict'

const infoCelular = [
    {
        nome: "Marie",
        Image: "marie.jpeg",
        mensagemU: "Você vai ficar me devendo na proxima!",
        contato: "susu",
        tempo: "Há 1 hora",
        lido: "3",
    },

    {
        nome: "Filia",
        Image: "filia.jpeg",
        mensagemU: "Estou a te esperar aqui.",
        contato: "susu",
        tempo: "Há 2 minutos",
        lido: "1",
    },

    {
        nome: "parasoul",
        Image: "parasoul.jpeg",
        mensagemU: "Já estou chegando querida...",
        contato: "susu",
        tempo: "Há 5 minutos",
        lido: "1",
    },

    {
        nome: "umbrella",
        Image: "umbrella.jpeg",
        mensagemU: "Parasoul não deixou ue ir >:(",
        contato: "susu",
        tempo: "Há 10 minutos",
        lido: "10",
    },
]

const criando = (infoCelular) => {
    const img = document.createElement('img');
    img.src = `./img/${infoCelular.img}`;
    img.alt = infoCelular.name
    img.classList.add('fotoPerfil')

    const nome = document.createElement('h1')
    nome.textContent = infoCelular.nome
    nome.classList.add('nome')

    const ultimaMensagem = document.createElement('p')
    ultimaMensagem.textContent = infoCelular.ultimaMensagem
    ultimaMensagem.classList.add('mensagemS')

    const contato = document.createElement('div')
    contato.textContent = infoCelular.contato
    contato.classList.add('destinatario')

    const tempo = document.createElement('div')
    tempo.textContent = infoCelular.tempo
    tempo.classList.add('tempo')

    return intem
}

const mostrarItem = (infoCelular) => {
    const itemConteiner = document.getElementById('item-conteiner')
    const item = criarItem(infoCelular)
   itemConteiner.appendChild(item) 
} 
 
infoCelular.forEach(mostrarItem);
