import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

function PersonPage(props) {
    const [currentPerson, setCurrentPerson] = useState({});
    const [homeworld, setHomeworld] = useState({ url: "" });
    
    useEffect(()=>{
        axios.get('https://swapi.dev/api/people/'+ props.id + '/')
        .then(response => {
            setCurrentPerson(response.data);
            axios.get(response.data.homeworld).then(response => setHomeworld(response.data)).catch(console.log);
        })
        .catch(console.log)
    }, [props.id]);
    
    // useEffect(()=>{
    //     axios.get(currentPerson.homeworld)
    //     .then(response => setHomeworld(response.data))
    //     .then(homeworld => setHomeworldId(homeworld.url))
    //     .catch(console.log)
    // }, [currentPerson]);

    function getId(url) {
        let id = url.slice(29);
        return id;
    }
    
    if (props.id < 1 || props.id > 82) {
        return (
            <div>The Person ID must be between 1 and 82. Please correct and try again.</div>
        )
    }

    return (
        <div>
            <h2>{currentPerson.name}</h2>
            <p>Gender: {currentPerson.gender}</p>
            <p>Height: {currentPerson.height}</p>
            <p>Hair Color: {currentPerson.hair_color}</p>
            <p>Home Planet: <Link to={"/planets/" + getId(homeworld.url)} >{homeworld.name} {homeworld.url}</Link></p>
        </div>
    )
}

export default PersonPage;