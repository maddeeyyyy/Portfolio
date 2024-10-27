import React from 'react';

const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav_logo"><span>S</span>HUBHANGI</a>
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list grid">
                        {["Home", "About", "Skills", "Projects", "Statistics", "Contact Me"].map((item, index) => (
                            <li className="nav_item" key={index}>
                                <a href={`#${item.toLowerCase().replace(" ", "")}`} className="nav_link">
                                    <i className={`uil uil-${item.toLowerCase()} nav_icon`}></i> {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className="uil uil-times nav_close" id="nav-close"></i>
                </div>

                <div className="nav_btns">
                    <i className="uil uil-moon change-theme" id="theme-button"></i>
                    <div className="nav_toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
