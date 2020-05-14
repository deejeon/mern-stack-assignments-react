import React from 'react';

function ColorWord(props) {
    return (
        <div style={{ background: props.bg }}><p style={{ color: props.color }}>{ props.word }</p></div>
    )
}

export default ColorWord;