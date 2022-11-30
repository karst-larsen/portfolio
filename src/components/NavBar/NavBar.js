import AOS from "aos";
import "aos/dist/aos.css";
import { slide as Menu } from "react-burger-menu";
import resume from "../../assets/files/Karsten_ONeill_Larsen_Resume.pdf";

function NavBar() {
  AOS.init();

  return (
    <header className="header" id="home">
      <div className="header__logo">
        <a href="/#personal" className="header__logo-link">
          <span
            className="header__name"
            data-aos="fade-right"
            data-aos-offset="5"
            data-aos-duration="1000"
          >
            Karsten
          </span>
          <br />
          <span
            className="header__name"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-offset="5"
            data-aos-duration="1000"
          >
            Larsen
          </span>
        </a>
      </div>
      <div className="header__right-header">
        <Menu right z-index="1600">
          <a href="/" className="header__nav-link">
            Home
          </a>
          <a href="/#about" className="header__nav-link">
            About
          </a>
          <a href="/#skills" className="header__nav-link">
            Skills
          </a>
          <a href="/#projects" className="header__nav-link">
            Projects
          </a>
          <a href="/#contact" className="header__nav-link">
            Contact
          </a>
          <a
            href={resume}
            className="header__nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </Menu>
      </div>
    </header>
  );
}

export default NavBar;
