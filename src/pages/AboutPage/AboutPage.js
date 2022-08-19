import { Link } from 'react-router-dom'
import personalIcon from '../../assets/images/BSTN-May-2022-Toront-CT-Headshot-40 1.svg'
import './AboutPage.scss'


function AboutPage(props) {
    return (
        <div className="about-me">
            <h1>About Page</h1>
            <div className="about-me__image-box" data-aos="flip-left" data-aos-duration="1000" >
            <img src={personalIcon} alt="Personal Icon" className="about-me__image" />
            </div>
            {/* <section className="contact" id="contact">
          <div className="contact__responsive-container">
            <div className="contact__text-box">
              <h2 className="contact__cta">Let's Connect</h2>
              <p className="contact__information">I'm looking to learn, grow, and write impactful code with a team of developers.</p>
            </div>
            <div className="contact__form">
              <input type="text" className="contact__text-input" />
              <input type="email" className="contact__text-input" />
              <input type="textarea" className="contact__text-input" />
            </div>
          </div>
        </section> */}
        </div>
    );
}

export default AboutPage;