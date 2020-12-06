import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Frank',
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById('root')
)
