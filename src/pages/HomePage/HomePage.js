import '../../App.scss';
import VisualEye from '../../components/VisualEye/VisualEye';
import brainstationIcon from '../../assets/icons/brainstation.svg'
import brainstationIconBlue from '../../assets/icons/BrainStationLogoBlue.svg'
import visualEyesLogo from '../../assets/icons/spectrumVisualEyes.png'
import bmoImage from '../../assets/images/bmo-image.png'
import bmoLogo from '../../assets/images/bmo-logo.png'
import personalIcon from '../../assets/images/profilePic.png'
import bandSiteIcon from '../../assets/images/band.jpeg';
import bandSiteLogo from '../../assets/images/Logo-bandsite.svg'
import quantipomoLogo from '../../assets/images/quantipomo-logo.png';
import quantipomoImage from '../../assets/images/quantipomo-image.png';
import { languagesData, skillsData } from '../../assets/utils/skillsData'
import { Link } from 'react-router-dom'

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
                    <span className="personal__header-subline personal__position" data-aos="fade-up" data-aos-delay="750" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">I'm a Full Stack Developer based out of Toronto, Ontario. Lover of JavaScript and interactive media.</span> <br />
                    </div>
              </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="about__responsive-container">
            <div className="about__text-container">
              <h2 className="about__label">Creative Development</h2>
              <p className="about__information">I have always had a passion for creative development in many forms; editing YouTube videos, producing electronic music in digital audio workstations, and building courses as an eLearning developer. I picked up JavaScript out of curiosity during the pandemic and felt a huge sense of reward from completing coding challenges and improving my understanding of the language.</p>
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
                <p className="about__information">I am currently working as a Teaching Assistant at BrainStation after being nominated as a suitable candidate to help future students through the program! This has allowed me to revisit the material and get deeper understanding of programming logic by answering student questions and reviewing code. Outside of my role as a Teaching Assistant, I am actively seeking developer roles in creative, experiential environments.</p>
            </div>
          </div>
        </section>
        <section className="skills" id="skills">
        <h1 className="skills__header">SKILLS</h1>
        <h2 className="skills__sub-header">A collection of software and languages that I'm familiar with. I'm also eager to learn new frameworks and developer tools to expand my skillset! My current deep dive is <a className="skills__link" href="https://reactjs.org/docs/hooks-intro.html">React Hooks.</a></h2>
        <hr className="personal__horizontal-line personal__horizontal-line--skills-section" data-aos="fade-up" data-aos-once="true" />
        
            <div className="skills__technologies">
              <div className="skills__tech-category">
                <h2 className="skills__label">Languages and Frameworks</h2>
                <div className="skills__technology-group">
                  {languagesData.map(language => {
                    return (
                      <a key={Math.random()} href={language.link} target="_blank" rel="noreferrer" className="skills__link">
                      <div className="skills__icon-box">
                        <span className="skills__icon-label">{language.name}</span>
                        <img className="skills__icon" src={language.image} alt={`${language.name} Logo`} />
                    </div>
                  </a> 
                    )
                  })}
                </div>
              </div>
              <div className="skills__tech-category">
                <h2 className="skills__label" >Production and Design</h2>
                <div className="skills__technology-group">
                  {skillsData.map(skill => {
                    return (
                    <a key={Math.random()} href={skill.link} target="_blank" rel="noreferrer" className="skills__link">
                    <div className="skills__icon-box">
                      <span className="skills__icon-label">Photoshop</span>
                      <img className="skills__icon" src={skill.image} alt={`${skill.name} Logo`} />
                    </div>
                  </a>
                    )
                  })}
                </div>
              </div>
          </div>
        </section>
        <section className="projects" id="projects">
            <div className="projects__responsive-container">
            <h2 className="projects__header">PROJECTS</h2>
            <div className="projects__container">
                  <div className="projects__bmo-icon-logo">
                      <img src={quantipomoImage} className="projects__image projects__image--quantipomo" alt="BandSite Group" />
                  </div>
                  <div className="projects__bmo-description-links">
                    <div className="projects__project-banner projects__project-banner--quantipomo">
                      <img src={quantipomoLogo} alt="Logo of Band Site" className="projects__quantipomo-logo" />
                    </div>
                  <p className="projects__information">My current work in progress: Quantipomo! A pomodoro timer application that gamifies deep focus.</p>
                  <div className="projects__links" >
                        <button className="projects__link">Coming Soon!</button>
                    </div>
                  </div>
            </div>
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
            <div className="projects__container">
                <div className="projects__bmo-icon-logo">
                    <img src={bmoImage} alt="BMO Header" className="projects__image" />
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
            <div className="projects__container">
                  <div className="projects__bmo-icon-logo">
                      <img src={bandSiteIcon} className="projects__bmo-image" alt="BandSite Group" />
                  </div>
                  <div className="projects__bmo-description-links">
                    <div className="projects__project-banner projects__project-banner--bandsite">
                      <img src={bandSiteLogo} alt="Logo of Band Site" className="projects__bandsite-logo" />
                    </div>
                  <p className="projects__information">A mockup of a Band Site. Uses GET, POST, PUT, and DELETE API requests.</p>
                  <div className="projects__links" >
                        <a href="https://karsten-oneilllarsen-bandsite.vercel.app/index.html" target="_blank" rel="noreferrer" className="projects__link">Open</a>
                        <a href="https://github.com/karst-larsen/karsten-oneilllarsen-bandsite" target="_blank" rel="noreferrer" className="projects__link">GitHub</a>
                    </div>
                  </div>
            </div>
            </div>
        </section>
      </>
    );
}

export default HomePage;