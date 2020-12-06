import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            <div>
                <h1>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById('root')
)
