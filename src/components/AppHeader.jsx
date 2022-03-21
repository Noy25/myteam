// React
import { Link } from 'react-router-dom';
// Assets
import logo from '../assets/images/home/brand/logo.svg';

export function AppHeader() {

    return (
        <header className="app-header">
            <nav className="main-layout flex align-center">
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link body-1 clean-link">home</Link>
                    <Link to="/about" className="nav-link body-1 clean-link">about</Link>
                </div>
                <button className="primary light">contact us</button>
            </nav>
        </header>
    )
}