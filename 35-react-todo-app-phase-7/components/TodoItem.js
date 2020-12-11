import React from 'react'

function TodoItem(props) {
    const completedStyles = {
        color: 'green',
        fontStyle: 'italic',
        textDecoration: 'line-through'
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChange(props.todo.id)} />
            <span style={props.todo.completed ? completedStyles : null}>{props.todo.text}</span>
        </div>
    )
}

export default TodoItem