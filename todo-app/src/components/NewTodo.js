import React from 'react'

import styles from './NewTodo.module.css'

function NewTodo() {
    return (
        <div className={styles.Root}>
            <input className={styles.Input} placeholder="Enter Todo" />
            <div className={styles.Button}>ADD</div>
        </div>
    );
}

export default NewTodo;