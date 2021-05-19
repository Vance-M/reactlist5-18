import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, image, status, species, id }) => (
    <figure key={id}>
        <Link to={id}>
        <img src={image} alt={name} />
        </Link>
        <figcaption>
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
        </figcaption>
    </figure>
    
)




Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default Character;