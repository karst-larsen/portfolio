import AOS from 'aos';
import 'aos/dist/aos.css';
import { slide as Menu } from 'react-burger-menu'

function NavBar() {
    AOS.init();

    return (
    <div className="header">
        <div className="header__logo">
            <a href="#home" className="header__logo-link">
                <span className="header__name" data-aos="fade-right" data-aos-offset="5" data-aos-duration="1000" >Karsten</span>
                <br />
                <span className="header__name" data-aos="fade-right" data-aos-delay="150" data-aos-offset="5" data-aos-duration="1000">Larsen</span>
            </a>
        </div>
        <div className="header__right-header">
            <Menu right z-index="1600">
            <a href="#home" className="header__nav-link">Home</a>
                <a href="#about" className="header__nav-link">About</a>
                <a href="#skills" className="header__nav-link">Skills</a>
                <a href="#capstone" className="header__nav-link">Capstone</a>
                <a href="#contact" className="header__nav-link">Contact</a>
            </Menu>
        </div>
    </div>
    );
}

export default NavBar;