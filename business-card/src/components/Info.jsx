import Email from '../assets/email.png'
import Linkedin from '../assets/linkedin.png'

export default function Info() {
    return (
        <header>
            <img src="../src/assets/profile.png" alt="Profile" className="profile"/>
            <h1 className="title">Laura Smith</h1>
            <p className="desc">Frontend Developer</p>
            <p className="site">laurasmith.website</p>
            <nav className="buttons">
                <button className="email"><img src={Email} alt="Email"/>Email</button>
                <button className="linkedin"><img src={Linkedin} alt="Linkedin"/>LinkedIn</button>
            </nav>
        </header>
    )
}