import React from 'react';
import './MainContent.css';

const MainContent = ({ subject, subtopic }) => {
  if (!subtopic) return <div className="main-content">Select a topic...</div>;

  return (
    <div className="main-content">
      <h2>{subject} - {subtopic}</h2>
      <p>Content for {subtopic} in {subject} goes here.</p>
    </div>
  );
};

export default MainContent;
