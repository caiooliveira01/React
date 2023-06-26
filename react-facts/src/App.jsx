import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"
import './style.css'
import { useState } from 'react'

export default function App() {
    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div>
            <Navbar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} 
            />
            <Main 
                darkMode={darkMode} 
            />
        </div>
    )
}