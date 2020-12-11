import React from 'react'
import ReactDOM from 'react-dom'

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

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
    fetch('https://swapi.dev/api/people/1')
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
