import './App.scss';
import NavBar from './components/NavBar/NavBar';
import myIcon from './assets/images/BSTN-May-2022-Toront-CT-Headshot-40 1.svg'
import linkedIn from './assets/icons/174857 1.svg'
import gitHub from './assets/icons/25231 1.svg'
import emailIcon from './assets/icons/XMLID_1_.svg'
import VisualEye from './components/NavBar/VisualEye/VisualEye';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="personal">
        <div className="personal__responsive-container">
          <div className="personal__images-icons">
            <img src={myIcon} alt="headshot" className="personal__image" />
            <div className="personal__links">
              <img src={linkedIn} alt="LinkedIn Icon" className="personal__icon"/>
              <img src={gitHub} alt="GitHub Icon" className="personal__icon" />
              <img src={emailIcon} alt="E-Mail Icon" className="personal__icon" />
            </div>
          </div>
          <h1 className="personal__header">
            <span className="personal__header-line">Hello! 
              <span className="personal__hand">👋🏽</span>
            </span>
              <br />
            <span className="personal__header-line">My name is</span> <br />
            <span className="personal__header-line personal--bold">Karsten O'Neill-Larsen.</span>
          </h1>
          </div>
          <div className="personal__information-box">
          <p className="personal__information">
          I’m a <span className="personal--bold">full stack developer</span> based out of Toronto, Ontario.
          </p>
          <p className="personal__information">I have been a creative developer for my entire life. From editing YouTube videos at a young age, to producing electronic music in digital audio workstations for friends to enjoy, up to building courses for associations as an eLearning developer. </p>
          <p className="personal__information">I fell into programming as a relative practice to much of what I’ve been involved with as hobby. Experimenting with code and wanting to bring creative ideas to life accelerated my desire to understand the root of how programming languages worked. In that chase, a new passion grew for me. </p>
          <p className="personal__information">Now, as a recent graduate from BrainStation’s Web Development Diploma Program, I have the ability to build websites and web applications from front to back, backed up with years of meticulous editing practice under my belt.</p>
          </div>
          <a href="www.linkedin.com/in/karsten-larsen/" className="personal__contact-link">Let's Get Started!</a>
        </section>
        <section className="projects">
          <h2 className="projects__header">Application Highlight</h2>
          <p className="projects__information">My first major application from my BrainStation capstone project is called VisualEyes, an interactive music UI that pairs visual effects to user inputs on built-in drum and synth sequencers.</p>
          <p className="projects__information">I’ll be adding more applications of interest over time, so be sure to check back. </p>
        <VisualEye />
        </section>
    </div>
  );
}

export default App;
