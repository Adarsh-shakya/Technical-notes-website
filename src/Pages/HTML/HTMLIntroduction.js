import React from 'react';
import '../../Styles/Notes.css';

const HTMLIntroduction = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">HTML Introduction</h1>

      <p className="note-text">
        HTML (HyperText Markup Language) is the standard markup language used to create web pages. It describes the structure of web content using elements represented by tags.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. What is HTML?</h2>
        <p className="note-text">
          HTML stands for HyperText Markup Language. It is used to structure content on the web such as text, images, videos, forms, and links.
        </p>
        <p className="note-text">
          HTML is not a programming language; it's a markup language used to define the structure of web pages.
        </p>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Basic Structure of an HTML Document</h2>
        <pre className="note-code">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Key Features of HTML</h2>
        <ul className="note-text">
          <li>HTML uses tags to define elements.</li>
          <li>Tags usually come in pairs: an opening tag and a closing tag.</li>
          <li>HTML is interpreted by web browsers.</li>
          <li>It supports embedding of images, audio, video, and scripts.</li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Commonly Used Tags</h2>
        <pre className="note-code">
{`<h1> to <h6>  // Headings
<p>             // Paragraph
<a>             // Anchor/Link
<img>           // Image
<div>           // Container
<span>          // Inline Container`}
        </pre>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          HTML is the foundation of every website. Understanding HTML is the first step toward web development, enabling you to create structured and meaningful web content.
        </p>
      </div>
    </div>
  );
};

export default HTMLIntroduction;
