import React from 'react'
import ReactDOM from 'react-dom'

// https://reactjs.org/docs/events.html#supported-events

function handleMouseOver() {
    console.log('Hover');
}

function handleClick() {
    console.log('I was clicked');
}

function MyApp() {
    return (
        <div>
            <img onMouseOver={handleMouseOver} src="https://www.fillmurray.com/200/100" />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById('root')
)
