import './App.scss';
import NavBar from './components/NavBar/NavBar';
import myIcon from './assets/images/BSTN-May-2022-Toront-CT-Headshot-40 1.svg'
import linkedIn from './assets/icons/174857 1.svg'
import gitHub from './assets/icons/25231 1.svg'
import emailIcon from './assets/icons/XMLID_1_.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="personal">
        <img src={myIcon} alt="headshot" className="personal__image" />
        <div className="personal__links">
          <img src={linkedIn} alt="LinkedIn Icon" />
          <img src={gitHub} alt="GitHub Icon" />
          <img src={emailIcon} alt="E-Mail Icon" />
        </div>
        </section>
    </div>
  );
}

export default App;
