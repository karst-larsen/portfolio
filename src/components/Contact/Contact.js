
import axios from 'axios';
import { Component } from 'react'
import reactIcon from '../../assets/icons/react.svg'
import loadingIcon from  '../../assets/icons/LoadingIcon.png'
import linkedInIcon from '../../assets/icons/LinkedIn_icon.svg.png'
import emailIcon from '../../assets/icons/emailIcon.png'
import gitHubIcon from '../../assets/icons/githubIcon.png'

class Contact extends Component {

  //Holds state for form
  state = {
    name: '',
    email: '', 
    message: '',
    messageSending: false,
    messageSent: false,
    messageFail: false,
    messageName: '',
    incorrectFormat: false
  }


  fixName = (name) => {
    let newName = name.charAt(0).toUpperCase() + name.slice(1);
    return newName
  }

  //Submit function to getForm with conditions for inputs being filled
  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.email || !this.state.message ) {
      this.setState({
        incorrectFormat: true,
        messageSending: false,
        messageSent: false,
        messageFail: false
      })
      return
    }

    this.setState({
      messageSending: true,
      messageFail: false,
      messageSent: false,
      incorrectFormat: false
    })
    
    axios
    .post('https://getform.io/f/5b48e2a9-6905-4442-8c1a-4b02aabced5d', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }).then(response => {
      if (response) {
        this.setState({
          messageName: this.fixName(e.target.name.value),
          name: '',
          email: '',
          message: '',
            messageSending: false,
            messageSent: true,
            messageFail: false,
            incorrectMessage: false
          })
        }
      })
      .catch(err => {
        this.setState({
          messageFail: true,
          messageSending: false
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  render() {

    return (
        <>
        <section className="contact" id="contact">
        <div className="contact__responsive-container">
          <div className="contact__text-box">
            <h1 className="contact__cta">CONTACT</h1>
            <p className="contact__information">I'm looking to learn, grow, and write impactful code with a team of developers. For inquiries and opportunities, send me a message or reach out to my channels!</p>
          </div>
          <form onSubmit={(e) => this.handleSubmit(e)} action="https://getform.io/f/661973b9-074e-4b7a-9360-aaa19c949ccb" method="POST" className="contact__form">
            <div className="contact__input-box">
              <label htmlFor="name" className="contact__label">Name</label>
              <input onChange={(e) => this.handleChange(e)} type="text" name="name" value={this.state.name} className="contact__input"></input>
            </div>
            <div className="contact__input-box">
              <label htmlFor="email" className="contact__label">Email</label>
              <input onChange={(e) => this.handleChange(e)} type="email" name="email" value={this.state.email} className="contact__input"></input>
            </div>
            <div className="contact__input-box">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea onChange={(e) => this.handleChange(e)} name="message" value={this.state.message}  className="contact__input contact__message-input"></textarea>
            </div>
            <div className="contact__submit-box">
              <button className={`contact__button contact__button--${this.state.incorrectFormat ? 'fail' : ''}`}>Submit</button>
              <img src={loadingIcon} alt="Loading Icon" className={`contact__loading contact__loading--${this.state.messageSending ? 'true' : 'false'}`} />
            </div>
            <span className={`contact__confirmation contact__confirmation--${this.state.messageSent ? 'true' : 'false'}`}>{`Thanks ${this.state.messageName}, I've received your message. We'll be in touch!`}</span>
            <span className={`contact__error${this.state.messageFail ? '--fail' : ''}`}>Something went wrong. Please try again.</span>
            <span className={`contact__error${this.state.incorrectFormat ? '--fail' : ''}`}>Please ensure all fields are filled.</span>
          </form>
        </div>
        <div className="contact__links">
          <a href="https://www.linkedin.com/in/karsten-larsen/" className="contact__social-link" target="blank"><img src={linkedInIcon} className="contact__icon" alt="LinkedIn Icon" /></a>
          <a href="mailto:karsten.oneill@hotmail.ca" className="contact__social-link" target="blank"><img src={emailIcon} className="contact__icon" alt="LinkedIn Icon" /></a>
          <a href="https://github.com/karst-larsen"  className="contact__social-link" target="blank"><img src={gitHubIcon} className="contact__icon" alt="LinkedIn Icon" /></a>
        </div>
      </section>
        </>
    );
  }
}

export default Contact;