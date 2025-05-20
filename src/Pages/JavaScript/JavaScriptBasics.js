import '../../Styles/Notes.css';

const JavaScriptBasics = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">JavaScript Basics</h1>

      <p className="note-text">
        JavaScript is a high-level, interpreted programming language that is primarily used to add interactivity and dynamic behavior to websites.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Adding JavaScript to HTML</h2>
        <p className="note-text">
          JavaScript can be added to HTML in three ways:
        </p>
        <ul className="note-text">
          <li>Inline</li>
          <li>Internal (within &lt;script&gt; tag)</li>
          <li>External (linked using a separate .js file)</li>
        </ul>
        <pre className="note-code">
{`<script>
  alert('Hello, JavaScript!');
</script>`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Output in JavaScript</h2>
        <ul className="note-text">
          <li><code>alert()</code> – Displays alert dialog</li>
          <li><code>console.log()</code> – Outputs to browser console</li>
          <li><code>document.write()</code> – Writes to HTML document</li>
        </ul>
        <pre className="note-code">
{`console.log("Hello Console");
document.write("Hello Page");
alert("Hello Alert");`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Variables in JavaScript</h2>
        <p className="note-text">Variables store data values. Use <code>let</code>, <code>const</code>, or <code>var</code>.</p>
        <pre className="note-code">
{`let name = "John";
const PI = 3.14;
var age = 25;`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Data Types</h2>
        <ul className="note-text">
          <li>String</li>
          <li>Number</li>
          <li>Boolean</li>
          <li>Undefined</li>
          <li>Null</li>
          <li>Object</li>
        </ul>
        <pre className="note-code">
{`let str = "Hello";
let num = 100;
let isTrue = true;
let x;
let y = null;`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">5. Basic Syntax</h2>
        <p className="note-text">
          JavaScript statements end with semicolons and are case-sensitive. Use curly braces <code>{`{}`}</code> to group blocks of code.
        </p>
        <pre className="note-code">
{`if (age >= 18) {
  console.log("Adult");
}`}
        </pre>
      </div>

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          JavaScript is the foundation of client-side web programming. Mastering its basics is essential to building interactive web pages.
        </p>
      </div>
    </div>
  );
};

export default JavaScriptBasics;
