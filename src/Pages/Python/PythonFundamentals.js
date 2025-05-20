import React from 'react';
import '../../Styles/Notes.css';

const PythonFundamentals = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">Python Fundamentals</h1>

      <p className="note-text">
        Python is a high-level, interpreted, and general-purpose programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Python Syntax</h2>
        <p className="note-text">
          Python uses indentation to define code blocks instead of curly braces. This makes the code cleaner and more readable.
        </p>
        <pre className="note-code">
{`if 5 > 2:
  print("Five is greater than two!")`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Variables</h2>
        <p className="note-text">
          Variables in Python are created when you assign a value. Python is dynamically typed, so you don't need to declare the type.
        </p>
        <pre className="note-code">
{`x = 10
name = "Alice"
pi = 3.14`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Data Types</h2>
        <ul className="note-text">
          <li><strong>int</strong> – Integer numbers</li>
          <li><strong>float</strong> – Decimal numbers</li>
          <li><strong>str</strong> – Text</li>
          <li><strong>bool</strong> – Boolean (True or False)</li>
          <li><strong>list, tuple, set, dict</strong> – Collection types</li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Comments</h2>
        <pre className="note-code">
{`# This is a single-line comment

"""
This is a
multi-line comment
"""`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">5. Input and Output</h2>
        <pre className="note-code">
{`name = input("Enter your name: ")
print("Hello", name)`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">6. Type Casting</h2>
        <pre className="note-code">
{`x = int("5")
y = float("3.14")
z = str(100)`}
        </pre>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          Python fundamentals are easy to grasp and essential for every beginner. Understanding the basic syntax, data types, and variables is the first step toward writing Python programs.
        </p>
      </div>
    </div>
  );
};

export default PythonFundamentals;
