import "animate.css/animate.min.css";
import 'aos/dist/aos.css';
import '../../App.scss';
import VisualEye from '../../components/NavBar/VisualEye/VisualEye';
import photoShopIcon from '../../assets/icons/photoshop.svg'
import illustratorIcon from '../../assets/icons/illustrator.svg'
import auditionIcon from '../../assets/icons/audition.svg'
import inDesignIcon from '../../assets/icons/indesign.svg'
import afterEffectsIcon from '../../assets/icons/aftereffects.svg'
import premiereProIcon from '../../assets/icons/premierepro.svg'
import dreamweaverIcon from '../../assets/icons/dreamweaver.svg'
import abletonIcon from '../../assets/icons/ableton.svg'
import figmaIcon from '../../assets/icons/figma.svg'
import htmlIcon from '../../assets/icons/html.svg'
import cssIcon from '../../assets/icons/css.svg'
import javascriptIcon from '../../assets/icons/javascript.svg'
import sassIcon from '../../assets/icons/sass.svg'
import reactIcon from '../../assets/icons/react.svg'
import mysqlIcon from '../../assets/icons/mysql.svg'
import toneIcon from '../../assets/icons/tone.svg'
import nodeIcon from '../../assets/icons/node.svg'
import expressIcon from '../../assets/icons/express.svg'
import brainstationIcon from '../../assets/icons/brainstation.svg'
import brainstationIconBlue from '../../assets/icons/BrainStationLogoBlue.svg'
import nameLogo from '../../assets/icons/nameLogo.svg'
import visualEyesLogo from '../../assets/icons/visualeyesspectrum.svg'
import { Link } from 'react-router-dom'
import bmoImage from '../../assets/images/bmo-image.png'
import bmoLogo from '../../assets/images/bmo-logo.png'
import resume from '../../assets/files/Karsten_ONeill-Larsen_Resume.pdf'
import personalIcon from '../../assets/images/BSTN-May-2022-Toront-CT-Headshot-40 1.svg'

const HomePage = (props) => {
    return (
        <div className="App">
        <section className="personal">
          <div className="personal__responsive-container">
              <div className="personal__image-text">
                    <img data-aos="zoom-in" data-aos-duration="750" src={personalIcon} alt="Personal Icon" className="personal__image" />
                    <div className="personal__header">
                    <h1 className="personal__header-line personal--bold" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-once="true">Hey, <br />I'm Karsten Larsen
                        <span className="personal__hand" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">👋🏽</span>
                        <hr className="personal__horizontal-line" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" />
                    </h1>
                    <span className="personal__header-subline personal--italic personal__position" data-aos="fade-up" data-aos-delay="750" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">I'm a Junior Full Stack Developer based out of Toronto, Ontario. Lover of JavaScript and interactive media.</span> <br />
                    </div>
              </div>
            {/* <div className="personal__links" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">
                <a href="#about" className="personal__link">About Me</a>
                <a href="#capstone" className="personal__link">Projects</a>
                <a href={resume} className="personal__link" target="blank">Resume</a>
            </div> */}
          </div>
        </section>
        <section className="about" id="about">
          <div className="about__responsive-container">
            <div className="about__text-container">
              <h2 className="about__header" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Creative Development</h2>
              <p className="about__information" data-aos="fade-up" data-aos-duration="750" data-aos-once="true" data-aos-easing="ease-in-out">I have been a creative developer my entire life. From editing YouTube videos, producing electronic music in digital audio workstations, up to building courses as an eLearning developer. I picked up JavaScript out of curiosity during the pandemic and felt a huge sense of reward from finishing coding challenges and improving my understanding of the language.</p>
            </div>
            <div className="about__text-container">  
              <div className="about__brainstation-graduate">
                <img className="about__brainstation" src={brainstationIconBlue} alt="Brainstation Logo" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true" />
                <h2 className="about__graduate-label" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true">BrainStation Graduate</h2>
              </div>
              <p className="about__information" data-aos="fade-right" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">After self-teaching web development for over a year, I consolidated and expanded my learning through <a href="https://brainstation.io/course/online/remote-web-development-bootcamp" className="about__link" target="blank">BrainStation's Web Development Bootcamp</a>. Now, as a graduate from the program, I can build websites and web applications from client to server, supplemented by years of relative editing practice under my belt.</p>
            </div>
            {/* <div className="about__text-container">  
              <p className="about__competencies" data-aos="zoom-in" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">The ability to pick up and utilize new technologies is a crucial skill in today's digital demands as a developer.</p>
              <div className="about__links" data-aos="zoom-in" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="10">
                <a href="#skills" className="about__link"><p className="about__competencies--link">Here's what I know so far </p></a>
                <a href="#skills" className="about__hand">👇🏽</a>
              </div>
            </div> */}
            <div className="about__text-container">
                <h2 className="about__header">Next Steps</h2>
                <p className="about__information">I'm currently taking courses on Scrimba to continue professional development, creating application concepts to add to my portfolio, and actively seeking developer roles!</p>
            </div>
          </div>
        </section>
        <section className="creative" id="skills">
        {/* <div className="about__text-container">  
              <p className="about__competencies" data-aos="zoom-in" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">The ability to pick up and utilize new technologies is a crucial skill in today's digital demands as a developer.</p>
              <div className="about__links" data-aos="zoom-in" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="10">
                <a href="#skills" className="about__link"><p className="about__competencies--link">Here's what I know so far </p></a>
                <a href="#skills" className="about__hand">👇🏽</a>
              </div>
            </div> */}
            <div className="creative__technologies">
              <div className="creative__tech-category">
                <h2 className="creative__label" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Languages and Frameworks</h2>
                <div className="creative__technology-group" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">HTML</span>
                    <img className="creative__icon" src={htmlIcon} alt="HTML Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">CSS</span>
                    <img className="creative__icon" src={cssIcon} alt="CSS Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">JavaScript</span>
                    <img className="creative__icon" src={javascriptIcon} alt="Javascript Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">SASS</span>
                    <img className="creative__icon" src={sassIcon} alt="Sass Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">React</span>
                    <img className="creative__icon creative--react" src={reactIcon} alt="ReactJS Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">MySQL</span>
                    <img className="creative__icon" src={mysqlIcon} alt="MySQL Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">ToneJS</span>
                    <img className="creative__icon" src={toneIcon} alt="ToneJS Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">ExpressJS</span>
                    <img className="creative__icon" src={expressIcon} alt="Express Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">NodeJS</span>
                    <img className="creative__icon" src={nodeIcon} alt="NodeJS Logo" />
                  </div>
                </div>
              </div>
              <div className="creative__tech-category">
                <h2 className="creative__label" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="-50">Production and Design</h2>
                <div className="creative__technology-group" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="-50">
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">Photoshop</span>
                    <img className="creative__icon" src={photoShopIcon} alt="Photoshop Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">Audition</span>
                    <img className="creative__icon" src={auditionIcon} alt="Audition Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">Illustrator</span>
                    <img className="creative__icon" src={illustratorIcon} alt="Illustrator Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label"> Dreamweaver</span>
                    <img className="creative__icon" src={dreamweaverIcon} alt="Dreamweaver Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">InDesign</span>
                    <img className="creative__icon" src={inDesignIcon} alt="InDesign Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">After Effects</span>
                    <img className="creative__icon" src={afterEffectsIcon} alt="After Effects Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">Premiere Pro</span>
                    <img className="creative__icon" src={premiereProIcon} alt="Premiere Pro Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">Ableton Live</span>
                    <img className="creative__icon" src={abletonIcon} alt="Ableton Logo" />
                  </div>
                  <div className="creative__icon-box">
                    <span className="creative__icon-label">Figma</span>
                    <img className="creative__icon" src={figmaIcon} alt="Figma Logo" />
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className="projects" id="projects">
            <div className="projects__responsive-container">
            <h2 className="projects__header">Projects</h2>
            <div className="projects__visualeyes-container">
                <div className="projects__visualeyes-icon-logo">
                    <VisualEye />
                </div>
                <div className="projects__visualeyes-description-links">
                    <img src={visualEyesLogo} alt="VisualEyes Logo" className="projects__visualeyes-logo"/>
                    <p className="projects__information" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">An interactive music UI that pairs visual effects to user inputs on built-in drum and synth sequencers.</p>
                    <div className="projects__links" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="15">
                        <a href="https://visual-eyes-pi.vercel.app/" target="blank" className="projects__link">Play</a>
                        <a href="https://github.com/karst-larsen/VisualEyes" target="blank" className="projects__link">GitHub</a>
                        <Link to="/visual-eyes" className="projects__link">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="projects__bmo-container">
                <div className="projects__bmo-icon-logo">
                    <img src={bmoImage} alt="BMO Image" className="projects__bmo-image" />

                </div>
                <div className="projects__bmo-description-links">
                    <div className="projects__equation">
                    <img className="projects__brainstation" src={brainstationIcon} alt="Brainstation Logo" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true" />
                    <span className="projects__multiply" data-aos="zoom-in" data-aos-delay="250" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true">X</span>
                    <img src={bmoLogo} alt="BMO Logo" className="projects__bmo-logo" data-aos="zoom-in" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-once="true"/>
                    </div>
                    <p className="projects__information">A hackathon group challenge devised to better the UX for BMO's Newcomers-To-Canada (NTC) page.</p>
                    <div className="projects__links">
                        <a href="" className="projects__link" target="blank">Open</a>
                        <a href="https://github.com/karst-larsen/industry-hackathon-deployed" className="projects__link" target="blank">GitHub</a>
                    </div>
                </div>
            </div>
            </div>
        </section>
      </div>
    );
}

export default HomePage;