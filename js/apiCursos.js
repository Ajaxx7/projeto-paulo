'use strict'

import {consumirTurmas} from '/js/apiTurmas.js';

const consumirCursos = async () => {
    const urlAPI = await fetch ('https://backendleonid.herokuapp.com/estagio/v1/cursos/');
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
    <a href="selecaoTurmas.html">
        <div class="container" data-idcurso="${dados.id_curso}">
            <div class="nomeCurso">
                <p id="textoContainer">${dados.nome}</p>
            </div>
        </div>
    </a>
    `
    container.appendChild(novaDiv);
}

const verClick = ({target}) => {
    const id = target.dataset.idcurso
    consumirTurmas(id)
}

//Evento que inicia quando a página é carregada
document.addEventListener("DOMContentLoaded", consumirCursos);
document.getElementById("base").addEventListener("click", verClick)
