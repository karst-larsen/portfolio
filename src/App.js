import { Component } from 'react'
import "animate.css/animate.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import myIcon from './assets/images/BSTN-May-2022-Toront-CT-Headshot-40 1.svg'
import linkedIn from './assets/icons/174857 1.svg'
import gitHub from './assets/icons/25231 1.svg'
import emailIcon from './assets/icons/XMLID_1_.svg'
import VisualEye from './components/NavBar/VisualEye/VisualEye';
import Greeting from "./components/Greeting/Greeting";
import photoShopIcon from './assets/icons/photoshop.svg'
import illustratorIcon from './assets/icons/illustrator.svg'
import auditionIcon from './assets/icons/audition.svg'
import inDesignIcon from './assets/icons/indesign.svg'
import afterEffectsIcon from './assets/icons/aftereffects.svg'
import premiereProIcon from './assets/icons/premierepro.svg'
import dreamweaverIcon from './assets/icons/dreamweaver.svg'
import abletonIcon from './assets/icons/ableton.svg'
import figmaIcon from './assets/icons/figma.svg'
import proToolsIcon from './assets/icons/protools.svg'
import htmlIcon from './assets/icons/html.svg'
import cssIcon from './assets/icons/css.svg'
import javascriptIcon from './assets/icons/javascript.svg'
import sassIcon from './assets/icons/sass.svg'
import reactIcon from './assets/icons/react.svg'
import knexIcon from './assets/icons/knex.svg'
import mysqlIcon from './assets/icons/mysql.svg'
import toneIcon from './assets/icons/tone.svg'
import nodeIcon from './assets/icons/node.svg'
import expressIcon from './assets/icons/express.svg'
import brainstationIcon from './assets/icons/brainstation.svg'
import brainstationIconBlue from './assets/icons/BrainStationLogoBlue.svg'
import nameLogo from './assets/icons/nameLogo.svg'
import visualEyesLogo from './assets/icons/VisualEyesLogo.svg'



class App extends Component {
  state = {
    greetingsContainer: ['Hello', 'Bonjour', 'Hola', 'Olá', 'Hej', 'Ciao', 'こんにちは', 'Hei', 'Χαίρε', 'Hallo', 'Zdravo', 'مرحبا', '안녕', 'Cześć', 'Ahoj', '你好', 'Sveiki', 'Chào bạn'],
    counter: 0,
    greeting: 'Hello',
    imageClicked: false
  }

  changeGreeting = () => {
    let newCounter = (this.state.counter + 1 < this.state.greetingsContainer.length ? this.state.counter + 1 : 0)
    this.setState({
      greeting: this.state.greetingsContainer[newCounter],
      counter: newCounter
    }, () => {
      console.log(this.state.greetingsContainer.length)
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.changeGreeting();
    }, 8000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      setTimeout(() => {
        this.changeGreeting()
      }, 4975)
    }
  }

  toggleImage = () => {
    this.setState({
      imageClicked: !this.state.imageClicked
    }, () => {
      console.log('Image Clicked')
    })
  }
  
  render() {
    AOS.init();

    return (
      <div className="App">
        <header className="App-header" id="home">
          <NavBar />
        </header>
        <section className="personal">
          <div className="personal__responsive-container">
            <h1 className="personal__header">
              <span className="personal__header-line personal--bold" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="750">Hey, <br />I'm Karsten Larsen
                <span className="personal__hand" data-aos="fade-up" data-aos-delay="250" data-aos-duration="750" data-aos-easing="ease-in-out">👋🏽</span>
              </span>
                <br />
                <hr className="personal__horizontal-line" data-aos="fade-right" data-aos-delay="500" />
              <span className="personal__header-subline personal--italic personal__position" data-aos="fade-up" data-aos-delay="750" data-aos-duration="750" data-aos-easing="ease-in-out">I'm a Junior Full Stack Developer based out of Toronto, Ontario. Lover of JavaScript and interactive media.</span> <br />
            </h1>
            <div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="about__responsive-container">
            <div className="about__text-container">
              <h1 className="about__header" data-aos="fade-left" data-aos-delay="250" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Creative Development</h1>
              <p className="about__information" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="750" data-aos-once="true" >I have been a creative developer my entire life. From editing YouTube videos, producing electronic music in digital audio workstations, up to building courses as an eLearning developer. </p>
            </div>
            <div className="about__text-container">  
              <div className="about__brainstation-graduate">
                <img className="about__brainstation" src={brainstationIconBlue} alt="Brainstation Logo" data-aos="fade-right" data-aos-delay="1000" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true" />
                <h2 className="about__graduate-label" data-aos="fade-right" data-aos-delay="750" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true">BrainStation Graduate</h2>
              </div>
              <p className="about__information" data-aos="zoom-in" data-aos-delay="1250" data-aos-duration="750" data-aos-once="true">Now, as a graduate from <a href="https://brainstation.io/course/online/remote-web-development-bootcamp" className="about__link" target="blank">BrainStation's Web Development Bootcamp</a>, I can build websites and web applications from front to back, supplemented by years of relative editing practice under my belt.</p>
            </div>
            <div className="about__text-container">  
              <p className="about__competencies" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="750" data-aos-once="true">The ability to pick up and utilize new technologies is a crucial skill in today's digital demands as a developer.</p>
              <div className="about__links">
                <a href="#skills" className="about__link"><p className="about__competencies--link" data-aos="fade-up" data-aos-delay="1750" data-aos-duration="750" data-aos-once="true" data-aos-offset="-20">Here's what I know so far </p></a>
                <a href="#skills" className="about__hand" data-aos="fade-up" data-aos-delay="1750" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-offset="50">👇🏽</a>
              </div>
            </div>
          </div>
        </section>
        <section className="creative" id="skills">
            <div className="creative__technologies">
              <div className="creative__tech-category">
                <h2 className="creative__label" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Languages and Frameworks</h2>
                <div className="creative__technology-group" data-aos="zoom-in" data-aos-delay="750" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">
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
                <h2 className="creative__label" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="-50">Production and Design</h2>
                <div className="creative__technology-group" data-aos="zoom-in" data-aos-delay="1250" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="-50">
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
        <section className="capstone" id="capstone">
          <div className="capstone__responsive-container">
            <div className="capstone__equation">
              <img className="capstone__brainstation" src={brainstationIcon} alt="Brainstation Logo" data-aos="zoom-in" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true" />
              <span className="capstone__multiply" data-aos="zoom-in" data-aos-delay="750" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true">X</span>
              <img src={nameLogo} alt="Name Logo" className="capstone__name" data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true"/>
            </div>
            <a href="https://visual-eyes-pi.vercel.app/" target="blank" data-aos="zoom-in" data-aos-delay="1250" data-aos-duration="1200" data-aos-once="true">
              <div className="capstone__visualeyes-container">
                <VisualEye />
                <img src={visualEyesLogo} alt="VisualEyes Logo" className="capstone__visualeyes-logo"/>
              </div>
            </a>
            <p className="capstone__information" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">An interactive music UI that pairs visual effects to user inputs on built-in drum and synth sequencers.</p>
            <p className="capstone__information" data-aos="fade-up" data-aos-delay="1750" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true"> Built with React and ToneJS.</p>
            <div className="capstone__links" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="50">
              <a href="https://visual-eyes-pi.vercel.app/" target="blank" className="capstone__link">Play</a>
              <a href="https://github.com/karst-larsen/VisualEyes" target="blank" className="capstone__link">GitHub</a>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
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
        </section>
      </div>
    );
  }
}

export default App;
