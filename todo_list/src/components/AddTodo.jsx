import React, { useState } from 'react';

import styles from './AddTodo.module.css';

function AddTodo(props) {
    const emptyItem = {content: "", checked: false};
    const [item, setItem] = useState(emptyItem);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewItem(item);
        setItem(emptyItem);
    }
    return (
        <form
            className={styles.form}
            onSubmit={ handleSubmit }
        >
            <input
                type="text"
                placeholder="Enter new todo item"
                onChange={ (e) => setItem({ content: e.target.value, checked: false })}
                value={item.content}
            />
            <button>Add</button>
        </form>
    );
}

export default AddTodo;