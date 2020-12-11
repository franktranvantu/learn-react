import React from 'react'
import ReactDOM from 'react-dom'

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class MyApp extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        Code goes here
      </div>
    )
  }
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
)
