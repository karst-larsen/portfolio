import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VisualEyesPage from './pages/VisualEyesPage/VisualEyesPage';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


const App = () => {
    AOS.init();

    return (
      <Router>
        <header className="App-header" id="home">
          <NavBar />
        </header>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <Route path="/about" component={AboutPage} /> */}
            <Route path="/visual-eyes" component={VisualEyesPage} />
          </Switch>
        </ScrollToTop>
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
      </Router>
    );
  }

export default App;
