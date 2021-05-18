export const fetchCharacters = async() => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await res.json();
   
    return results;
    
    
    // .map(result => ({
    //    name: json[0].character,
    //    image: json[0].image,
    //    status: json[0].status,
    //    species: json[0].species,
    //    id: json[0].id
    // }))

   };