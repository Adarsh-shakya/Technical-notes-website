import React from 'react';
import '../../Styles/Notes.css';

const JavaFlowControl = () => {
  return (
    <div className="note-container">
      <h1 className="note-title">Java Flow Control</h1>

      <p className="note-text">
        Java Flow Control statements are used to control the flow of execution in a program. They decide how the program will proceed under certain conditions or based on loops.
      </p>

      <div className="note-section">
        <h2 className="note-heading">1. Decision-Making Statements</h2>

        <div className="content-block">
          <h3 className="note-subheading">1.1 if Statement</h3>
          <p className="note-text">Executes code block if the condition is true.</p>
          <pre className="note-code">
{`if(condition) {
  // code block
}`}
          </pre>
          <p className="note-example-title">Example:</p>
          <pre className="note-code">
{`int age = 18;
if(age >= 18) {
  System.out.println("You are eligible to vote.");
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.2 if-else Statement</h3>
          <pre className="note-code">
{`if(condition) {
  // true block
} else {
  // false block
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.3 if-else-if Ladder</h3>
          <pre className="note-code">
{`if(condition1) {
  // block1
} else if(condition2) {
  // block2
} else {
  // default block
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">1.4 switch Statement</h3>
          <pre className="note-code">
{`int day = 3;
switch(day) {
  case 1: System.out.println("Monday"); break;
  case 2: System.out.println("Tuesday"); break;
  default: System.out.println("Invalid day");
}`}
          </pre>
        </div>
      </div>

      <hr />

      <div className="note-section">
        <h2 className="note-heading">2. Looping Statements</h2>

        <div className="content-block">
          <h3 className="note-subheading">2.1 for Loop</h3>
          <pre className="note-code">
{`for(int i = 1; i <= 5; i++) {
  System.out.println(i);
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">2.2 while Loop</h3>
          <pre className="note-code">
{`int i = 1;
while(i <= 5) {
  System.out.println(i);
  i++;
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">2.3 do-while Loop</h3>
          <pre className="note-code">
{`int i = 1;
do {
  System.out.println(i);
  i++;
} while(i <= 5);`}
          </pre>
        </div>
      </div>

      <hr />

      <div className="note-section">
        <h2 className="note-heading">3. Jump Statements</h2>

        <div className="content-block">
          <h3 className="note-subheading">3.1 break Statement</h3>
          <pre className="note-code">
{`for(int i = 1; i <= 5; i++) {
  if(i == 3) break;
  System.out.println(i);
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">3.2 continue Statement</h3>
          <pre className="note-code">
{`for(int i = 1; i <= 5; i++) {
  if(i == 3) continue;
  System.out.println(i);
}`}
          </pre>
        </div>

        <div className="content-block">
          <h3 className="note-subheading">3.3 return Statement</h3>
          <pre className="note-code">
{`public static int sum(int a, int b) {
  return a + b;
}`}
          </pre>
        </div>
      </div>

      <hr />

      <div className="content-block">
        <h2 className="note-heading">Conclusion</h2>
        <p className="note-text">
          Flow control statements are crucial for making Java programs dynamic and flexible. Understanding them is fundamental for writing efficient code.
        </p>
      </div>
    </div>
  );
};

export default JavaFlowControl;

