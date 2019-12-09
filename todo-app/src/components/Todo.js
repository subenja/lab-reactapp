import React from 'react'

import styles from './Todo.module.css'

function Todo() {
    return (
        <div className={styles.Root}>
            <span clasName={styles.Tick} />
            <div className={styles.Text}>Todo name</div>
            <span className={styles.Delete}>x</span>
        </div>
    )
}

export default Todo;