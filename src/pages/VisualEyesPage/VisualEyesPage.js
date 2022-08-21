import React from 'react';
import brainstationIcon from '../../assets/icons/brainstation.svg';
import nameLogo from '../../assets/icons/nameLogo.svg'
import VisualEye from '../../components/NavBar/VisualEye/VisualEye';
import visualEyesLogo from '../../assets/icons/visualeyesspectrum.svg'
import './VisualEyesPage.scss'
import toneJSIcon from '../../assets/icons/tone.svg'
import reactIcon from '../../assets/icons/react.svg'


const VisualEyesPage = (props) => {
    return (
        <div className="projects__vs">
        {/* <section className="projects__vs-section" id="projects"> */}
            <div className="projects__container projects__container--audiovisuality">
                <div className="projects__wrapper">
                    <a href="https://visual-eyes-pi.vercel.app/" target="blank" className="projects__logo-link" ><img src={visualEyesLogo} alt="VisualEyes Logo" className="projects__vs-visualeyes-logo" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="zoom-in-out" data-aos-once="true" /></a>
                    <h1 className="projects__header" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">BrainStation Capstone Project</h1>
                    <h2 className="projects__sub-header" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" >Audiovisualizing Music Production</h2>
                    <p className="projects__vs-information" data-aos="fade-up" data-aos-offset="150" data-aos-delay="500" data-aos-duration="750" data-aos-once="true">Music production has been a hobby of mine for over a decade. When I get into a state of flow during production, I think about how my sounds would interact with a live stage. However, in wanting to conceptualize those thoughts, I realized there's a bit of a learning curve. Audiovisual tools that connect an artist's music to visual feedback has some gray area. I could work on my own animations using Adobe After Effects and synchronize them manually, or learn light control softwares, but I wanted something that reacts directly to the rhythms and sounds that are produced within the application.</p>
                    <div className="projects__responsive-box">
                    <p className="projects__vs-information" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" data-aos-offset="50" data-aos-once="true"><span className="projects--bold-text">That's where VisualEyes comes in.</span> Rather than having the music and visual production separate, VisualEyes combines the two together with interactive visual elements that respond to steps that the user inputs. Using VisualEyes, the user can see the music that they're making, which in turn creates an audiovisual workflow to music production.</p>
                    </div>
                </div>
            </div>
        {/* </section> */}
            <div className="projects__container projects__container--how-it-works">
                <div className="projects__wrapper">
                <h2 className="projects__sub-header" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" >How It Works</h2>
                <div className="projects__icons" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">
                    <img className="projects__icon" src={reactIcon} alt="React Icon" />
                    <img className="projects__icon" src={toneJSIcon} alt="ToneJS icon" />
                </div>
                <p className="projects__vs-information" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" >The main powerhouses that bring VisualEyes to life are React and ToneJS. React is a JavaScript library that allows for declarative, component-based development for single page applications. ToneJS is a Web Audio framework that allows for synthesizers and music samples to be played within a browser, and can also control things like tempo synchronization, volume, oscillators and envelopes.</p>
                <p className="projects__vs-information" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" >Each sequencer has a bunch of little nodes, known as steps, that play a sound or note when the step is selected. The application loops over 32 steps across three sequencers: drum, lead synth, and bass synth.</p>
                <p className="projects__vs-information" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" >The drum sequencer interacts directly with the eye. For example, when a kick step is selected, the eye will pulse for the duration of the step. When an open hat step is selected, a bit of colour seeps out of the eye. I'm thinking of ways to apply clap and hi-hat visual functionality currently, these features will come soon. <a href="https://github.com/karst-larsen/VisualEyes" target="blank" className="projects__page-link">Feel free to contribute to the open source project with your ideas 🤖</a></p>
                <p className="projects__vs-information" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" >The lead and bass synth sequencers interact with respective panels that act as elements that would appear on a stage. Each synth sequencer has an octave of steps from C3 to C4. What really makes this application pop is the relation of colour to notes that are selected from the user. Each note has a colour pairing:</p>
                <div className="projects__colour-container" data-aos="zoom-in" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">C</span>
                        <div className="projects__colour projects__colour--C"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">C#</span>
                        <div className="projects__colour projects__colour--Csharp"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">D</span>
                        <div className="projects__colour projects__colour--D"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">D#</span>
                        <div className="projects__colour projects__colour--Dsharp"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">E</span>
                        <div className="projects__colour projects__colour--E"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">F</span>
                        <div className="projects__colour projects__colour--F"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">F#</span>
                        <div className="projects__colour projects__colour--Fsharp"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">G</span>
                        <div className="projects__colour projects__colour--G"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">G#</span>
                        <div className="projects__colour projects__colour--Gsharp"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">A</span>
                        <div className="projects__colour projects__colour--A"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">A#</span>
                        <div className="projects__colour projects__colour--Asharp"></div>
                    </div>
                    <div className="projects__colour-box">
                        <span className="projects__colour-note">B</span>
                        <div className="projects__colour projects__colour--B"></div>
                    </div>
                </div>
                <p className="projects__vs-information" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Once the lead and bass synths are filled with a sequence, it can be really fun seeing how the colours interact rhythmically and visually, or even how scales have different colour moods. Think of it as synaesthesia!</p>
                <p className="projects__vs-information" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Finally, I've programmed ADSR envelopes for the lead and bass synths, which shape how the sound is synthesized. It also affects how the panels display visual information. The attack envelope causes a blurring effect when the envelope is opened, and the release envelope dictates how long the colour is displayed before fading away.</p>
                </div>
            </div>
                <div className="projects__container projects__container--next">
                    <div className="projects__wrapper">
                        <h2 className="projects__sub-header" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">What's next?</h2>
                        <p className="projects__vs-information" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">We had two weeks to complete this assignment at BrainStation, however there's a lot of features that I'd like to implement over time for more functional use as an artist. Here's a few that I think would give the most impact:</p>
                        <ul className="projects__improvements">
                            <li className="projects__improvement" data-aos="fade-right" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Sequence Swapping, Clearing, Randomization
                                <ul ul className="projects__improvements-item">
                                <li className="projects__improvement-item">The user can select a new sequence template, clear the template, or randomize a sequence. This would allow for more useability, faster ideation, inspiration, and overall variation.</li>
                                </ul>
                            </li>
                            <li className="projects__improvement" data-aos="fade-right" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">Sample Change, User Sample Upload
                                <ul ul className="projects__improvements-item">
                                    <li className="projects__improvement-item">There's currently only one sample per sequencer available to the user. Letting the user change the oscillator of each synthesizer, change the sample on each drum sequencer, or upload their own, would allow for more personalization in each project.</li>
                                </ul>
                            </li>
                            <li className="projects__improvement" data-aos="fade-right" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">User Save State, Account Creation
                                <ul className="projects__improvements-item">
                                    <li className="projects__improvement-item">There is currently no save state for projects. When the page is uploaded, the application is cleared. Having browser storage or account creation would allow the user to save projects, return to old ideas, and potentially share their work with other users.</li></ul>
                            </li>
                        </ul>
                        <p className="projects__vs-information" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">I think the biggest impact with this idea would be DAW integration with VisualEyes as a standalone plugin where the application interacts directly with MIDI inputs. That's currently beyond my scope, but as I continue to grow as a developer I hope to get closer to seeing that vision through to the end!</p>
                        <p className="projects__vs-information" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true">You can check out the <a href="https://visual-eyes-pi.vercel.app/" className="projects__page-link" target="blank">live version of VisualEyes</a>, check out the <a href="https://github.com/karst-larsen/VisualEyes" className="projects__page-link" target="blank">GitHub repo</a>, or <a href="mailto:karsten.oneill@hotmail.ca" className="projects__page-link">send me a message</a> for ways that you think it can be improved.</p>
                    </div>
                </div>
        </div>
    );
}

export default VisualEyesPage;