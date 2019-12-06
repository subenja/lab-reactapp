import React from 'react'

import styles from './Todo.module.css'

function Todo() {
    return (
        <div class="root">
            Todo items will be listed here
            <div class="Tick"></div>
            <div class="Text">Todo name</div>
            <button class="Delete">x</button>
            
        </div>
    )
}

export default Todo;