import React from 'react';
import '../../Styles/Notes.css';

const PythonFunctions = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">Python Functions</h1>

      <p className="note-text">
        Functions in Python are reusable blocks of code that perform a specific task. They help in organizing code and improving readability and reusability.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Defining a Function</h2>
        <pre className="note-code">
{`def greet():
  print("Hello, world!")`}
        </pre>
        <p className="note-text">Use the <code>def</code> keyword followed by the function name and parentheses.</p>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Calling a Function</h2>
        <pre className="note-code">
{`greet()  # Output: Hello, world!`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Function with Parameters</h2>
        <pre className="note-code">
{`def add(a, b):
  return a + b

print(add(5, 3))  # Output: 8`}
        </pre>
        <p className="note-text">Functions can accept input values called parameters.</p>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Default Parameters</h2>
        <pre className="note-code">
{`def greet(name="Guest"):
  print("Hello", name)

greet()           # Output: Hello Guest
greet("Alice")    # Output: Hello Alice`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">5. Return Statement</h2>
        <pre className="note-code">
{`def square(x):
  return x * x

result = square(4)
print(result)  # Output: 16`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">6. Lambda Functions</h2>
        <pre className="note-code">
{`square = lambda x: x * x
print(square(5))  # Output: 25`}
        </pre>
        <p className="note-text">Lambda functions are anonymous, single-line functions.</p>
      </div>

      <div className="note-section">
        <h2 className="note-heading">7. Variable-Length Arguments</h2>
        <pre className="note-code">
{`def greet_all(*names):
  for name in names:
    print("Hello", name)

greet_all("Alice", "Bob", "Charlie")`}
        </pre>
        <p className="note-text">Use <code>*args</code> for variable number of positional arguments and <code>**kwargs</code> for keyword arguments.</p>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          Functions make your code more modular, readable, and reusable. Understanding how to define and use functions, including lambda and variable-length arguments, is key to mastering Python programming.
        </p>
      </div>
    </div>
  );
};

export default PythonFunctions;
