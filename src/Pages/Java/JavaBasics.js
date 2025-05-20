import React from 'react';
import '../../Styles/Notes.css';

const JavaBasics = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">Java Basics</h1>

      <p className="note-text">
        Java is a high-level, object-oriented programming language developed by Sun Microsystems. It is widely used for building robust, secure, and platform-independent applications.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Java Features</h2>
        <ul className="note-text">
          <li>Simple and Familiar</li>
          <li>Object-Oriented</li>
          <li>Platform Independent</li>
          <li>Secure</li>
          <li>Robust</li>
          <li>Multithreaded</li>
          <li>High Performance</li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Hello World Program</h2>
        <p className="note-example-title">Example:</p>
        <pre className="note-code">
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Java Syntax</h2>
        <p className="note-text">
          Java programs are made up of classes and methods. Every application must have a `main` method, which is the entry point of the program.
        </p>
        <ul className="note-text">
          <li>Statements end with a semicolon `;`</li>
          <li>Code blocks are enclosed in `{` and `}`</li>
          <li>Java is case-sensitive</li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Data Types</h2>
        <p className="note-text">
          Java has two categories of data types:
        </p>
        <ul className="note-text">
          <li><strong>Primitive Types:</strong> int, float, double, char, boolean, byte, short, long</li>
          <li><strong>Non-Primitive Types:</strong> Strings, Arrays, Classes, Interfaces</li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">5. Variables</h2>
        <pre className="note-code">
{`int age = 25;
String name = "John";
boolean isJavaFun = true;`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">6. Operators</h2>
        <p className="note-text">Java provides several types of operators:</p>
        <ul className="note-text">
          <li>Arithmetic Operators: +, -, *, /, %</li>
          <li>Relational Operators: ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
          <li>Logical Operators: &&, ||, !</li>
          <li>Assignment Operators: =, +=, -=, *=, /=</li>
        </ul>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          Understanding Java basics is the first step to becoming a proficient Java developer. These fundamentals provide the foundation for all advanced concepts and real-world applications.
        </p>
      </div>
    </div>
  );
};

export default JavaBasics;
