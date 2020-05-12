import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PokemonList.module.css';

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [displayedList, setDisplayedList] = useState([]);

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => setPokemonList(response.data.results))
            .catch(console.log)
    }, []);

    const displayList = () => {
        setDisplayedList(pokemonList);
    }

    const removeList = () => {
        setDisplayedList([]);
    }

    return (
        <div>
            <button onClick={displayList}>Fetch all Pokemon!</button>
            <button onClick={removeList}>Clear all Pokemon</button>
            <ul>
                {displayedList.map((pokemon, i) => {
                    return(
                        <li key={i}>{i+1}) {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                    )
                })}
            </ul>
        </div>

    );
}

export default PokemonList;