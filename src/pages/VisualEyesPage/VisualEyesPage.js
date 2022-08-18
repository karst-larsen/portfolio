import React from 'react';
import brainstationIcon from '../../assets/icons/brainstation.svg';
import nameLogo from '../../assets/icons/nameLogo.svg'
import VisualEye from '../../components/NavBar/VisualEye/VisualEye';
import visualEyesLogo from '../../assets/icons/VisualEyesLogo.svg'
import './VisualEyesPage.scss'


const VisualEyesPage = (props) => {
    return (
        <div>
            <section className="capstone" id="capstone">
          <div className="capstone__responsive-container capstone__vs-responsive-container">
            {/* <div className="capstone__equation">
              <img className="capstone__brainstation" src={brainstationIcon} alt="Brainstation Logo" data-aos="zoom-in" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true" />
              <span className="capstone__multiply" data-aos="zoom-in" data-aos-delay="750" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true">X</span>
              <img src={nameLogo} alt="Name Logo" className="capstone__name" data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in-out" data-aos-duration="750" data-aos-once="true"/>
            </div>
            <a href="https://visual-eyes-pi.vercel.app/" target="blank" data-aos="zoom-in" data-aos-delay="1250" data-aos-duration="1200" data-aos-once="true">
              <div className="capstone__visualeyes-container">
              </div>
              </a>
              <div className="capstone__links" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-offset="50">
              <a href="https://visual-eyes-pi.vercel.app/" target="blank" className="capstone__link">Play</a>
              <a href="https://github.com/karst-larsen/VisualEyes" target="blank" className="capstone__link">GitHub</a>
            </div> */}
            <a href="https://visual-eyes-pi.vercel.app/"><img src={visualEyesLogo} alt="VisualEyes Logo" className="capstone__visualeyes-logo"/></a>
            <h1 className="capstone__header" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">BrainStation Capstone Project</h1>
            <h2 className="capstone__sub-header">Audiovisuality in Music</h2>
            {/* <p className="capstone__vs-information">The visual aspect of music has become more prominent as live stage productions improve in size and quality. Combined with audiovisual media becoming more engrained as forms of entertainment, such as video games and social media, the importance of audiovisual interactivity continues to grow culturally.</p> */}
            <p className="capstone__vs-information">Music production has been a hobby of mine for over a decade. When I get into a state of flow during production, I think about how my sounds would interact with a live stage. However, in wanting to conceptualize those thoughts, I realized there's a bit of a learning curve. Audiovisual tools that connect an artist's music to visual feedback has some gray area. I could work on my own animations using Adobe After Effects and synchronize them manually, or learn light control softwares, but I wanted something that reacts directly to the rhythms and sounds that I'm creating within the digital audio workstation (DAW). </p>
            <div className="capstone__responsive-box">
            <VisualEye />
            <p className="capstone__vs-information"><span className="capstone--bold-text">That's where VisualEyes comes in.</span> Rather than having the music and visual production separate, VisualEyes combines the two together with interactive visual elements that respond to steps that the user inputs. With this application, the user can see the music that they're making, which in turn creates an audiovisual workflow to music production.</p>
            </div>
            <h2 className="capstone__sub-header">Here's how it works:</h2>
            <p className="capstone__vs-information">In the application, there's a bunch of little nodes, known as steps, that play a sound or note when the step is selected. The application loops over 32 steps across three sequencers: drum, lead synth, and bass synth.</p>
            <p className="capstone__vs-information">The drum sequencer interacts directly with the eye. For example, when a kick step is selected, you will see the eye pulse. When an open hat step is selected, a bit of colour seeps out of the eye. I'm thinking of ways to apply clap and hi-hat visual functionality currently, these features will come soon. 🤖</p>
            <p className="capstone__vs-information">The lead and bass synth sequencers interact with respective panels that act as elements that would appear on a stage. Each synth sequencer has an octave of steps from C3 to C4. What really makes this application pop is the relation of colour to notes that are selected from the user. Each note has a colour coordinated to it:</p>
            {/* Insert visual of colour coordination here */}
            <div className="capstone__colour-container">
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">C</span>
                    <div className="capstone__colour capstone__colour--C"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">C#</span>
                    <div className="capstone__colour capstone__colour--Csharp"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">D</span>
                    <div className="capstone__colour capstone__colour--D"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">D#</span>
                    <div className="capstone__colour capstone__colour--Dsharp"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">E</span>
                    <div className="capstone__colour capstone__colour--E"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">F</span>
                    <div className="capstone__colour capstone__colour--F"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">F#</span>
                    <div className="capstone__colour capstone__colour--Fsharp"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">G</span>
                    <div className="capstone__colour capstone__colour--G"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">G#</span>
                    <div className="capstone__colour capstone__colour--Gsharp"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">A</span>
                    <div className="capstone__colour capstone__colour--A"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">A#</span>
                    <div className="capstone__colour capstone__colour--Asharp"></div>
                </div>
                <div className="capstone__colour-box">
                    <span className="capstone__colour-note">B</span>
                    <div className="capstone__colour capstone__colour--B"></div>
                </div>
            </div>
            <p className="capstone__vs-information">Once the lead and bass synths are filled with a sequence, it can be really fun seeing how the colours interact rhythmically and visually. Think of it as synaesthesia!</p>
            <p className="capstone__vs-information">Finally, I've programmed ADSR envelopes for the lead and bass synth, which shape how the sound is synthesized. It also affects how the panels display visual information. The attack envelope causes a blurring effect when the envelope is opened, and the release envelope dictates how long the colour is displayed before fading away.</p>
            <h2 className="capstone__sub-header">What's next?</h2>
            <p className="capstone__vs-information">We had two weeks to complete this assignment at BrainStation, however there's a lot of functionality that I'd like to implement for more useability as an artist. Primarily, the ability to toggle between sequences for each of the sequencers, allowing for more possibilities by quick swapping melodies and rhythmic sequences.</p>
          </div>
        </section>
        </div>
    );
}

export default VisualEyesPage;