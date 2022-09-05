import AOS from 'aos';
import 'aos/dist/aos.css';
import { slide as Menu } from 'react-burger-menu'
import { HashLink as Link } from 'react-router-hash-link'
import resume from '../../assets/files/Karsten_ONeill_Larsen_Resume.pdf'

function NavBar() {
    AOS.init();

    return (
        <header className="header" id="home">
                <div className="header__logo">
                    <Link to="/#personal" className="header__logo-link">
                        <span className="header__name" data-aos="fade-right" data-aos-offset="5" data-aos-duration="1000">Karsten</span>
                        <br />
                        <span className="header__name" data-aos="fade-right" data-aos-delay="150" data-aos-offset="5" data-aos-duration="1000">Larsen</span>
                    </Link>
                </div>
                <div className="header__right-header">
                    <Menu right z-index="1600">
                        <Link to="/" className="header__nav-link">Home</Link>
                        <Link to="/#about" className="header__nav-link">About</Link>
                        <Link to="/#skills" className="header__nav-link">Skills</Link>
                        <Link to="/#projects" className="header__nav-link">Projects</Link>
                        <Link to="/#contact"  className="header__nav-link">Contact</Link>
                        <a href={resume} className="header__nav-link" target="_blank" rel="noreferrer">Resume</a>
                    </Menu>
                </div>
    </header>
    );
}

export default NavBar;