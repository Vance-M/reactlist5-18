import React from 'react'
import PropTypes from 'prop-types';


const Character = ({ name, image, status, species, id }) => (
    <figure key={id}>
        <img src={image} alt={name} />
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
    id: PropTypes.number.isRequired,
}

export default Character;