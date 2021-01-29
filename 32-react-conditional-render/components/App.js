import React from 'react'
import Conditional from './Conditional'
import Loading from './Loading'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <Loading /> : <Conditional isLoading={this.state.isLoading} />}
            </div>
        )
    }
}

export default App