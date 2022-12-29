import "../../App.scss";
import VisualEye from "../../components/VisualEye/VisualEye";
import brainstationIcon from "../../assets/icons/brainstation.svg";
import visualEyesLogo from "../../assets/icons/spectrumVisualEyes.png";
import bmoImage from "../../assets/images/bmo-image.png";
import brainFlixImage from "../../assets/images/image0.jpeg";
import brainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import bmoLogo from "../../assets/images/bmo-logo.png";
import personalIcon from "../../assets/images/personal.jpg";
import bandSiteIcon from "../../assets/images/band.jpeg";
import bandSiteLogo from "../../assets/images/Logo-bandsite.svg";
import ecomImage from "../../assets/images/ecom-image.png";
import cartPlus from "../../assets/images/CART+.png";
import biggieImage from "../../assets/images/biggie-image.png";
import biggieLogo from "../../assets/images/biggies-burgers-logo.png";
import { languagesData } from "../../assets/utils/skillsData";

const HomePage = () => {
  return (
    <>
      <section className="personal" id="personal">
        <div className="personal__responsive-container">
          <div className="personal__image-text">
            <div className="personal__header">
              <h1
                className="personal__header-line personal--bold"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Hey, <br />
                I'm Karsten Larsen
                <hr
                  className="personal__horizontal-line"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-once="true"
                />
              </h1>
              <span
                className="personal__header-subline personal__position"
                data-aos="fade-up"
                data-aos-delay="750"
                data-aos-duration="750"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                I'm a Full Stack Developer from Toronto, Ontario.
              </span>{" "}
              <br />
            </div>
            <img
              src={personalIcon}
              alt="Personal Icon"
              className="personal__image"
            />
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about__responsive-container">
          <div className="about__text-container">
            <h2 className="about__label">Creative Development</h2>
            <div className="about__information-container">
              <p className="about__information">
                I have always had a passion for creative digital hobbies;
                editing YouTube videos, producing electronic music in digital
                audio workstations, and building courses as an eLearning
                developer. I picked up JavaScript out of curiosity during the
                pandemic and felt a huge sense of reward from completing coding
                challenges and improving my understanding of the language. I
                quickly realized that programming was something more than a
                hobby to me.
              </p>
              <p className="about__information">
                I'm currently working as a Teaching Assistant for BrainStation's
                Web Development Bootcamp after completing the program and being
                nominated as a suitable candidate to help future students! It's
                been a great opportunity to revisit the material and get a
                deeper understanding of programming logic by answering student
                questions and reviewing code. Outside of my role as a Teaching
                Assistant, I am actively seeking developer roles in creative,
                experiential environments while working on side projects and
                professional development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="skills__color-wrapper">
          <div className="about__text-container about__text-container--skills">
            <div className="skills__tech-category">
              <div className="skills__technology-group">
                {languagesData.map((language) => {
                  return (
                    <a
                      key={Math.random()}
                      href={language.link}
                      target="_blank"
                      rel="noreferrer"
                      className="skills__link"
                    >
                      <div className="skills__icon-box">
                        <span className="skills__icon-label">
                          {language.name}
                        </span>
                        <img
                          className="skills__icon"
                          src={language.image}
                          alt={`${language.name} Logo`}
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="skills__text-section">
              <h2 className="skills__header">Full Stack Skill Set</h2>
              <p className="skills__sub-header">
                A collection of software and languages that I've built websites
                and applications with. I'm also eager to learn new frameworks
                and developer tools to expand my skill set! I'm currently
                breaking into 3D animation by learning Three.js.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="projects__responsive-container">
          <h2 className="projects__header">PROJECTS</h2>
          <h3 className="skills__sub-header skills__sub-header--projects">
            A selection of projects from past and present.
          </h3>
          <div className="projects__project-collection">
            <div className="projects__container">
              <div className="projects__bmo-icon-logo">
                <img
                  src={biggieImage}
                  alt="Biggie"
                  className="projects__image projects__image--brainflix"
                />
              </div>
              <div className="projects__bmo-description-links">
                <div className="projects__project-banner projects__project-banner--biggie">
                  <img
                    src={biggieLogo}
                    alt="Biggies Burgers Logo"
                    className="projects__logo--biggie"
                  />
                </div>
                <p className="projects__information">
                  A concept for a contemporary burger restaurant. Created with
                  NextJS, uses TailwindCSS for styling and GSAP for animations.
                </p>
                <div className="projects__links">
                  <a
                    href="https://biggie-psi.vercel.app/"
                    className="projects__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                  </a>
                  <a
                    href="https://github.com/karst-larsen/biggie"
                    className="projects__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="projects__stack">
                  <img
                    src={languagesData[4].image}
                    alt="React Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[5].image}
                    alt="NextJS Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[9].image}
                    alt="Tailwind Icon"
                    className="projects__stack-icon"
                  />
                </div>
              </div>
            </div>
            <div className="projects__container">
              <div className="projects__bmo-icon-logo">
                <img
                  src={ecomImage}
                  alt="Home page of Cart+"
                  className="projects__image projects__image--brainflix"
                />
              </div>
              <div className="projects__bmo-description-links">
                <div className="projects__project-banner projects__project-banner--cartplus">
                  <img
                    src={cartPlus}
                    alt="Cart+ Logo"
                    className="projects__logo--cartplus"
                  />
                </div>
                <p className="projects__information">
                  A full stack eCommerce application using MongoDB, Express,
                  React, and Node (MERN Stack). Uses Redux for state management.
                </p>
                <div className="projects__links">
                  <a
                    href="https://ecom-shop.up.railway.app/"
                    className="projects__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                  </a>
                  <a
                    href="https://github.com/karst-larsen/MERN-eCommerce"
                    className="projects__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="projects__stack">
                  <img
                    src={languagesData[13].image}
                    alt="Mongo Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[12].image}
                    alt="Express Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[4].image}
                    alt="React Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[11].image}
                    alt="Node Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[10].image}
                    alt="Bootstrap Icon"
                    className="projects__stack-icon"
                  />

                  <img
                    src={languagesData[6].image}
                    alt="Redux Icon"
                    className="projects__stack-icon"
                  />
                </div>
              </div>
            </div>
            <div className="projects__visualeyes-container">
              <div className="projects__visualeyes-icon-logo">
                <VisualEye />
              </div>
              <div className="projects__visualeyes-description-links">
                <img
                  src={visualEyesLogo}
                  alt="VisualEyes Logo"
                  className="projects__visualeyes-logo"
                />
                <p className="projects__information">
                  An interactive music UI that pairs visual effects to user
                  inputs on drum and synth sequencers.{" "}
                  <p className="red-bolded"></p>
                </p>
                <div className="projects__links">
                  <a
                    href="https://visual-eyes-pi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link"
                  >
                    Play
                  </a>
                  <a
                    href="https://github.com/karst-larsen/VisualEyes"
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link"
                  >
                    GitHub
                  </a>
                </div>
                <div className="projects__stack">
                  <img
                    src={languagesData[0].image}
                    alt="HTML Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[1].image}
                    alt="CSS Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[2].image}
                    alt="Javascript Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[3].image}
                    alt="SASS Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[4].image}
                    alt="React Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[7].image}
                    alt="ToneJS Icon"
                    className="projects__stack-icon"
                  />
                </div>
              </div>
            </div>
            <div className="projects__container">
              <div className="projects__bmo-icon-logo">
                <img
                  src={brainFlixImage}
                  alt="Action shot of BMX bikers"
                  className="projects__image projects__image--brainflix"
                />
              </div>

              <div className="projects__bmo-description-links">
                <div className="projects__project-banner projects__project-banner--brainflix">
                  <img
                    src={brainFlixLogo}
                    alt="BrainFlix Logo"
                    className="projects__logo--brainflix"
                  />
                </div>
                <p className="projects__information">
                  A full stack CRUD application, featuring a list of videos,
                  video details and comments stored on a live back end server.
                </p>
                <div className="projects__links">
                  <a
                    href="https://karsten-oneilllarsen-brainflix.vercel.app/"
                    className="projects__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                  </a>
                  <a
                    href="https://github.com/karst-larsen/karsten-oneilllarsen-brainflix"
                    className="projects__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="projects__stack">
                  <img
                    src={languagesData[3].image}
                    alt="SASS Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[4].image}
                    alt="React Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[11].image}
                    alt="Node Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[12].image}
                    alt="Express Icon"
                    className="projects__stack-icon"
                  />
                </div>
              </div>
            </div>
            <div className="projects__container">
              <div className="projects__bmo-icon-logo">
                <img
                  src={bmoImage}
                  alt="BMO Header"
                  className="projects__image"
                />
              </div>
              <div className="projects__bmo-description-links">
                <div className="projects__equation">
                  <img
                    className="projects__brainstation"
                    src={brainstationIcon}
                    alt="Brainstation Logo"
                  />
                  <span className="projects__multiply">X</span>
                  <img
                    src={bmoLogo}
                    alt="BMO Logo"
                    className="projects__bmo-logo"
                  />
                </div>
                <p className="projects__information">
                  A hackathon group challenge with a cross-functional team to
                  improve the UX for BMO's Newcomers-To-Canada page. (Mobile
                  design)
                </p>
                <div className="projects__links">
                  <a
                    href="https://bmo-hackathon-pink.vercel.app/"
                    className="projects__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                  </a>
                  <a
                    href="https://github.com/karst-larsen/industry-hackathon-deployed"
                    className="projects__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="projects__stack">
                  <img
                    src={languagesData[0].image}
                    alt="HTML Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[1].image}
                    alt="CSS Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[2].image}
                    alt="Javascript Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[3].image}
                    alt="SASS Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[4].image}
                    alt="React Icon"
                    className="projects__stack-icon"
                  />
                </div>
              </div>
            </div>
            <div className="projects__container">
              <div className="projects__bmo-icon-logo">
                <img
                  src={bandSiteIcon}
                  className="projects__bmo-image"
                  alt="BandSite group shot"
                />
              </div>
              <div className="projects__bmo-description-links">
                <div className="projects__project-banner projects__project-banner--bandsite">
                  <img
                    src={bandSiteLogo}
                    alt="Logo of Band Site"
                    className="projects__bandsite-logo"
                  />
                </div>
                <p className="projects__information">
                  A mockup of a Band Site. Uses GET, POST, PUT, and DELETE API
                  requests.
                </p>
                <div className="projects__links">
                  <a
                    href="https://karsten-oneilllarsen-bandsite.vercel.app/index.html"
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link"
                  >
                    Open
                  </a>
                  <a
                    href="https://github.com/karst-larsen/karsten-oneilllarsen-bandsite"
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link"
                  >
                    GitHub
                  </a>
                </div>
                <div className="projects__stack">
                  <img
                    src={languagesData[0].image}
                    alt="HTML Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[1].image}
                    alt="CSS Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[2].image}
                    alt="Javascript Icon"
                    className="projects__stack-icon"
                  />
                  <img
                    src={languagesData[3].image}
                    alt="SASS Icon"
                    className="projects__stack-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
