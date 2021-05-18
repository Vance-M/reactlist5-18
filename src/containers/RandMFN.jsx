import React, { useState, useEffect } from 'react'
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

    return <CharactersList characters={characters} />;
};

export default RickandMorty;