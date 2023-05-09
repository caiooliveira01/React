export default function Info() {
    return (
        <header>
            <img src="../src/images/profile.png" alt="Profile" className="profile"/>
            <h1 className="title">Laura Smith</h1>
            <p className="desc">Frontend Developer</p>
            <p className="site">laurasmith.website</p>
            <nav className="buttons">
                <button className="email"><img src="../src/images/email.png" alt="Email"/>Email</button>
                <button className="linkedin"><img src="../src/images/linkedin.png" alt="Linkedin"/>LinkedIn</button>
            </nav>
        </header>
    )
}