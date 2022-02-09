import logo from '../../../../assets/images/home/logo.svg';
import iconFacebook from '../../../../assets/images/home/icon-facebook.svg';
import iconPinterest from '../../../../assets/images/home/icon-pinterest.svg';
import iconTwitter from '../../../../assets/images/home/icon-twitter.svg';


export function Footer() {

    return (
        <footer className="home-footer">
            <div className="main-layout main-container flex justify-between">

                <div className="container flex">
                    <div className="left-wrapper flex column">
                        <img src={logo} alt="Logo" />
                        <nav className="nav-links flex">
                            <a href="#" className="nav-link clean-link">home</a>
                            <a href="#" className="nav-link clean-link">about</a>
                        </nav>
                    </div>

                    <div className="right-wrapper">
                        <p>987  Hillcrest Lane</p>
                        <p>Irvine, CA</p>
                        <p>California 92714</p>
                        <p>Call Us : 949-833-7432</p>
                    </div>
                </div>

                <div className="flex column justify-between">
                    <div className="social-links flex align-self-end">
                        <img src={iconFacebook} alt="Facebook" />
                        <img src={iconPinterest} alt="Pinterest" />
                        <img src={iconTwitter} alt="Twitter" />
                    </div>
                    <p>Copyright 2020. All Rights Reserved</p>
                </div>

            </div>
        </footer>
    )
}