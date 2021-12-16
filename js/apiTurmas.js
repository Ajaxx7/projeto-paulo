'use strict'

const consumirTurmas = async (id_curso) => {
    const urlAPI = await fetch (`https://backendleonid.herokuapp.com/estagio/v1/turmas/${id_curso}`);
    const consumirJSON = await urlAPI.json();
    const dados = consumirJSON.map(criarItem);
} 

const criarItem = (dados) => {
    const container = document.querySelector('#base')
    const novaDiv= document.createElement("div")
    novaDiv.classList.add('formataContainers')
    //novaDiv.dataset.id_curso = dados.id_curso
    novaDiv.innerHTML = 
    `
    
        <div class="container" data-idcurso="${dados.id_curso}">
            <div class="nomeCurso">
                <p id="textoContainer">${dados.nome}</p>
            </div>
        </div>
    
    `
    container.appendChild(novaDiv);
}

/*const verClick = ({target}) => {
    target.dataset.idcurso
}*/

//Evento que inicia quando a página é carregada
document.addEventListener("DOMContentLoaded", consumirTurmas);
//document.getElementById("base").addEventListener("click", verClick)

export {consumirTurmas}