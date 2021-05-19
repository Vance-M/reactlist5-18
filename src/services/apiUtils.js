export const fetchCharacters = async() => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await res.json();
   
    const mungedResults = results.map(result => ({
       name: result.name,
       image: result.image,
       status: result.status,
       species: result.species,
       id: result.id.toString()
    }))
    
    return mungedResults;

   };

   export const fetchSingleCharacter = async(id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const char = await res.json();
   
    return char;
    
   };