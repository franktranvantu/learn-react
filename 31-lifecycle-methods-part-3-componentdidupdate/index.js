import React from 'react'
import ReactDOM from 'react-dom'
import randomcolor from 'randomcolor'

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            this.setState({
                color: randomcolor()
            })
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
                <button onClick={this.increment}>Increment!</button><br />
                <button onClick={this.decrement}>Decrement!</button>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
)
