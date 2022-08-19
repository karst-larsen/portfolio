import AOS from 'aos';
import 'aos/dist/aos.css';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage';

function NavBar() {
    AOS.init();

    return (
    <div className="header">
        <div className="header__logo">
            <Link to="/" className="header__logo-link">
                <span className="header__name" data-aos="fade-right" data-aos-offset="5" data-aos-duration="1000" >Karsten</span>
                <br />
                <span className="header__name" data-aos="fade-right" data-aos-delay="150" data-aos-offset="5" data-aos-duration="1000">Larsen</span>
            </Link>
        </div>
        <div className="header__right-header">
            <Menu right z-index="1600">
            <Link to="/" className="header__nav-link">Home</Link>
                <Link to="/about" className="header__nav-link">About</Link>
                <Link to="/visual-eyes" className="header__nav-link">VisualEyes</Link>
                <a href="#contact" className="header__nav-link">Contact</a>
            </Menu>
        </div>
    </div>
    );
}

export default NavBar;