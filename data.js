export const showData = (arrays) => {
 const datos = arrays.map(item =>{
    return{
      id: item.id,
      title: item.title,
      poster: item.poster,
      producer: item.producer,
      director: item.director,
      score: item.rt_score,
      date: item.release_date,
      synopsis: item.description
    }
  });
  return datos;
};

export const showExtraData = (arrays) => {
 const datos = arrays.map(item =>{
    return{
      id: item.id,
      vehicles: item.vehicles,
      locations: item.locations,
      people: item.people
    }
  });
  return datos;
};

// export const filterBySearch = (search, dataFilms) => {
//    //transformar a minúscula tanto la búsqueda del usuario como el título del filme para lograr coincidencia
//     const transformData = search.toLowerCase();
//    const filteredData = dataFilms.filter(film => film.title.toLowerCase().includes(transformData));
//    return filteredData;
//  }

//Funciones para filtrar y ordenar películas 1ra pestaña
export const filterBySearchGeneral = (words, query, prop)=>{
  if(prop === 'title'){
    return words.filter((film) =>
        film[prop].toLowerCase()
        .includes(query.toLowerCase())
       );
  } else {
    return words.filter((film)=> film[prop] === query);
  }
};

export const OrderAtoZ = (arrayToSort, prop)=>{
  return arrayToSort.sort((a, b) => a[prop].toLowerCase().localeCompare(b[prop].toLowerCase()));
}

export const OrderZtoA = (arrayToSort, prop)=>{
  return arrayToSort.sort((a, b) => a[prop].toLowerCase().localeCompare(b[prop].toLowerCase())).reverse();
}

export const descendingOrder = (arrayToSort, prop)=> {
  return arrayToSort.sort((a, b)=> a[prop] - b[prop]).reverse();
}










