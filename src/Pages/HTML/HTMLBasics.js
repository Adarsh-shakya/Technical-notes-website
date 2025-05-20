import '../../Styles/Notes.css';

const HTMLBasics = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">HTML Basics</h1>

      <p className="note-text">
        HTML is the backbone of all web pages. It uses a system of tags and elements to structure content for the web.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. HTML Tags</h2>
        <p className="note-text">
          HTML uses tags enclosed in angle brackets (e.g., <code>&lt;p&gt;</code>) to define elements. Most tags have opening and closing versions.
        </p>
        <pre className="note-code">
{`<p>This is a paragraph.</p>`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. HTML Elements</h2>
        <p className="note-text">
          An HTML element includes the start tag, content, and end tag.
        </p>
        <pre className="note-code">
{`<h1>Hello World</h1>`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Nesting of Elements</h2>
        <p className="note-text">
          HTML elements can be nested inside one another.
        </p>
        <pre className="note-code">
{`<div>
  <h2>Title</h2>
  <p>Description goes here.</p>
</div>`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Empty Elements</h2>
        <p className="note-text">
          Some HTML elements do not have closing tags and are self-closing.
        </p>
        <pre className="note-code">
{`<br />  // Line break
<img src="image.jpg" alt="Image" />`}
        </pre>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          Understanding the basics of HTML is essential to building web pages. It all begins with learning how to use tags, elements, and nesting properly.
        </p>
      </div>
    </div>
  );
};

export default HTMLBasics;
