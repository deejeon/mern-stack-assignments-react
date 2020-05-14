import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlanetPage(props) {
    const [currentPlanet, setCurrentPlanet] = useState({});

    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/'+ props.id + '/')
        .then(response => setCurrentPlanet(response.data))
        .catch(console.log)
    }, [props.id]);

    if (props.id < 1 || props.id > 60) {
        return (
            <div>The Planet ID must be between 1 and 60. Please correct and try again.</div>
        )
    }

    return (
        <div>
            <h2>{currentPlanet.name}</h2>
            <p>Diameter: {currentPlanet.diameter}</p>
            <p>Climate: {currentPlanet.climate}</p>
            <p>Terrain: {currentPlanet.terrain}</p>
            <p>Population: {currentPlanet.population}</p>
        </div>
    )
}

export default PlanetPage;