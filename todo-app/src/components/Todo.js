import React from 'react'

import styles from './Todo.module.css'

function Todo(props) {
    const { 
        ticked = false, 
        name = "default todo name",
        onTick, onDelete } = props
    return (
        <div className={styles.Root}>
            <span className={styles.Tick} 
                style={ {backgroundColor: ticked ? "#a8d097" : undefined}} 
                onClick={onTick}    
            />
            <div className={styles.Text}
                style={ {textDecoration: ticked? 'line-through': undefined}}
                >{name}
            </div>
            <span className={styles.Delete} 
                onClick={onDelete}>x</span>
        </div>
    )
}

export default Todo;