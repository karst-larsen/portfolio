import '../../App.scss';
import { Link } from 'react-router-dom'
import VisualEye from '../../components/VisualEye/VisualEye';
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
import visualEyesLogo from '../../assets/icons/spectrumVisualEyes.png'
import bmoImage from '../../assets/images/bmo-image.png'
import bmoLogo from '../../assets/images/bmo-logo.png'
import personalIcon from '../../assets/images/profilePic.png'

const HomePage = () => {
    return (
        <>
        <section className="personal" id="personal">
          <div className="personal__responsive-container">
              <div className="personal__image-text">
                    <img data-aos="zoom-in" data-aos-duration="750" src={personalIcon} alt="Personal Icon" className="personal__image" />
                    <div className="personal__header">
                    <h1 className="personal__header-line personal--bold" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-once="true">Hey, <br />I'm Karsten Larsen
                        <span className="personal__hand" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">👋🏽</span>
                        <hr className="personal__horizontal-line" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" />
                    </h1>
                    <span className="personal__header-subline personal--italic personal__position" data-aos="fade-up" data-aos-delay="750" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">I'm a Full Stack Developer based out of Toronto, Ontario. Lover of JavaScript and interactive media.</span> <br />
                    </div>
              </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="about__responsive-container">
              <h1 className="about__header">About Me</h1>
            <div className="about__text-container">
              <h2 className="about__label">Creative Development</h2>
              <p className="about__information">I have always had a passion for creative development; editing YouTube videos, producing electronic music in digital audio workstations, and building courses as an eLearning developer. I picked up JavaScript out of curiosity during the pandemic and felt a huge sense of reward from completing coding challenges and improving my understanding of the language.</p>
            </div>
            <div className="about__text-container">  
              <div className="about__brainstation-graduate">
                <img className="about__brainstation" src={brainstationIconBlue} alt="Brainstation Logo" />
                <h2 className="about__graduate-label">BrainStation Graduate</h2>
              </div>
              <p className="about__information">As an extension to my numerous years of editing experience, I began studying and self-teaching web-development. After a year of exploration of the field, I made the decision to complete <a href="https://brainstation.io/course/online/remote-web-development-bootcamp" className="about__link" target="blank">BrainStation's Web Development Bootcamp</a>. This program allowed me to consolidate and expand my learning. Now, as a graduate of the program, I can build websites and web applications from client to server.</p>
            </div>
            <div className="about__text-container">
                <h2 className="about__label">Next Steps</h2>
                <p className="about__information">I am always working on creating novel application concepts, expanding my portfolio and refining my skills. Additionally, I am currently taking courses on Scrimba, learning new JavaScript frameworks to continue professional development, and actively seeking developer roles!</p>
            </div>
          </div>
        </section>
        <section className="skills" id="skills">
        <h1 className="skills__header">Skills</h1>
            <div className="skills__technologies">
              <div className="skills__tech-category">
                <h2 className="skills__label">Languages and Frameworks</h2>
                <div className="skills__technology-group">
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">HTML</span>
                    <img className="skills__icon" src={htmlIcon} alt="HTML Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">CSS</span>
                    <img className="skills__icon" src={cssIcon} alt="CSS Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">JavaScript</span>
                    <img className="skills__icon" src={javascriptIcon} alt="Javascript Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">SASS</span>
                    <img className="skills__icon" src={sassIcon} alt="Sass Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">React</span>
                    <img className="skills__icon skills--react" src={reactIcon} alt="ReactJS Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">MySQL</span>
                    <img className="skills__icon" src={mysqlIcon} alt="MySQL Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">ToneJS</span>
                    <img className="skills__icon" src={toneIcon} alt="ToneJS Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">ExpressJS</span>
                    <img className="skills__icon" src={expressIcon} alt="Express Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">NodeJS</span>
                    <img className="skills__icon" src={nodeIcon} alt="NodeJS Logo" />
                  </div>
                </div>
              </div>
              <div className="skills__tech-category">
                <h2 className="skills__label" >Production and Design</h2>
                <div className="skills__technology-group">
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">Photoshop</span>
                    <img className="skills__icon" src={photoShopIcon} alt="Photoshop Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">Audition</span>
                    <img className="skills__icon" src={auditionIcon} alt="Audition Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">Illustrator</span>
                    <img className="skills__icon" src={illustratorIcon} alt="Illustrator Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label"> Dreamweaver</span>
                    <img className="skills__icon" src={dreamweaverIcon} alt="Dreamweaver Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">InDesign</span>
                    <img className="skills__icon" src={inDesignIcon} alt="InDesign Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">After Effects</span>
                    <img className="skills__icon" src={afterEffectsIcon} alt="After Effects Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">Premiere Pro</span>
                    <img className="skills__icon" src={premiereProIcon} alt="Premiere Pro Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">Ableton Live</span>
                    <img className="skills__icon" src={abletonIcon} alt="Ableton Logo" />
                  </div>
                  <div className="skills__icon-box">
                    <span className="skills__icon-label">Figma</span>
                    <img className="skills__icon" src={figmaIcon} alt="Figma Logo" />
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
                    <p className="projects__information" >An interactive music UI that pairs visual effects to user inputs on drum and synth sequencers.</p>
                    <div className="projects__links" >
                        <a href="https://visual-eyes-pi.vercel.app/" target="_blank" rel="noreferrer" className="projects__link">Play</a>
                        <a href="https://github.com/karst-larsen/VisualEyes" target="_blank" rel="noreferrer" className="projects__link">GitHub</a>
                        <Link to="/visual-eyes" className="projects__link">About</Link>
                    </div>
                </div>
            </div>
            <div className="projects__bmo-container">
                <div className="projects__bmo-icon-logo">
                    <img src={bmoImage} alt="BMO Header" className="projects__bmo-image" />

                </div>
                <div className="projects__bmo-description-links">
                    <div className="projects__equation">
                    <img className="projects__brainstation" src={brainstationIcon} alt="Brainstation Logo" />
                    <span className="projects__multiply">X</span>
                    <img src={bmoLogo} alt="BMO Logo" className="projects__bmo-logo" />
                    </div>
                    <p className="projects__information">A hackathon group challenge to improve the UX for BMO's Newcomers-To-Canada (NTC) page.</p>
                    <div className="projects__links">
                        <a href="https://bmo-hackathon-pink.vercel.app/" className="projects__link" target="_blank" rel="noreferrer">Open</a>
                        <a href="https://github.com/karst-larsen/industry-hackathon-deployed" className="projects__link" target="_blank" rel="noreferrer">GitHub</a>
                        <Link to="/bmo-hackathon" className="projects__link">About</Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
      </>
    );
}

export default HomePage;