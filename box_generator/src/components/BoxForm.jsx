import React, { useState } from 'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [boxSize, setBoxSize] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = {color: color, boxSize: boxSize};
        props.onNewBox(newBox);
        setColor("");
        setBoxSize("");
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label>Color: </label>
            <input
                type="text"
                placeholder="Enter a color name"
                onChange={ (e) => setColor(e.target.value) }
                value={ color }/>
            <input
                type="text"
                placeholder="Enter a number for box size"
                onChange={ (e) => setBoxSize(e.target.value) }
                value={ boxSize }/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default BoxForm;