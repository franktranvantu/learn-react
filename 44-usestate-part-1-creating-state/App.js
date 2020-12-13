import React, { Component, useState } from 'react';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             answer: 'Yes'
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         );
//     }
// }

function App() {
    const [answer] = useState('No')
    
    return (
        <div>
            <h1>Is state important to know? {answer}</h1>
        </div>
    );
}

export default App;