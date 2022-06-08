import { showData } from './data.js';
import { filterBySearch} from './data.js';
import dataGhibli from './data/ghibli/ghibli.js';

/* ---------Variables------ */
const secctionMovies = document.getElementById('movies');
const arrayGhibli = dataGhibli.films;
const x = showData(arrayGhibli);

/* ---------Filters--------- */
const searchInput = document.querySelector('#search .search__containt .input')
const btnOrderAtoZ = document.getElementById('#order-az');

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
    addEventListener('load', () => loadData(x));
//1. Filtro para la barra de búsqueda
searchInput.addEventListener('keyup', ()=>{
    //Almacenar valor de búsqueda del user
    let searchValue = searchInput.value;
    //Mostrar todas las películas cuando el user no escriba nada en la barra de búsqueda, de lo contrario hacer el filtrado por título del filme
    if (searchValue.length != 0) {
       let filteredSearch = filterBySearch(x, searchValue);
       (filteredSearch.length != 0) ? loadData(filteredSearch) : secctionMovies.innerHTML = '';
    } else {
       return loadData(x)
    }
});
//console.log(arrayGhibli);

