import '../../Styles/Notes.css';

const JSVariablesDataTypes = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">JavaScript Variables & DataTypes</h1>

      <div className="note-section">
        <h2 className="note-heading">1. Variables in JavaScript</h2>
        <p className="note-text">
          Variables are containers for storing data values. JavaScript provides three keywords to declare variables:
        </p>
        <ul className="note-text">
          <li><code>var</code> – function-scoped (older, avoid using)</li>
          <li><code>let</code> – block-scoped, can be updated</li>
          <li><code>const</code> – block-scoped, cannot be updated</li>
        </ul>
        <pre className="note-code">
{`var name = "John";
let age = 25;
const country = "India";`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Rules for Naming Variables</h2>
        <ul className="note-text">
          <li>Names must begin with a letter, underscore (_), or dollar sign ($).</li>
          <li>They are case-sensitive (e.g., <code>age</code> and <code>Age</code> are different).</li>
          <li>Cannot use reserved JavaScript keywords as names.</li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. JavaScript Data Types</h2>
        <p className="note-text">JavaScript has two types of data types:</p>

        <h3 className="note-subheading">3.1 Primitive Data Types</h3>
        <ul className="note-text">
          <li><code>String</code>: Textual data → <code>"Hello"</code></li>
          <li><code>Number</code>: Integer or float → <code>100, 3.14</code></li>
          <li><code>Boolean</code>: True or false → <code>true</code></li>
          <li><code>Undefined</code>: Variable declared but not assigned a value</li>
          <li><code>Null</code>: Intentionally empty value</li>
          <li><code>BigInt</code>: Large integers</li>
          <li><code>Symbol</code>: Unique identifiers</li>
        </ul>

        <pre className="note-code">
{`let name = "Alice"; // String
let age = 30;        // Number
let isStudent = true; // Boolean
let x;               // Undefined
let y = null;        // Null`}
        </pre>

        <h3 className="note-subheading">3.2 Non-Primitive Data Types</h3>
        <ul className="note-text">
          <li><code>Object</code>: Key-value pairs</li>
          <li><code>Array</code>: Ordered collection</li>
          <li><code>Function</code>: Reusable block of code</li>
        </ul>
        <pre className="note-code">
{`let person = { name: "John", age: 30 };
let numbers = [1, 2, 3, 4];
function greet() {
  console.log("Hello!");
}`}
        </pre>
      </div>

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          Variables are fundamental in JavaScript and data types help define the kind of values we work with. Understanding both is essential to begin programming in JavaScript.
        </p>
      </div>
    </div>
  );
};

export default JSVariablesDataTypes;
