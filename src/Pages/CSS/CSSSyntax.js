import '../../Styles/Notes.css';

const CSSSyntax = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">CSS Syntax</h1>

      <p className="note-text">
        CSS syntax is the set of rules that dictate how CSS styles are written. It consists of selectors, properties, and values.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. CSS Rule Set</h2>
        <p className="note-text">
          A CSS rule set consists of a selector, which defines which HTML element to apply styles to, and a declaration block, which contains one or more declarations.
        </p>
        <pre className="note-code">
{`selector {
  property: value;
}`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Selectors</h2>
        <p className="note-text">
          The selector targets the HTML element to apply styles. Common selectors include:
        </p>
        <ul className="note-text">
          <li><strong>Element Selector:</strong> Targets all elements of a specific type. Example: <code>p {}</code></li>
          <li><strong>Class Selector:</strong> Targets elements with a specific class. Example: <code>.class-name {}</code></li>
          <li><strong>ID Selector:</strong> Targets an element with a specific ID. Example: <code>#id-name {}</code></li>
          <li><strong>Universal Selector:</strong> Targets all elements. Example: <code>* {}</code></li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Properties and Values</h2>
        <p className="note-text">
          CSS properties define the characteristics of an element (e.g., color, font-size), and values define the settings for each property.
        </p>
        <pre className="note-code">
{`p {
  color: red;
  font-size: 18px;
}`}
        </pre>
        <p className="note-text">
          In the example above, <code>color</code> is the property, and <code>red</code> is the value. Similarly, <code>font-size</code> is a property, and <code>18px</code> is its value.
        </p>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Multiple Declarations</h2>
        <p className="note-text">
          You can write multiple declarations within a single rule set, each separated by a semicolon.
        </p>
        <pre className="note-code">
{`p {
  color: blue;
  font-size: 16px;
  text-align: center;
}`}
        </pre>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          CSS syntax is fundamental for web styling. By mastering the structure of selectors, properties, and values, you can effectively apply and manage styles across a web page.
        </p>
      </div>
    </div>
  );
};

export default CSSSyntax;
