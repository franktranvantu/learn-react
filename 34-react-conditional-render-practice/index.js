import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        const buttonText = this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN'
        const displayText = this.state.isLoggedIn ? 'Logged in' : 'Logged out'
        return (
            <div>
                <h1>{displayText}</h1>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
)
