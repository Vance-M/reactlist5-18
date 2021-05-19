import React from 'react'
import PropTypes from 'prop-types';
import Character from './characters';

const CharactersList = ({ characters }) => (
    <ul aria-label="characters">
        {characters.map((character) => (
            <li key={character.id}>
                <Character {...character} />
            </li>
        ))}
    </ul>
)

CharactersList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,      
    }))
}

export default CharactersList;