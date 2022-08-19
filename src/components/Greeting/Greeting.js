function Greeting({greeting}) {
    console.log('Greeting', greeting)
    return <span className="personal__header-subline" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="750" data-aos-easing="ease-in-out">{greeting}!</span>;
}

export default Greeting;