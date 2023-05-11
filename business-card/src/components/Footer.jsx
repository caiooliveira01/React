import Twitter from '../assets/twitter.png'
import Facebook from "../assets/facebook.png";
import Instagram from '../assets/instagram.png'
import Github from '../assets/github.png'

export default function Footer() {
    return (
        <footer>
            <img src={Twitter} alt="Icon" />
            <img src={Facebook} alt="Icon" />
            <img src={Instagram} alt="Icon" />
            <img src={Github} alt="Icon" />
        </footer>
    )
}