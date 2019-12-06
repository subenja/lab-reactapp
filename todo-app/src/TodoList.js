import React from 'react'

import styles from './TodoList.module.css'
import NewTodo from './components/NewTodo.js'
import Todo from './components/Todo.js'

class TodoList extends React.Component {
  render = () => {
    return (
      <div>Todo
        <NewTodo />
        <Todo />
      </div>
    ) 
  }
}

export default TodoList
