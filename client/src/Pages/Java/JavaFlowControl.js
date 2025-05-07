import React from 'react';

const JavaFlowControl = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Java Flow Control</h1>

      <p>
        Java Flow Control statements are used to control the flow of execution in a program. They decide how the program will proceed under certain conditions or based on loops.
      </p>

      <h2>1. Decision-Making Statements</h2>

      <h3>1.1 if Statement</h3>
      <pre>
{`if(condition) {
  // code block
}`}
      </pre>
      <p><strong>Example:</strong></p>
      <pre>
{`int age = 18;
if(age >= 18) {
  System.out.println("You are eligible to vote.");
}`}
      </pre>

      <h3>1.2 if-else Statement</h3>
      <pre>
{`if(condition) {
  // true block
} else {
  // false block
}`}
      </pre>

      <h3>1.3 if-else-if Ladder</h3>
      <pre>
{`if(condition1) {
  // block1
} else if(condition2) {
  // block2
} else {
  // default block
}`}
      </pre>

      <h3>1.4 switch Statement</h3>
      <pre>
{`int day = 3;
switch(day) {
  case 1: System.out.println("Monday"); break;
  case 2: System.out.println("Tuesday"); break;
  default: System.out.println("Invalid day");
}`}
      </pre>

      <hr />

      <h2>2. Looping Statements</h2>

      <h3>2.1 for Loop</h3>
      <pre>
{`for(int i = 1; i <= 5; i++) {
  System.out.println(i);
}`}
      </pre>

      <h3>2.2 while Loop</h3>
      <pre>
{`int i = 1;
while(i <= 5) {
  System.out.println(i);
  i++;
}`}
      </pre>

      <h3>2.3 do-while Loop</h3>
      <pre>
{`int i = 1;
do {
  System.out.println(i);
  i++;
} while(i <= 5);`}
      </pre>

      <hr />

      <h2>3. Jump Statements</h2>

      <h3>3.1 break Statement</h3>
      <pre>
{`for(int i = 1; i <= 5; i++) {
  if(i == 3) break;
  System.out.println(i);
}`}
      </pre>

      <h3>3.2 continue Statement</h3>
      <pre>
{`for(int i = 1; i <= 5; i++) {
  if(i == 3) continue;
  System.out.println(i);
}`}
      </pre>

      <h3>3.3 return Statement</h3>
      <pre>
{`public static int sum(int a, int b) {
  return a + b;
}`}
      </pre>

      <hr />
      <h2>Conclusion</h2>
      <p>
        Flow control statements are crucial for making Java programs dynamic and flexible. Understanding them is fundamental for writing efficient code.
      </p>
    </div>
  );
};

export default JavaFlowControl;
