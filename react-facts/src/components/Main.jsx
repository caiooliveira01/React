export default function Main({darkMode}) {
    return (
        <main className={darkMode ? 'dark' : ''}> {/* Recebe o state do App (darkMode) e caso o state seja true, o className será dark */}
            <h1>
                Fun facts about React
            </h1>
            <ul className="facts">
                <li>Was first realeased in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}