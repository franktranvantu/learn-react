import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.handleClick}>Change!</button>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById('root')
)
