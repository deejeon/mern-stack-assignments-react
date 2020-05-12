import React from 'react';

import styles from './TodoListDisplay.module.css';

function TodoListDisplay(props) {
    const handleCheck = (idx) => {
        props.onCheck(idx);
    }

    const handleDelete = (idx) => {
        props.onDelete(idx);
    }
    return (
        <div className={styles.container}>
            <ul>
                {props.todoList.map( (item,i) => {
                    let checkStatus;
                    item.checked ? checkStatus = "checked" : checkStatus = "unchecked";
                    return (
                        <li key={i}>
                            <input type="checkbox" onClick={ () => handleCheck(i) } checked={item.checked}/>
                            <span className={styles[checkStatus]}>{item.content}</span>
                            <button onClick={ () => handleDelete(i) }>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoListDisplay;