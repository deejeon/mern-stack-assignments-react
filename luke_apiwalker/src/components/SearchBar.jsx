import React, { useState } from 'react';
// import { navigate } from '@reach/router';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const [option, setOption] = useState("");
    const [id, setId] = useState("");
    const [optionError, setOptionError] = useState("");
    const [idError, setIdError] = useState("");

    const handleSubmit = (e) => {
        setOptionError("");
        setIdError("");
        e.preventDefault();
        const newSearch = { 'category': option, 'id': id };
        if (newSearch.category.length < 1) {
            setOptionError("You must select an option!")
        }
        if (newSearch.id.length < 1) {
            setIdError("You must provide an ID!")
        }
        else if (newSearch.id < 1) {
            setIdError("ID must be greater than 0!")
        }
        else {
            props.onNewSearch(newSearch);
        }
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <label>Search for: </label>
            <select defaultValue="" onChange={e => setOption(e.target.value)}>
                <option value="" disabled>Select an option</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>{' '}
            <label>ID: </label>
            <input type="text" onChange={e => setId(e.target.value)} value={id}/>
            <button type="submit">Search</button>
            {
                optionError ?
                <p style={{color:'red'}}>{ optionError }</p> :
                ''
            }
            {
                idError ?
                <p style={{color:'red'}}>{ idError }</p> :
                ''
            }
        </form>
    )
}

export default SearchBar;