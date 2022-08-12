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
        <header className="App-header">
          <NavBar />
        </header>
        <section className="personal" id="home">
          <div className="personal__responsive-container">
            <div className="personal__images-icons">
              <img src={myIcon}
              onClick={this.toggleImage} 
              alt="headshot" 
              data-aos="zoom-in"
              data-aos-delay="1250"
              data-aos-duration="1000"
              data-aos-once="true"
              className="personal__image"
              />
              <div className="personal__links" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-offset="-200">
                <a href="https://www.linkedin.com/in/karsten-larsen/" target="blank"><img src={linkedIn} alt="LinkedIn Icon" className="personal__icon" /></a>
                <a href="https://www.github.com/karst-larsen" target="blank"><img src={gitHub} alt="GitHub Icon" className="personal__icon"/></a>
                <a href="mailto:karsten.oneill@hotmail.ca"><img src={emailIcon} alt="E-Mail Icon" className="personal__icon" /></a>
              </div>
            </div>
            <h1 className="personal__header">
              <span className="personal__header-line personal--bold" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="750">Karsten O'Neill-Larsen
              </span>
                <br />
              <span className="personal__header-line personal--italic personal__position" data-aos="fade-up" data-aos-delay="750" data-aos-duration="750" data-aos-easing="ease-in-out">Web Developer Portfolio</span> <br />
              <Greeting greeting={this.state.greeting} />
              <span className="personal__hand" data-aos="fade-up" data-aos-delay="2500" data-aos-duration="750" data-aos-easing="ease-in-out">👋🏽</span>
            </h1>
            </div>
          </section>
          <section className="about" id="about">
          <div className="about__responsive-container">
            <div className="about__text-container">
              <h1 className="about__header" data-aos="fade-up" data-aos-delay="250" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Creative Development</h1>
              <p className="about__information" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" data-aos-once="true" >I have been a creative developer my entire life. From editing YouTube videos, producing electronic music in digital audio workstations, up to building courses as an eLearning developer. </p>
            </div>
            <div className="about__text-container">  
              <div className="about__brainstation-graduate">
              <img className="about__brainstation" src={brainstationIcon} alt="Brainstation Logo" data-aos="fade-right" data-aos-delay="1000" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true" />
              <h2 className="about__graduate-label" data-aos="fade-right" data-aos-delay="750" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true">BrainStation Graduate</h2>
              </div>
              <p className="about__information" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="750" data-aos-once="true">Now, as a graduate from BrainStation's Web Development Bootcamp Diploma Program, I can build websites and web applications from front to back, supplemented by years of relative editing practice under my belt.  </p>
            </div>
            <div className="about__text-container">  
              <p className="about__competencies" data-aos="fade-up" data-aos-delay="2500" data-aos-duration="750" data-aos-once="true">The ability to pick up and utilize new technologies is a crucial skill in today's digital demands as a developer.</p>
              <a href="#skills" className="about__competencies--link"><p className="about__competencies" data-aos="fade-up" data-aos-delay="2750" data-aos-duration="750" data-aos-once="true" data-aos-offset="-20">Here's what I know so far:</p></a>
            </div>
          </div>
          </section>
          <section className="creative" id="skills">
            {/* <div className="creative__responsive-container"> */}
              <div className="creative__technologies">
              <div className="creative__tech-category">
                  <span className="creative__label" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Languages and Frameworks</span>
                  <div className="creative__technology-group" data-aos="zoom-in" data-aos-delay="750" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">
                    <img className="creative__icon" src={htmlIcon} alt="HTML Logo" />
                    <img className="creative__icon" src={cssIcon} alt="CSS Logo" />
                    <img className="creative__icon" src={javascriptIcon} alt="Javascript Logo" />
                    <img className="creative__icon" src={sassIcon} alt="Sass Logo" />
                    <img className="creative__icon creative--react" src={reactIcon} alt="ReactJS Logo" />
                    <img className="creative__icon" src={mysqlIcon} alt="MySQL Logo" />
                    <img className="creative__icon" src={toneIcon} alt="ToneJS Logo" />
                    <img className="creative__icon" src={expressIcon} alt="Express Logo" />
                    <img className="creative__icon" src={nodeIcon} alt="NodeJS Logo" />
                  </div>
                </div>
                <div className="creative__tech-category">
                  <span className="creative__label" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="-50">Production and Design</span>
                  <div className="creative__technology-group" data-aos="zoom-in" data-aos-delay="1250" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="-50">
                    <img className="creative__icon" src={photoShopIcon} alt="Photoshop Logo" />
                    <img className="creative__icon" src={auditionIcon} alt="Audition Logo" />
                    <img className="creative__icon" src={illustratorIcon} alt="Illustrator Logo" />
                    <img className="creative__icon" src={dreamweaverIcon} alt="Dreamweaver Logo" />
                    <img className="creative__icon" src={inDesignIcon} alt="InDesign Logo" />
                    <img className="creative__icon" src={afterEffectsIcon} alt="After Effects Logo" />
                    <img className="creative__icon" src={premiereProIcon} alt="Premiere Pro Logo" />
                    <img className="creative__icon" src={abletonIcon} alt="Ableton Logo" />
                    <img className="creative__icon" src={figmaIcon} alt="Figma Logo" />
                  </div>
                </div>
              {/* </div> */}
            </div>
          </section>
          <section className="capstone" id="capstone">
            <div className="capstone__equation">
              <img className="capstone__brainstation" src={brainstationIcon} alt="Brainstation Logo" data-aos="zoom-in" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true" />
              <span className="capstone__multiply" data-aos="zoom-in" data-aos-delay="750" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true">X</span>
              <img src={nameLogo} alt="Name Logo" className="capstone__name" data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true"/>
            </div>
            <div className="capstone__visualeyes-container" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1200" data-aos-once="true">
          <VisualEye />
          <img src={visualEyesLogo} alt="VisualEyes Logo" className="capstone__visualeyes-logo"/>
          </div>
            <p className="capstone__information">An interactive music UI that pairs visual effects to user inputs on built-in drum and synth sequencers.</p>
            <a href="https://visual-eyes-pi.vercel.app/">Play</a>
            <a href="https://github.com/karst-larsen/VisualEyes">GitHub</a>
            <p className="capstone__information">I’ll be adding more applications of interest over time, so be sure to check back. </p>
          </section>
      </div>
    );
  }
}

export default App;
