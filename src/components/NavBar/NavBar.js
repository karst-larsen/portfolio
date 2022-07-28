function NavBar() {
    return (
    <div className="header">
        <div className="header__logo">
            <span>Karsten</span>
            <br />
            <span>Larsen</span>
        </div>
        <div className="header__right-header">
            <ul className="header__nav">
                <li className="header__nav-link">Home</li>
                <li className="header__nav-link">Projects</li>
                <li className="header__nav-link">Contact</li>
            </ul>
        </div>
    </div>
    );
}

export default NavBar;