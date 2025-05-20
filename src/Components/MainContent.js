import { useParams } from "react-router-dom";
import "./MainContent.css";

// import Java
import JavaFlowControl from "../Pages/Java/JavaFlowControl";
import JavaBasics from "../Pages/Java/JavaBasics";
import JavaMethods from "../Pages/Java/JavaMethods";
// import Python
import PythonFundamentals from "../Pages/Python/PythonFundamentals";
import PythonFunctions from "../Pages/Python/PythonFunctions";
import PythonDataStructures from "../Pages/Python/PythonDataStructures";
// import HTML
import HTMLIntroduction from "../Pages/HTML/HTMLIntroduction";
import HTMLEditors from "../Pages/HTML/HTMLEditors";
import HTMLBasics from "../Pages/HTML/HTMLBasics";
// import CSS
import CSSIntroduction from "../Pages/CSS/CSSIntroduction";
import CSSSyntax from "../Pages/CSS/CSSSyntax";
import CSSSelectors from "../Pages/CSS/CSSSelectors";
// import JavaScript
import JavaScriptBasics from "../Pages/JavaScript/JavaScriptBasics";
import JSOperators from "../Pages/JavaScript/JSOperators";
import JSVariablesDataTypes from "../Pages/JavaScript/JSVariablesDataTypes";

const componentMap = {
  // Java
  "Java Basics": JavaBasics,
  "Java Flow Control": JavaFlowControl,
  "Java Methods": JavaMethods,
  // Python
  "Python Fundamentals": PythonFundamentals,
  "Python Functions": PythonFunctions,
  "Python Data Structures": PythonDataStructures,
  // HTML
  "HTML Introduction": HTMLIntroduction,
  "HTML Editors": HTMLEditors,
  "HTML Basics": HTMLBasics,
  // CSS
  "CSS Introduction": CSSIntroduction,
  "CSS Syntax": CSSSyntax,
  "CSS Selectors": CSSSelectors,
  // JavaScript
  "JavaScript Basics": JavaScriptBasics,
  "JS Operators": JSOperators,
  "JS Variables & Datatypes": JSVariablesDataTypes,
};

const MainContent = () => {
  const { subtopic } = useParams(); // 👈 Get subtopic from URL

  const ComponentToRender = componentMap[subtopic];

  return (
    <div className="main-content">
      {ComponentToRender ? (
        <ComponentToRender />
      ) : (
        <JavaBasics /> // Default fallback
      )}
    </div>
  );
};

export default MainContent;
