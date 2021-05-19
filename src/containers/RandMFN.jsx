import React, { useState, useEffect } from 'react'
import Character from '../components/characters/characters';
import CharactersList from '../components/characters/charactersList';
import { fetchCharacters } from '../services/apiUtils';

const RickandMorty = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCharacters()
            .then(characters => setCharacters(characters))
            .finally(() => setLoading(false));
    }, [])
    
    if(loading) return <p>Loading...</p>

    return <CharactersList 
    characters={characters} 
    // name={Character.name}
    // id={Character.id}
    // species={Character.species}
    // status={Character.status}
    // image={Character.image}
    />;
};

export default RickandMorty;