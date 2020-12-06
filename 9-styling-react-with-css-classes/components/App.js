import React from 'react'
import Navbar from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function App() {
    return (
        <div className="container">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App