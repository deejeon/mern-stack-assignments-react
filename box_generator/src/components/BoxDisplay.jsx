import React from 'react';

import styles from './BoxDisplay.module.css';

function BoxDisplay(props) {
    return (
        <div className={styles.boxContainer}>{props.boxes.map((box, i)=>{
            return (
                <div 
                    key={i}
                    style={{background: box.color, height: box.boxSize+"px", width: box.boxSize+"px"}} 
                    className={styles.box}
                />
            )
        })}
        </div>
    );
}

export default BoxDisplay;