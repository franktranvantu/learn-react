import React from 'react'
import ReactDOM from 'react-dom'

function MyApp() {
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
        </ul>
    )
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById('root')
)
