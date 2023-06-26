export default function Navbar(props) {
    return (
        <header className={props.darkMode ? "dark" : ""}>
            <nav className="nav-logo">
                <img src="../src/images/react-icon.png" alt="React logo" className="logo"/>
                <h3>ReactFacts</h3>
            </nav>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                    <label className="switch">
                        <input type="checkbox" onClick={props.toggleDarkMode}/>
                        <span className="slider"></span>
                    </label>
                <p className="toggler--dark">Dark</p>
            </div>
        </header>
    )
}