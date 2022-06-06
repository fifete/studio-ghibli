//alert("Módulo RESPONDE");
/*************** Import Modules *******************/
import dataGhibli from './data/ghibli/ghibli.js';

/**************** Declaration of Variables *******************/

/************* Get data of Ghibli´s films ****************/
const dataFilms = dataGhibli.films;

/************* Template for show film data ****************/
const filmsCards = document.getElementById("films-cards");

/************* Show film data with a template ****************/
//1. Muestra info de cada película con esta plantilla:
const showData = (film)=> {
    //1.1. Crear una contenedor para la plantilla
    const filmInfo = document.createElement('div');
    filmInfo.className = "card-container";

    //1.2. Plantilla de cada tarjeta, solo cambiarán sus datos como título, año,..
    const templateCard = 
    `<div class= "film-card container" id= ${film.id}>
        <div class= "film-poster">
            <img src= ${film.poster}/>
            <div class= "film-rate bg-white">⭐ <span>${film.rt_score}</span></div>
        </div>
        <div class= "film-title-container">
            <h2 class= "fs-800 margin-bottom">${film.title}</h2>
            <p>${film.release_date}</p>
        </div>
    </div>`
    
    filmInfo.innerHTML= templateCard;
    return filmInfo;
    //return templateCard;
}

//2. Al cargar toda la página, mostrar la data en el div films-cards
function loadData (films) {
    //films: [{film1}, {film2}, ..]
    films.forEach(objectInside => {
        filmsCards.appendChild(showData(objectInside));
    });
}

window.addEventListener('load', () => loadData(dataFilms));
