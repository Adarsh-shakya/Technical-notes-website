import React from 'react';
import '../../Styles/Notes.css';

const JavaMethods = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">Java Methods</h1>

      <p className="note-text">
        In Java, methods are blocks of code that perform a specific task. They help in code reusability and modular programming. Methods can be predefined (built-in) or user-defined.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Defining a Method</h2>
        <pre className="note-code">
{`returnType methodName(parameters) {
  // method body
}`}
        </pre>
        <p className="note-example-title">Example:</p>
        <pre className="note-code">
{`public int add(int a, int b) {
  return a + b;
}`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Calling a Method</h2>
        <pre className="note-code">
{`int result = add(5, 3);
System.out.println(result);  // Output: 8`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Method Types</h2>
        <ul className="note-text">
          <li><strong>Predefined Methods:</strong> Already defined in Java libraries (e.g., <code>System.out.println()</code>, <code>Math.max()</code>)</li>
          <li><strong>User-defined Methods:</strong> Created by the user for specific tasks</li>
        </ul>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Method Overloading</h2>
        <p className="note-text">
          Method overloading allows multiple methods with the same name but different parameters.
        </p>
        <pre className="note-code">
{`public int add(int a, int b) {
  return a + b;
}

public double add(double a, double b) {
  return a + b;
}`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">5. Static Methods</h2>
        <p className="note-text">
          Static methods belong to the class rather than instances of the class. They can be called without creating an object.
        </p>
        <pre className="note-code">
{`public class MyClass {
  static void greet() {
    System.out.println("Hello!");
  }

  public static void main(String[] args) {
    greet(); // Calling static method
  }
}`}
        </pre>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          Methods in Java enhance code modularity and reusability. Mastering methods, including overloading and static methods, is essential for effective Java programming.
        </p>
      </div>
    </div>
  );
};

export default JavaMethods;
