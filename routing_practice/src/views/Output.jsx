import React from 'react';

function Output(props) {
    if (!isNaN(+props.input)) return (
        <div><p>The number is: {props.input}</p></div>
    )
    else return (
        <div><p>The word is: {props.input}</p></div>
    )
}

export default Output;