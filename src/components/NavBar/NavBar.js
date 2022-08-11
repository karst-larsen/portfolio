import AOS from 'aos';
import 'aos/dist/aos.css';

function NavBar() {
    AOS.init()
    return (
    <div className="header">
        <div className="header__logo">
            <span className="header__name" data-aos="fade-right" data-aos-offset="5" data-aos-duration="1000" >Karsten</span>
            <br />
            <span className="header__name" data-aos="fade-right" data-aos-delay="150" data-aos-offset="5" data-aos-duration="1000">Larsen</span>
        </div>
        <div className="header__right-header">
            <ul className="header__nav">
                <a href="#home" className="header__nav-link"><li  data-aos="fade-left" data-aos-duration="1000">Home</li></a>
                <a href="#about" className="header__nav-link"><li  data-aos="fade-left" data-aos-duration="1200">About</li></a>
                <a href="#skills" className="header__nav-link"><li data-aos="fade-left" data-aos-duration="1400">Skills</li></a>
                <a href="#capstone" className="header__nav-link"><li data-aos="fade-left" data-aos-duration="1600">Capstone</li></a>
                <a href="#contact" className="header__nav-link"><li data-aos="fade-left" data-aos-duration="1800">Contact</li></a>
            </ul>
        </div>
    </div>
    );
}

export default NavBar;