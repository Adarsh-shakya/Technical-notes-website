import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContentLayout from "./Components/ContentLayout";
import Home from "./Components/Home/Home";


const App = () => {
  const [sidebarOpen,setSidebarOpen]= useState(false);

  return (
    <>
      <Navbar  setSidebarOpen={ setSidebarOpen }/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/subject/:subject/"
           element={
           <ContentLayout
           sidebarOpen={sidebarOpen}
           setSidebarOpen={setSidebarOpen} />
          } 
           />
          <Route path="/subject/:subject/:subtopic" 
          element={
          <ContentLayout 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
           />} 
          />
        </Routes>
      </div>
       <Footer /> 
    </>
  );
};

export default App;
