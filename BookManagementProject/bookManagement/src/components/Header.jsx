import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <ul>
                <a href="/"><li>Home</li></a>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default Header
