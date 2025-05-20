import '../../Styles/Notes.css';

const CSSSelectors = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">CSS Selectors</h1>

      <p className="note-text">
        CSS selectors are used to select the HTML elements you want to style. They can be simple or complex, depending on how specific you need to be when targeting elements.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Types of CSS Selectors</h2>

        <div className="content-block">
          <h3 className="note-subheading">1.1 Universal Selector</h3>
          <p className="note-text">
            The universal selector (<code>*</code>) targets all elements in the document.
          </p>
          <pre className="note-code">
{`* {
  color: blue;
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.2 Type Selector (Element Selector)</h3>
          <p className="note-text">
            The type selector (e.g., <code>p</code>, <code>h1</code>) targets elements by their tag name.
          </p>
          <pre className="note-code">
{`p {
  color: red;
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.3 Class Selector</h3>
          <p className="note-text">
            The class selector (<code>.<strong>class-name</strong></code>) targets elements with a specific class attribute.
          </p>
          <pre className="note-code">
{`.highlight {
  background-color: yellow;
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.4 ID Selector</h3>
          <p className="note-text">
            The ID selector (<code>#id-name</code>) targets an element with a specific ID attribute. IDs must be unique within a page.
          </p>
          <pre className="note-code">
{`#main {
  font-size: 20px;
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.5 Attribute Selector</h3>
          <p className="note-text">
            The attribute selector targets elements based on their attributes and values.
          </p>
          <pre className="note-code">
{`a[href="https://example.com"] {
  color: green;
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.6 Descendant Selector</h3>
          <p className="note-text">
            The descendant selector targets elements that are inside another element.
          </p>
          <pre className="note-code">
{`div p {
  color: blue;
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.7 Child Selector</h3>
          <p className="note-text">
            The child selector (<code>&gt;</code>) selects direct child elements of a specific parent element.
          </p>
          <pre className="note-code">
{`ul > li {
  list-style-type: square;
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.8 Pseudo-classes</h3>
          <p className="note-text">
            Pseudo-classes target elements in specific states, like when a link is hovered over.
          </p>
          <pre className="note-code">
{`a:hover {
  color: red;
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.9 Pseudo-elements</h3>
          <p className="note-text">
            Pseudo-elements are used to style parts of an element, such as its first letter or first line.
          </p>
          <pre className="note-code">
{`p::first-letter {
  font-size: 2em;
}`}
          </pre>
        </div>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          CSS selectors are powerful tools that enable you to target and style elements in a flexible and efficient manner. By combining different types of selectors, you can create complex and responsive web designs.
        </p>
      </div>
    </div>
  );
};

export default CSSSelectors;
