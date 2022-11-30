import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";

const App = () => {
  AOS.init();

  return (
    <>
      <NavBar />
      <HomePage />
      <Contact />
    </>
  );
};

export default App;
