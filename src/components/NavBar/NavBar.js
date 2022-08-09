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
                <li className="header__nav-link" data-aos="fade-left" data-aos-duration="1000" >Home</li>
                <li className="header__nav-link" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000">Projects</li>
                <li className="header__nav-link" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Contact</li>
            </ul>
        </div>
    </div>
    );
}

export default NavBar;