import logo from '../../../../assets/images/home/logo.svg';

export function Header() {

    return (
        <header className="home-header">
            <nav className="main-layout flex align-center">
                <img src={logo} alt="logo" />
                <div className="nav-links">
                    <a href="#" className="nav-link clean-link">home</a>
                    <a href="#" className="nav-link clean-link">about</a>
                </div>
                <button className="btn-contact">contact us</button>
            </nav>
        </header>
    )
}