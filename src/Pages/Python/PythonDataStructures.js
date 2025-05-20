import React from 'react';
import '../../Styles/Notes.css';

const PythonDataStructures = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">Python Data Structures</h1>

      <p className="note-text">
        Python provides built-in data structures that are powerful and easy to use. These include lists, tuples, sets, and dictionaries, which allow efficient storage and manipulation of data.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. List</h2>
        <p className="note-text">A list is an ordered, mutable collection of items.</p>
        <pre className="note-code">
{`fruits = ["apple", "banana", "cherry"]
print(fruits[1])  # Output: banana
fruits.append("mango")`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">2. Tuple</h2>
        <p className="note-text">A tuple is an ordered, immutable collection.</p>
        <pre className="note-code">
{`coordinates = (10, 20)
print(coordinates[0])  # Output: 10`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">3. Set</h2>
        <p className="note-text">A set is an unordered collection with no duplicate elements.</p>
        <pre className="note-code">
{`unique_numbers = {1, 2, 3, 2}
print(unique_numbers)  # Output: {1, 2, 3}
unique_numbers.add(4)`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">4. Dictionary</h2>
        <p className="note-text">A dictionary stores key-value pairs.</p>
        <pre className="note-code">
{`student = {"name": "Alice", "age": 20}
print(student["name"])  # Output: Alice
student["grade"] = "A"`}
        </pre>
      </div>

      <div className="note-section">
        <h2 className="note-heading">5. Common Operations</h2>
        <pre className="note-code">
{`# Length
len(fruits)

# Membership test
"apple" in fruits

# Iteration
for item in fruits:
    print(item)`}
        </pre>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          Python's built-in data structures are versatile and form the foundation for efficient data manipulation. Mastery of lists, tuples, sets, and dictionaries is essential for Python development.
        </p>
      </div>
    </div>
  );
};

export default PythonDataStructures;
