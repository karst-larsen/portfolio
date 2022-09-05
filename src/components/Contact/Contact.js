
import reactIcon from '../../assets/icons/react.svg'

function Contact() {
    return (
        <>
        <section className="contact" id="contact">
        <div className="contact__responsive-container">
          <div className="contact__text-box">
            <h1 className="contact__cta">CONTACT</h1>
            <p className="contact__information">I'm looking to learn, grow, and write impactful code with a team of developers.</p>
            <p className="contact__information">For inquiries and opportunities, reach out to my channels:</p>
          </div>
          <div className="contact__buttons">
              <div className="contact__links">
                <a href="https://www.linkedin.com/in/karsten-larsen/" className="contact__link" target="blank">LinkedIn</a>
                <a href="mailto:karsten.oneill@hotmail.ca" className="contact__link" target="blank">Email</a>
                <a href="https://github.com/karst-larsen" className="contact__link" target="blank">GitHub</a>
            </div>
          </div>
        </div>
      </section>
        <footer className="contact__footer">
            <span className="contact__message">Made in <img src={reactIcon} alt="React Icon" className="contact__react" /> by Karsten Larsen</span>
        </footer>
        </>
    );
}

export default Contact;