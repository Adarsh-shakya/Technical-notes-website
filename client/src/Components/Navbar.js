import React, { useState } from 'react';
import './Navbar.css';



const Navbar = ({setSelectedSubject}) => {

  const subjects = ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'];
  
  const [menuActive, setMenuActive] = useState(false);
  //const [activeSubject, setActiveSubject] = useState('Java');

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Technical Notes</h1>
        </div>
          <button className="navbar-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>  
        <ul className="navbar-menu" >
        {subjects.map((subject) => (
          <li key={subject} onClick={() => setSelectedSubject(subject)}>
            {subject}
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


