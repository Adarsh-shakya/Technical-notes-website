import '../../Styles/Notes.css';

const JSOperators = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">JavaScript Operators</h1>

      <p className="note-text">
        Operators are symbols that perform operations on operands (variables and values). JavaScript includes many types of operators:
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Arithmetic Operators</h2>
        <ul className="note-text">
          <li><code>+</code> (Addition)</li>
          <li><code>-</code> (Subtraction)</li>
          <li><code>*</code> (Multiplication)</li>
          <li><code>/</code> (Division)</li>
          <li><code>%</code> (Modulus)</li>
          <li><code>**</code> (Exponentiation)</li>
          <li><code>++</code> (Increment)</li>
          <li><code>--</code> (Decrement)</li>
        </ul>
        <pre className="note-code">
{`let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a % b);  // 1`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Assignment Operators</h2>
        <ul className="note-text">
          <li><code>=</code></li>
          <li><code>+=</code></li>
          <li><code>-=</code></li>
          <li><code>*=</code></li>
          <li><code>/=</code></li>
          <li><code>%=</code></li>
        </ul>
        <pre className="note-code">
{`let x = 5;
x += 2;  // same as x = x + 2 → x = 7`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Comparison Operators</h2>
        <ul className="note-text">
          <li><code>==</code> (Equal to)</li>
          <li><code>===</code> (Equal value and type)</li>
          <li><code>!=</code> (Not equal)</li>
          <li><code>!==</code> (Not equal value or type)</li>
          <li><code>&gt;</code> (Greater than)</li>
          <li><code>&lt;</code> (Less than)</li>
          <li><code>&gt;=</code> (Greater than or equal to)</li>
          <li><code>&lt;=</code> (Less than or equal to)</li>
        </ul>
        <pre className="note-code">
{`console.log(5 == "5");    // true
console.log(5 === "5");   // false`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Logical Operators</h2>
        <ul className="note-text">
          <li><code>&&</code> (Logical AND)</li>
          <li><code>||</code> (Logical OR)</li>
          <li><code>!</code> (Logical NOT)</li>
        </ul>
        <pre className="note-code">
{`let age = 20;
console.log(age > 18 && age < 25);  // true`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">5. String Operators</h2>
        <p className="note-text">
          The <code>+</code> operator can also be used to concatenate (combine) strings.
        </p>
        <pre className="note-code">
{`let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);  // "John Doe"`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">6. Type Operators</h2>
        <ul className="note-text">
          <li><code>typeof</code> – Returns the type of a variable</li>
          <li><code>instanceof</code> – Returns true if an object is an instance of a specific class</li>
        </ul>
        <pre className="note-code">
{`console.log(typeof 123);         // "number"
console.log([] instanceof Array); // true`}
        </pre>
      </div>

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          JavaScript operators are essential for performing calculations, comparisons, logic, and more. Mastering them is key to building dynamic applications.
        </p>
      </div>
    </div>
  );
};

export default JSOperators;
