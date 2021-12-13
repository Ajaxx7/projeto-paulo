"use strict"

/* <div class="cardAluno">
    <img src="img/foto.jpg" class="fotoAluno">
    <div class="nomeAluno">Senai Augusto</div>
</div> */

const criarCarometro = (dados) => {
    //Seleciona o container que vai ser mudado
    const container = document.querySelector(".linhaAlunos")
    //Criando uma nova div
    const novaDiv = document.createElement("div")
	novaDiv.classList.add('cardAluno')
   	novaDiv.innerHTML =
	`
    <div class="cardAluno">
        <img src="${dados.foto}" class="fotoAluno">
        <div class="nomeAluno">${dados.nome}</div>
    </div>
	`
    container.appendChild(novaDiv);
    
}

const verClasse = async (evento) => {
	const url = `https://backendleonid.herokuapp.com/estagio/v1/alunos/`
	const imagensResponse = await fetch(url);
    const dados = await imagensResponse.json();
    const itemArray = dados.map(criarCarometro)	
}

document.querySelector(".logo").addEventListener("click", verClasse)

