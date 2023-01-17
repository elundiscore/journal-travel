import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
    <nav className="navbar">
        <Link to="/" className="navbar--text">
            <p className="navbar--text">Travel Journal</p>
        </Link>
            <p className="navbar--options">Login</p>
            <p className="navbar--options">Signup</p>
            <p className="navbar--options">Journal</p>
    </nav>
    )
}