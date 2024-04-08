import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({activeTab}) => {
    const [linkNav] = useState(['Home', 'Skills', 'Projects', 'Contacts']);
    const [statusNav, changeStatusNav] = useState(null);
    const toggleNav = () => {
        changeStatusNav(statusNav === null ? 'active' : null);
    }

    
    return (
        <header>
            <div className="logo">
                <img src="/logo.png" alt="logo"/>My Portfolio
            </div>
            <nav className={statusNav}>
                {
                linkNav.map(value => (
                    <span key={value} 
                    className={activeTab === value ? 'active': ''}
                    >{value}</span>
                ))
                }
            </nav>
            <div className="icon-bar" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}

  export default NavBar;