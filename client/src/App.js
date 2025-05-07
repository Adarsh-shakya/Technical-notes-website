import React from 'react';
import { useState } from 'react';
import './Styles/App.css';
import Navbar from './Components/Navbar';
 import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';
import JavaFlowControl from './Pages/Java/JavaFlowControl';

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState('Java');
  const [selectedSubtopic, setSelectedSubtopic] = useState('');

  return (
    <div className="app-container">
      <Navbar setSelectedSubject={setSelectedSubject}/>
      <div className="content">
         <Sidebar
          selectedSubject={selectedSubject} 
          setSelectedSubtopic={setSelectedSubtopic}
           />  
           <MainContent 
        subject={selectedSubject} 
        subtopic={selectedSubtopic} 
      />
         {/* Content */}
      <div style={{ padding: '1rem' }}>
        <JavaFlowControl/>
      </div>
      </div>
    </div>
  );
};

export default App;


