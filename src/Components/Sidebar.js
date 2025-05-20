import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./Sidebar.css";

const subtopics = {
  Java: [
    "Java Basics",
    "Java Flow Control",
    "Java Methods",
    "Java Arrays",
    "Java Strings",
    "Java OOPs Concepts",
    "Java Interfaces",
    "Java Collections",
    "Java Exception Handling",
    "Java Multithreading",
    "Java File Handling",
    "Java Streams and Lambda Expressions",
    "Java IO",
    "Java Synchronization",
    "Java Regex",
    "Java Networking",
    "JDBC",
    "Java Memory Allocation",
    "Java Interview Questions",
    "Java Practice Problems",
    "Java Projects",
  ],
  Python: [
    "Python Fundamentals",
    "Python Functions",
    "Python Data Structures",
    "Python OOPs Concepts",
    "Python Exception Handling",
    "File Handling in Python",
    "Python Database Handling",
    "Python Packages or Libraries",
    "Data Science with Python",
    "Web Development with Python",
  ],
  HTML: [
    "HTML Introduction",
    "HTML Editors",
    "HTML Basics",
    "HTML Comments",
    "HTML Elements",
    "HTML Attributes",
    "HTML Headings",
    "HTML Paragraphs",
    "HTML Text Formatting",
    "HTML Quotations",
    "HTML Colors",
    "HTML Links Hyperlinks",
    "HTML Images",
    "HTML Favicon",
    "HTML Tables",
    "HTML List",
    "HTML Block and Inline Elements",
    "HTML Iframes",
    "HTML File Paths",
    "HTML Layout",
    "HTML Computer Code Elements",
    "HTML5 Semantics",
    "HTML Entities",
    "HTML Symbols",
    "HTML Emojis",
    "HTML Charsets",
    "HTML URL Encoding",
    "HTML Forms",
    "HTML Responsive Web Design",
    "HTML Video",
    "HTML Examples",
    "HTML Graphics",
  ],
  CSS: [
    "CSS Introduction",
    "CSS Syntax",
    "CSS Selectors",
    "CSS Comments",
    "CSS Colors",
    "CSS Borders",
    "CSS Margins",
    "CSS Height and Width",
    "CSS Outline",
    "CSS Fonts",
    "CSS Icons",
    "CSS Links",
    "CSS Lists",
    "CSS Tables",
    "CSS Display Property",
    "CSS max-width Property",
    "CSS Positioning Elements",
    "CSS z-index Property",
    "CSS Overflow",
    "CSS Float",
    "CSS Align",
    "CSS Combinators",
    "CSS Pseudo-classes",
    "CSS Pseudo Elements",
    "CSS Opacity / Transparency",
    "CSS DropDowns",
    "CSS Image Gallery",
    "CSS Image Sprites",
    "CSS Attribute Selector",
    "CSS Counters",
    "CSS Website Layout",
    "CSS Units",
    "CSS Specificity",
    "How to apply !important in CSS?",
    "CSS Text Formatting",
    "CSS Backgrounds",
    "CSS Box model",
    "CSS Positioning Elements",
    "CSS flexbox",
    "CSS Grid Layout",
    "Responsive Web Design",
    "CSS Transitions",
    "CSS Animations",
  ],
  JavaScript: [
    "JavaScript Basics",
    "JS Variables & Datatypes",
    "JS Operators",
    "JS Statements",
    "JS Loops",
    "JS Perfomance & Debugging",
    "JS Object",
    "JS Function",
    "JS Array",
    "JS String",
    "JS Numbers",
    "JS Math",
    "JS Map",
    "JS Set",
    "JS Objects",
    "JS Advance",
    "JavaScript Exercises",
  ],
};


const Sidebar = ({ selectedSubject, isOpen, setSidebarOpen }) => {
  const { subtopic } = useParams();
  const sidebarRef = useRef(null);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setSidebarOpen]);

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3 className="sidebar-title">{selectedSubject}</h3>
      <ul className="sidebar-links">
        {subtopics[selectedSubject]?.map((topic) => (
          <li
            key={topic}
            className={subtopic === topic ? "active" : ""}
            onClick={() => setSidebarOpen(false)} // ✅ Close on topic click
          >
            <Link to={`/subject/${selectedSubject}/${topic}`}>
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
