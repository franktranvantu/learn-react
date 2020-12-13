import React, { useEffect, useState } from 'react';
import randomcolor from 'randomcolor'

function App() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState('Yes')
    const [color, setColor] = useState('')

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    // componentWillUnMount return () => clearInterval(intervelId)
    useEffect(() => {
        const intervelId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000);
        return () => clearInterval(intervelId)
    }, [])

    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    return (
        <div>
            <h1 style={{ color: color }}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <br />
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App;