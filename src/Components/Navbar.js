import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setSidebarOpen }) => {
  const subjects = ["Java", "Python", "HTML", "CSS", "JavaScript"];
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    // if (window.innerWidth<=768){
      setSidebarOpen((prev) => !prev);
    
  };

  const location = useLocation();
  const currentSubject = location.pathname.split("/")[2]; 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1><Link to={'/'}>The Shakya</Link></h1>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
          {subjects.map((subject) => (
            <li
              key={subject}
              className={currentSubject === subject ? "active" : ""}
              onClick={() => setMenuActive(false)}
            >
              <Link to={`/subject/${subject}`}>{subject}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
