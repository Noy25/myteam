// Assets
import logo from '../../../../assets/images/home/brand/logo.svg';

export function Header() {

    return (
        <header className="home-header">
            <nav className="main-layout flex align-center">
                <img src={logo} alt="logo" />
                <div className="nav-links">
                    <a href="#" className="nav-link body-1 clean-link">home</a>
                    <a href="#" className="nav-link body-1 clean-link">about</a>
                </div>
                <button className="primary light">contact us</button>
            </nav>
        </header>
    )
}