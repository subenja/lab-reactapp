import React from 'react'

import styles from './TodoList.module.css'
import NewTodo from './components/NewTodo.js'
import Todo from './components/Todo.js'
 
const API = 'http://localhost:3001/todos'

class TodoList extends React.Component {
  state = {
    textValue:'',
    todos: [] // {id: string, ticked: boolean, name: string}
  }
  
  componentDidmount = async () => {
    console.log('xxxx')
    const response = await fetch('http://localhost:3001/todos') 
    //const API = 'http://localhost:3001/ ('${API}/todos')
    const data = await response.json()
      console.log(data.id + ' --- ' + data.name)    
    this.setState({todos: data} )    
    // try {
    //   const response = await fetch(API) 
    //   //const API = 'http://localhost:3001/ ('${API}/todos')
    //   const data = await response.json()
    //   this.setState({todos: data} )

    //   console.log(response.status)
    //   console.log(data.id + ' --- ' + data.name)
    //   } 
    // catch (err) {
    //   console.log(err)
    // } 
  }

  componentDidUpdate = () => {

    
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return true
  }

  handleValue = (e) => {
    this.setState({
        textValue: e.target.value
      }
    )
    console.log(this.state.textValue)
  }
  handleAdd = async () => {
    if (!this.state.textValue) {
      alert('Please write something')
      return
    }

    const todo = {ticked: false, name: this.state.textValue}
    await fetch(API, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: this.state.textValue
        })
    })

    //const data = await response.json()
    //console.log(response)

    /*
    const { todos, nextId } = this.state
    this.setState({
      todos: todos.concat({id: nextId, name: this.state.textValue})
    })*/
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

