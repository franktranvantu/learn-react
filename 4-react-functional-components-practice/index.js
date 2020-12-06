import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo() {
    return (
        <div>
            <h1>Frank</h1>
            <p>My name is Frank, I'm 29 years old</p>
            <ul>
                <li>Learning new technology</li>
                <li>Coding</li>
                <li>Playing football</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <MyInfo />, 
    document.getElementById('root')
)
