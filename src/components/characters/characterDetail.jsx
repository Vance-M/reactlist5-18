import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { fetchSingleCharacter } from '../../services/apiUtils';
import { useParams } from 'react-router-dom';

export default function characterDetail() {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState({});
    const { RMid } = useParams();


    useEffect(() => {
        fetchSingleCharacter(RMid)
            .then(character => setCharacter(character))
            .finally(() => setLoading(false));
    }, [])

   
   if (loading) return <h1>Loading...</h1>

    return (
        <div>
                    <div>
                    <img src={character.image} alt="{character.name}" />
                    <h1>{character.name}</h1>
                    <p>{character.species}</p>
                    <p>{character.status}</p>
               </div>
        </div>
    )
}
