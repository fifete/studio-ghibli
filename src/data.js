// estas funciones son de ejemplo
const jarrays = [{id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",title: "Castle in the Sky", poster:"hola"},{id: "2baf70d1-42bb-4437-b551-e5fed5a87abe", title: "Castle", poster:"hola"}]
export const showData = (arrays) => {
 const datos = arrays.map(item =>{
    return{
      title: item.title,
      poster: item.poster,
      producer: item.producer,
      director: item.director
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

export const orderAtoZ = (arrayToSort, prop)=>{
  return arrayToSort.sort((a, b) => a[prop].toLowerCase().localeCompare(b[prop].toLowerCase()));
}

export const orderZtoA = (arrayToSort, prop)=>{
  return arrayToSort.sort((a, b) => a[prop].toLowerCase().localeCompare(b[prop].toLowerCase())).reverse();
}











