import '../../Styles/Notes.css';

const CSSIntroduction = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">CSS Introduction</h1>

      <p className="note-text">
        CSS (Cascading Style Sheets) is used to style and layout web pages. It allows you to control the look and feel of HTML elements, including colors, fonts, spacing, positioning, and more.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Why Use CSS?</h2>
        <ul className="note-text">
          <li>Improves the appearance of web content</li>
          <li>Makes design consistent across pages</li>
          <li>Separates structure (HTML) from style (CSS)</li>
          <li>Speeds up page loading and easier maintenance</li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Types of CSS</h2>
        <ul className="note-text">
          <li><strong>Inline CSS:</strong> Applied directly inside HTML tags using the <code>style</code> attribute</li>
          <li><strong>Internal CSS:</strong> Defined in the <code>&lt;style&gt;</code> tag inside the HTML <code>&lt;head&gt;</code></li>
          <li><strong>External CSS:</strong> Linked through an external file using the <code>&lt;link&gt;</code> tag</li>
        </ul>
        <pre className="note-code">
{`<!-- External CSS -->
<link rel="stylesheet" href="styles.css" />`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. CSS Syntax</h2>
        <pre className="note-code">
{`selector {
  property: value;
}`}
        </pre>
        <p className="note-text">
          Example:
        </p>
        <pre className="note-code">
{`p {
  color: blue;
  font-size: 16px;
}`}
        </pre>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          CSS is an essential tool for web development, enabling developers to create visually appealing and responsive websites by separating design from structure.
        </p>
      </div>
    </div>
  );
};

export default CSSIntroduction;
