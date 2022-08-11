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


class App extends Component {
  state = {
    greetingsContainer: ['Hello', 'Bonjour', 'Hola', 'Olá', 'Hej', 'Ciao', 'こんにちは', 'Hei', 'Χαίρε', 'Hallo', 'Zdravo', 'مرحبا', '안녕', 'Cześć', 'Ahoj', '你好', 'Sveiki', 'Chào bạn'],
    counter: 0,
    greeting: 'Hello'
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
  
  render() {
    AOS.init();

    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <section className="personal">
          <div className="personal__responsive-container">
            <div className="personal__images-icons">
              <img src={myIcon} 
              alt="headshot" 
              className="personal__image" 
              data-aos="zoom-in"
              data-aos-delay="1250"
              data-aos-duration="1000" 
              />
              <div className="personal__links" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-offset="-200">
                <img src={linkedIn} alt="LinkedIn Icon" className="personal__icon" />
                <img src={gitHub} alt="GitHub Icon" className="personal__icon"/>
                <img src={emailIcon} alt="E-Mail Icon" className="personal__icon" />
              </div>
            </div>
            <h1 className="personal__header">
              <span className="personal__header-line personal--bold" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="750">Karsten O'Neill-Larsen
              </span>
                <br />
              <span className="personal__header-line personal--italic personal__position" data-aos="fade-up" data-aos-delay="750" data-aos-duration="750" data-aos-easing="ease-in-out">Full-Stack Web Developer</span> <br />
              <Greeting greeting={this.state.greeting} />
              <span className="personal__hand" data-aos="fade-up" data-aos-delay="2500" data-aos-duration="750" data-aos-easing="ease-in-out">👋🏽</span>
            </h1>
            </div>
            {/* <div className="personal__information-box" data-aos="fade-up" data-aos-delay="2400" data-aos-duration="1000" data-aos-easing="ease-out">
            <p className="personal__information" >
            I’m a <span className="personal--bold">full stack developer</span> based out of Toronto, Ontario.
            </p>
            <p className="personal__information">I have been a creative developer for my entire life. From editing YouTube videos at a young age, to producing electronic music in digital audio workstations for friends to enjoy, up to building courses for associations as an eLearning developer. </p>
            <p className="personal__information">I fell into programming as a relative practice to much of what I’ve been involved with as hobby. Experimenting with code and wanting to bring creative ideas to life accelerated my desire to understand the root of how programming languages worked. In that chase, a new passion grew for me. </p>
            <p className="personal__information">Now, as a recent graduate from BrainStation’s Web Development Diploma Program, I have the ability to build websites and web applications from front to back, backed up with years of meticulous editing practice under my belt.</p>
            </div> */}
          </section>
          <section className="creative">
            <div className="creative__responsive-container">
              <h1 className="creative__header" data-aos="fade-up" data-aos-delay="250" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Creative Development</h1>
              <p className="creative__information" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" data-aos-once="true" >I have been a creative developer my entire life. From editing YouTube videos, producing electronic music in digital audio workstations, up to building courses as an eLearning developer. Here's a few of my relevant development competencies: </p>
              <div className="creative__technologies">
                <div className="creative__tech-category">
                  <span className="creative__label"data-aos="fade-up" data-aos-delay="750" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Production and Design</span>
                  <div className="creative__technology-group" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">
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
                <div className="creative__tech-category">
                  <span className="creative__label" data-aos="fade-up" data-aos-delay="1250" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="-50">Languages and Frameworks</span>
                  <div className="creative__technology-group" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="-50">
                    <img className="creative__icon" src={htmlIcon} alt="HTML Logo" />
                    <img className="creative__icon" src={cssIcon} alt="CSS Logo" />
                    <img className="creative__icon" src={javascriptIcon} alt="Javascript Logo" />
                    <img className="creative__icon" src={sassIcon} alt="Sass Logo" />
                    <img className="creative__icon" src={reactIcon} alt="ReactJS Logo" />
                    <img className="creative__icon" src={mysqlIcon} alt="MySQL Logo" />
                    <img className="creative__icon" src={toneIcon} alt="ToneJS Logo" />
                    <img className="creative__icon" src={expressIcon} alt="Express Logo" />
                    <img className="creative__icon" src={nodeIcon} alt="NodeJS Logo" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="projects">
            <h2 className="projects__header">Application Highlight</h2>
            <p className="projects__information">My first major application from my BrainStation capstone project is called VisualEyes, an interactive music UI that pairs visual effects to user inputs on built-in drum and synth sequencers.</p>
            <p className="projects__information">I’ll be adding more applications of interest over time, so be sure to check back. </p>
          <VisualEye />
          </section> */}
      </div>
    );
  }
}

export default App;
