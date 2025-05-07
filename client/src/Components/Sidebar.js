import React from 'react';
import './Sidebar.css';

const subtopics = {
  Java: [
    'Java Basics',
    'Java Flow Control',
    'Java Methods',
    'Java Arrays',
    'Java Strings',
    'Java OOPs Concepts',
    'Java Interfaces',
    'Java Collections',
    'Java Exception Handling',
    'Java Multithreading',
    'Java File Handling',
    'Java Streams and Lambda Expressions',
    'Java IO',
    'Java Synchronization',
    'Java Regex',
    'Java Networking',
    'JDBC',
    'Java Memory Allocation',
    'Java Interview Questions',
    'Java Practice Problems',
    'Java Projects',
    'Java Memory Allocation',
    'Java Interview Questions',
    'Java Practice Problems',
    'Java Projects'
  ],
  Python: ['Intro', 'Functions', 'Modules'],
  HTML: ['Intro', 'Tags', 'Forms'],
  CSS: ['Intro', 'Selectors', 'Flexbox'],
  JavaScript: ['Intro', 'ES6', 'DOM'],
};

const Sidebar = ({ selectedSubject, setSelectedSubtopic }) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">{ selectedSubject }</h3>
      <ul className="sidebar-links">
      {subtopics[selectedSubject]?.map((topic) => (
          <li key={topic} onClick={() => setSelectedSubtopic(topic)}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;



