import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch('https://swapi.dev/api/people/1/')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        const text = this.state.loading ? 'Loading...' : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
)
