import { showData } from './data.js';
import { filterBySearchGeneral, orderAtoZ, orderZtoA} from './data.js';
import dataGhibli from './data/ghibli/ghibli.js';

/* ---------Variables------ */
const secctionMovies = document.getElementById('movies');
const selectProducer = document.getElementById('producers');
const selectDirector = document.getElementById('directors');
const arrayGhibli = dataGhibli.films;
const someFilmProps = showData(arrayGhibli);

/* ---------Filters--------- */
const searchInput = document.querySelector('.search__containt .input')
const btnOrderAtoZ = document.getElementById('order-az');
const btnOrderZtoA = document.getElementById('order-za');

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
            movieContainer.classList.add('containt-movie')
            const h2 = document.createElement('h2')
            h2.textContent = movie.title;
            const img = document.createElement('img');
            img.setAttribute('src', movie.poster);
            secctionMovies.appendChild(movieContainer);
            movieContainer.appendChild(img);
            movieContainer.appendChild(h2);
            return movieContainer;
        })
    addEventListener('load', () => loadData(someFilmProps));

//1. Filtro para la barra de búsqueda
searchInput.addEventListener('keyup', ()=>{
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
//console.log(arrayGhibli);

//2. Ordenar alfabéticamente
btnOrderAtoZ.addEventListener('click', function() {
    //la sig. función modifica el array [{film1}, {fiml2}, ...] a un array ordenado, ascendentemente, por el título del filme
    orderAtoZ(someFilmProps, 'title');

    //Mostrar el array ordenado en la pantalla
    loadData(someFilmProps);
  })

btnOrderZtoA.addEventListener('click', function() {
    //la sig. función modifica el array [{film1}, {fiml2}, ...] a un array ordenado, ascendentemente, por el título del filme
    orderZtoA(someFilmProps, 'title');
    loadData(someFilmProps);
  })

//3. Ordenar por productores y directores
selectProducer.addEventListener('change', ()=> {
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
    let director = selectDirector.value;
    if(director === 'director'){
        loadData(someFilmProps);
    } else {
        let filmByDirector = filterBySearchGeneral(someFilmProps, director, 'director')
        loadData(filmByDirector);
    }
} )


