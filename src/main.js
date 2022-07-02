import { showData, showExtraData } from './data.js';
import { filterBySearchGeneral, OrderAtoZ, OrderZtoA, descendingOrder} from './data.js';
import dataGhibli from './data/ghibli/ghibli.js';

/* ---------Variables------ */
const filmPage1 = document.getElementById ('film-Page1');
const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const secctionMovies = document.getElementById('movies');
const selectProducer = document.getElementById('producers');
const selectDirector = document.getElementById('directors');

/* ---Objects--- */
const arrayGhibli = dataGhibli.films;
const someFilmProps = showData(arrayGhibli);
const extraFilmProps = showExtraData(arrayGhibli);

/* ----Filters---- */
const searchInput = document.querySelector('.filters__search-container .input')
const btnRecent = document.getElementById('most-recent');
const btnRating = document.getElementById('most-rated');
const btnOrderAtoZ = document.getElementById('order-az');
const btnOrderZtoA = document.getElementById('order-za');

/* -----Variables pag2------- */
const filmPage2 = document.getElementById ('film-Page2');
const posterPag2 = document.getElementById('posterPag2');
const titlePag2 = document.getElementById ('titlePag2');
const datePag2 = document.getElementById('datePag2');
const scorePag2= document.getElementById ('scorePag2');
const synopsis = document.getElementById('synopsis');
const directorPag2 = document.getElementById('directorPag2');
const producerPag2 = document.getElementById('producerPag2');

/* ----Extra data pag 2 --- */
const locationsBox = document.getElementById('locations-container');
const vehiclesBox = document.getElementById('vehicles-container');
const charactersBox = document.getElementById('characters-container');

/* Style pag 2 */
filmPage2.style.display = "none";

//Navigation functionallity
navToggle.addEventListener('click', ()=> {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === "false"){
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})

//load dates
    function loadData (films) {
        //films: [{film1}, {film2}, ..]
        secctionMovies.innerHTML="";
        films.forEach(item => {
            secctionMovies.appendChild(preview(item));
        });
    }
    const preview =((movie) =>
        {
            const movieContainer = document.createElement('div');
            movieContainer.classList.add('film-container');
            
            /* const span = document.createElement('span');
            span.textContent = '⭐' + movie.score; */

            const h3 = document.createElement('h3');
            h3.textContent = movie.title;

            const img = document.createElement('img');
            img.setAttribute('src', movie.poster);

            const p = document.createElement('p');
            p.textContent = movie.date;

            //agr. un id xa identificarlo
            img.setAttribute('id', movie.id);

            secctionMovies.appendChild(movieContainer);
            movieContainer.appendChild(img);
            /* movieContainer.appendChild(span); */
            movieContainer.appendChild(h3);
            movieContainer.appendChild(p);

            movieContainer.addEventListener('click', event => showMore(event.target.id));
            return movieContainer;
        })
    window.addEventListener('load', () => loadData(someFilmProps));

    //Mostrar datos extra en la página individual: personajes, vehículos y locaciones
    function loadExtraData (film, prop) {
        //film es el 1er elemt del array: [{film}]

        switch (prop){
            case 'people':
                //Evita que las cards aparezcan más de 1 vez
                charactersBox.innerHTML= '';

                //Mostrar cada personaje con su respectiva información
                film[prop].forEach(character => {
                    charactersBox.appendChild(previewCharacters(character));
                });
                break;

            case 'vehicles':
                vehiclesBox.innerHTML= '';
                film[prop].forEach(vehicle => {
                    vehiclesBox.appendChild(previewVehicles(vehicle));
                });
                break;

            case 'locations':
                locationsBox.innerHTML= '';
                film[prop].forEach(location => {
                    locationsBox.appendChild(previewLocations(location));
                });
                break;
        }
    }

    const previewCharacters =((character) =>
        {
            const characterContainer = document.createElement('div');
            //movieContainer.classList.add('film-container');
            
            const img = document.createElement('img');
            img.setAttribute('src', character.img);
            const h4 = document.createElement('h4');
            h4.textContent = character.name;
            const p = document.createElement('p');
            p.innerHTML = `${character.age}-year-old ${character.gender} of the ${character.specie} species`

            //agr. un id xa identificarlo
            img.setAttribute('id', character.id);

            charactersBox.appendChild(characterContainer);
            characterContainer.appendChild(img);
            characterContainer.appendChild(h4);
            characterContainer.appendChild(p);

            return characterContainer;
        })

    const previewVehicles =((vehicle) =>
        {
            const vehicleContainer = document.createElement('div');
            //movieContainer.classList.add('film-container');
            
            const img = document.createElement('img');
            img.setAttribute('src', vehicle.img);
            const h4 = document.createElement('h4');
            h4.textContent = vehicle.name;
            const p = document.createElement('p');
            p.innerHTML = `Class: ${vehicle.vehicle_class}<br>${vehicle.description}`;

            //agr. un id xa identificarlo
            img.setAttribute('id', vehicle.id);

            vehiclesBox.appendChild(vehicleContainer);
            vehicleContainer.appendChild(img);
            vehicleContainer.appendChild(h4);
            vehicleContainer.appendChild(p);

            return vehicleContainer;
        })

    const previewLocations =((location) =>
        {
            const locationContainer = document.createElement('div');
            //movieContainer.classList.add('film-container');
            
            const img = document.createElement('img');
            img.setAttribute('src', location.img);
            const h4 = document.createElement('h4');
            h4.textContent = location.name;
            const p = document.createElement('p');
            p.textContent = `${location.climate} climate ${location.terrain}`;

            //agr. un id xa identificarlo
            img.setAttribute('id', location.id);

            vehiclesBox.appendChild(locationContainer);
            locationContainer.appendChild(img);
            locationContainer.appendChild(h4);
            locationContainer.appendChild(p);

            return locationContainer;
        })

//1. Filtro para la barra de búsqueda
searchInput.addEventListener('keyup', ()=>{
    selectDirector.value = 'directors';
    selectProducer.value = 'producers';

    //Almacenar valor de búsqueda del user
    let searchValue = searchInput.value;
    //Mostrar todas las películas cuando el user no escriba nada en la barra de búsqueda, de lo contrario hacer el filtrado por título del filme
    if (searchValue.length != 0) {
       let filteredSearch = filterBySearchGeneral(someFilmProps, searchValue, 'title');
       (filteredSearch.length != 0) ? loadData(filteredSearch) : secctionMovies.innerHTML = '';
    } else {
       return loadData(someFilmProps)
    }
});

//2. Ordenar alfabéticamente
btnOrderAtoZ.addEventListener('click', function() {
    //la sig. función modifica el array [{film1}, {fiml2}, ...] a un array ordenado, ascendentemente, por el título del filme
    OrderAtoZ(someFilmProps, 'title');

    //Mostrar el array ordenado en la pantalla
    loadData(someFilmProps);
})

btnOrderZtoA.addEventListener('click', function(){
    //la sig. función modifica el array [{film1}, {fiml2}, ...] a un array ordenado, ascendentemente, por el título del filme
    OrderZtoA(someFilmProps, 'title');
    loadData(someFilmProps);
});

btnRecent.addEventListener('click', function(){
    descendingOrder(someFilmProps, 'date');
    loadData(someFilmProps);
});

btnRating.addEventListener('click', function(){
    descendingOrder(someFilmProps, 'score');
    loadData(someFilmProps);
});

//3. Ordenar por productores y directores
selectProducer.addEventListener('change', ()=> {
    selectDirector.value = 'directors'

    //Almacenar el valor seleccionado por el user
    let producer = selectProducer.value;
    //Filtrar las películas realizadas por el productor seleccionado
    if(producer === 'producers'){
        loadData(someFilmProps);
    } else {
        let filmByProducer = filterBySearchGeneral(someFilmProps, producer, 'producer')
        loadData(filmByProducer);
    }
})

selectDirector.addEventListener('change', ()=> {
    selectProducer.value = 'producers';

    let director = selectDirector.value;
    if(director === 'director'){
        loadData(someFilmProps);
    } else {
        let filmByDirector = filterBySearchGeneral(someFilmProps, director, 'director')
        loadData(filmByDirector);
    }
} )

/*------Redireccionar a la página propia de cada film---- */
function showMore (id) {
    let filmData = someFilmProps.filter(film => film.id === id)[0];
    //Datos extra de cada película
    let extraFilmData = extraFilmProps.filter(film => film.id === id)[0]

    //Mostrar los datos de la película identificada por su id 
    posterPag2.src = filmData.poster;
    titlePag2.innerHTML = filmData.title;
    datePag2.innerHTML = filmData.date;
    scorePag2.innerHTML = '⭐ ' + filmData.score;
    synopsis.innerHTML = filmData.synopsis;
    directorPag2.innerHTML = filmData.director;
    producerPag2.innerHTML = filmData.producer;

    //Mostrar datos extra como personajes, vehículos y locaciones
    extraFilmData.vehicles.length === 0 ? vehiclesBox.innerHTML = '<p>Not found data</p>' : loadExtraData(extraFilmData, 'vehicles');
    extraFilmData.locations.length === 0 ? locationsBox.innerHTML = '<p>Not found data</p>' : loadExtraData(extraFilmData, 'locations'); 
    loadExtraData(extraFilmData, 'people'); 
    
    //Mostrar la segunda pág y ocultar la primera
    filmPage1.style.display = "none";
    filmPage2.style.display = "block";

    //Al cambiar a esta página mover la pantalla a posición inicial
    window.scroll(0,0);
}

//Al Presionar la flecha 'atras' Ocultar y mostrar pantallas
document.getElementById('arrow-back').addEventListener('click', ()=> {
    if (filmPage1.style.display === "none" && filmPage2.style.display === "block") {
      filmPage1.style.display = "block";
      filmPage2.style.display = "none";
    }
})

 



