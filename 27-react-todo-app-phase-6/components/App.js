import React from 'react'
import TodoItem from './TodoItem'
import todosData from '../todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    // Remember not to modify prevState directly, 
    // but instead to return a new version of state with the change you want included in that update. 
    // (Think how you might use the `.map` method to do this)

    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoComponents = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    )
  }
}

export default App