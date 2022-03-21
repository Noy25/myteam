// React
import { Link } from 'react-router-dom';
// Assets
import logo from '../assets/images/home/brand/logo.svg';
import iconFacebook from '../assets/images/home/icons/icon-facebook.svg';
import iconPinterest from '../assets/images/home/icons/icon-pinterest.svg';
import iconTwitter from '../assets/images/home/icons/icon-twitter.svg';


export function AppFooter() {

    return (
        <footer className="app-footer">
            <div className="main-layout main-container flex justify-between">

                <div className="container flex">
                    <div className="left-wrapper flex column">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                        <nav className="nav-links flex">
                            <Link to="/" className="body-1 clean-link">home</Link>
                            <Link to="/about" className="body-1 clean-link">about</Link>
                        </nav>
                    </div>

                    <div className="right-wrapper">
                        <p className="body-2 muted">987  Hillcrest Lane</p>
                        <p className="body-2 muted">Irvine, CA</p>
                        <p className="body-2 muted">California 92714</p>
                        <p className="body-2 muted">Call Us : 949-833-7432</p>
                    </div>
                </div>

                <div className="flex column justify-between">
                    <div className="social-links flex align-self-end">
                        <img src={iconFacebook} alt="Facebook" />
                        <img src={iconPinterest} alt="Pinterest" />
                        <img src={iconTwitter} alt="Twitter" />
                    </div>
                    <p className="body-2 muted">Copyright 2020. All Rights Reserved</p>
                </div>

            </div>
        </footer>
    )
}