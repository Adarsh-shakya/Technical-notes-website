import React from 'react';
import '../../Styles/Notes.css';

const HTMLEditors = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">HTML Editors</h1>

      <p className="note-text">
        HTML editors are tools used to write and edit HTML code. They range from simple text editors to full-featured Integrated Development Environments (IDEs).
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Basic Text Editors</h2>
        <p className="note-text">
          You can write HTML using basic editors like:
        </p>
        <ul className="note-text">
          <li>Notepad (Windows)</li>
          <li>TextEdit (Mac)</li>
        </ul>
        <p className="note-text">
          Save the file with a <code>.html</code> extension and open it in a browser to view the result.
        </p>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Popular HTML Code Editors</h2>
        <p className="note-text">
          These editors provide syntax highlighting, code suggestions, and file management features:
        </p>
        <ul className="note-text">
          <li>Visual Studio Code (VS Code)</li>
          <li>Sublime Text</li>
          <li>Atom</li>
          <li>Brackets</li>
          <li>Notepad++</li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Online HTML Editors</h2>
        <p className="note-text">
          These allow you to write, preview, and share HTML code directly in your browser:
        </p>
        <ul className="note-text">
          <li>CodePen (<a href="https://codepen.io" target="_blank" rel="noopener noreferrer">codepen.io</a>)</li>
          <li>JSFiddle (<a href="https://jsfiddle.net" target="_blank" rel="noopener noreferrer">jsfiddle.net</a>)</li>
          <li>W3Schools Tryit Editor (<a href="https://www.w3schools.com/html/tryit.asp" target="_blank" rel="noopener noreferrer">w3schools.com</a>)</li>
        </ul>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          Choosing the right HTML editor can greatly improve productivity and ease of development. Beginners can start with simple editors and transition to advanced ones as they gain experience.
        </p>
      </div>
    </div>
  );
};

export default HTMLEditors;
