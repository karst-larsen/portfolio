import './BMOPage.scss';
import AOS from 'aos';
import brainstationIcon from '../../assets/icons/brainstation.svg';
import bmoLogo from '../../assets/images/bmo-logo.png'


function BMOPage() {   
    AOS.init();
    
    return (
        <div className="bmo">
            <div className="bmo__wrapper">
            <div className="bmo__equation">
                <img className="bmo__brainstation" src={brainstationIcon} alt="Brainstation Logo" data-aos="zoom-in" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" />
                <span className="bmo__multiply"  data-aos="zoom-in" data-aos-delay="250" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" >X</span>
                <img src={bmoLogo} alt="BMO Logo" className="bmo__logo" data-aos-delay="500" data-aos="zoom-in" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-once="true" />
            </div>
            <h1 className="bmo__header"  data-aos="zoom-in" data-aos-duration="750" data-aos-delay="750" data-aos-easing="ease-in-out" data-aos-once="true" >Hackathon Challenge</h1>
            <div className="bmo__text-content" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750" data-aos-easing="ease-in-out" data-aos-once="true" >
                <h2 className="bmo__subheader">Set-up and Task</h2>
                    <p className="bmo__information">BrainStation collaborated with BMO for a 24-hour hackathon that combined the Web Development, UX Design, and Data Science cohorts into teams for a fast-paced challenge. The task was to empower Newcomers-To-Canada (NTC) though financial literacy and digital wellbeing and provide a presentation to a panel of BMO judges with our solution. My team consisted of two web developers, two UX designers, and a data scientist.</p>
                <h2 className="bmo__subheader">Our Approach</h2>
                    <p className="bmo__information">After grouping together and conducting preliminary research about the topic, website layout, and target audience, we found that all of the resources to empower NTCs was within BMO's website itself. The major issue that was the information was hidden away and spread out through the website which may not be easily approachable for a user that is not familiar with digital technologies. Another issue we found was that the NTC page had duplicate information in sections of the NTC page which may cause confusion for someone whose native language isn't English.</p>
                    <p className="bmo__information">Our fix was twofold: first, create a Canadian Banking Basics component on the NTC page that routed the user to financial information that they may be interested in learning about, such as RRSPs, TFSAs, and other Canadian banking basics. Second, narrow down the extra information in the "Where are you in your journey?" component to keep the section clean, concise, and easy to understand.</p>
                    <p className="bmo__information">We wanted to create a fix that could be easily implemented, so we developed a mobile-first replicate mockup of the NTC page as closely as we could to help visualize how our changes would look on the actual site. Rather than reinvent the wheel with a new page, we decided that small but effective UX changes would guide NTCs in the right direction.</p>
                <h2 className="bmo__subheader">Challenges and Resolutions</h2>
                    <p className="bmo__information">Time constraint was a huge factor in this challenge. Although it was a 24-hour timeframe, as developers we had about eight hours to build our site and the new components. Fortunately, we had an amazing team of designers that came up with their personas and sketches in Figma that we utilized to begin our development phase. We started with the mobile design and worked up from there, however we ran out of time while working on the tablet design and did not get to the desktop design. When viewing, check out the mobile design first!</p>
                    <p className="bmo__information">Another challenge that was fun to resolve was working within the communicative and workflow differences between UX designer and web developer. Although we were tackling the same challenge, the language that we spoke regarding problem solving and design improvement were very different. I was introduced to <a href="https://www.toptal.com/designers/usability-testing/usability-analysis-how-to-run-a-heuristic-evaluation" className="bmo__link" target="blank">heuristic evaluation</a>, as well as website task flows that we weren't introduced to in our bootcamp program. I got to show them development tools and tricks like inspecting page elements in Chrome Dev Tools which improved their productivity as well.</p>
                    <p className="bmo__information">Ultimately there was a lot of mutual respect and understanding between our teammates, and even though we were in a high pressure environment with the hackathon's time constraints, our team worked synergistically and fed off of each other's energy. We learned a lot from each other, and overall it was a great experience working in a cross-functional collaborative environment. You can <a href="https://bmo-hackathon-pink.vercel.app/" target="blank" className="bmo__link">check out our hackathon concept</a>, view the <a href="https://github.com/karst-larsen/industry-hackathon-deployed" target="blank" className="bmo__link">GitHub project</a>, or <a href="mailto:karsten.oneill@hotmail.ca" target="blank" className="bmo__link">send me a message</a> with your thoughts on our design.</p>
            </div>
            </div>
        </div>
        )
}

export default BMOPage;