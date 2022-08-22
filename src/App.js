import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VisualEyesPage from './pages/VisualEyesPage/VisualEyesPage';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';


const App = () => {
    AOS.init();
    return (
      <Router>
        <NavBar />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/visual-eyes" component={VisualEyesPage} />
          </Switch>
        </ScrollToTop>
        <Contact />
       </Router>
    );
  }

export default App;
