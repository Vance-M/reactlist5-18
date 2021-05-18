import React, { Component } from 'react'
import CharactersList from '../components/characters/charactersList';
import { fetchCharacters } from '../services/apiUtils';



export default class RickandMorty extends Component {
    state = {
        loading: true,
        characters: [],
    }

    async componentDidMount() {
        const characters = await fetchCharacters();

        this.setState({
            characters,
            loading: false,
        })
    }


    render() {
        const { loading, characters } = this.state;

        if (loading) return <p>Loading...</p>

        return <CharactersList characters={characters} />
    }
}
