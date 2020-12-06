import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: 'Yes'
        }
    }

    render() {
        return (
            <h1>Is state important to know? {this.state.answer}</h1>
        )
    }
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById('root')
)
