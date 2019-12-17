import React from 'react'

import styles from './TodoList.module.css'
import NewTodo from './components/NewTodo.js'
import Todo from './components/Todo.js'

class TodoList extends React.Component {
  state = {
    textValue:'',
    todos: [
      {ticked: true, name: 'Wash dishes'},
      {ticked: false, name: 'Walk dog'}
    ]
  }  
  handleValue = (e) => {
    this.setState({
        textValue: e.target.value
      }
    )
    console.log(this.state.textValue)
  }
  handleAdd = () => {
    const { name, todos, nextId } = this.state
    this.setState({
      todos: todos.concat({id: nextId, name: this.state.textValue})
    })
  }
  handleTick = idx => () => {
   this.setState( state => ({
      todos: this.state.todos.map((todo, todoIdx) =>
        (todoIdx === idx) ? {...todo, ticked:!todo.ticked} : todo)
    }))
  }
  handleDelete = idx => () => {
    this.setState({
      todos: this.state.todos.filter((todo, todoIdx) => todoIdx !== idx)
    })

  }
  render = () => {
    return (
      <div className={styles.Root}>
        <NewTodo
          value={this.state.textValue}
          onValue={this.handleValue} 
          onAdd={this.handleAdd} 
        />
        {this.state.todos.map(({ticked, name}, idx) => (
          <Todo 
            key={idx} 
            ticked={ticked}            
            name={name}
            onTick={this.handleTick(idx)}
            onDelete={this.handleDelete(idx)}               
          />
        ))}    
      </div>
    ) 
  }
}


export default TodoList