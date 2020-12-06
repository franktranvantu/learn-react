import React from 'react'
import ReactDOM from 'react-dom'

// function MyApp(props) {
//     return (
//         <ul>
//             <li>{props.id}</li>
//         </ul>
//     )
// }

class MyApp extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.id}</li>
            </ul>
        )
    }
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById('root')
)
