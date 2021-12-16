"use strict"

const limparElementos = (elemento) => {
    while(elemento.firstChild) {
        elemento.removeChild(elemento.lastChild);
    }
}

const criarCarometro = (dados) => {
    //Seleciona o container que vai ser mudado
    const container = document.querySelector(".linhaAlunos")
    //Criando uma nova div
    const novaDiv = document.createElement("div")
	novaDiv.classList.add('cardAluno')
   	novaDiv.innerHTML =
	`
    <div class="cardAluno">
        <img src="../img/${dados.foto}" class="fotoAluno">
        <div class="nomeAluno">${dados.nome}</div>
    </div>
	`
    container.appendChild(novaDiv);
    
}

const verClasse = async () => {
    limparElementos(document.querySelector(".linhaAlunos"));
	const url = `https://backendleonid.herokuapp.com/estagio/v1/alunos/`
	const imagensResponse = await fetch(url);
    const dados = await imagensResponse.json();
    const itemArray = dados.map(criarCarometro)	
}

document.querySelector(".logo").addEventListener("click", verClasse)

