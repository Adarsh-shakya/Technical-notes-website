import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import '../Styles/App.css'
import MainContent from "./MainContent";
import Rightbar from "./Rightbar";

const ContentLayout = ({sidebarOpen, setSidebarOpen }) => {
  const { subject, subtopic } = useParams();

  return (
    <>
       <Sidebar 
       selectedSubject={subject} 
       isOpen={sidebarOpen} 
       setSidebarOpen={ setSidebarOpen }
       /> 
      <div className="right-content">
        <MainContent subject={subject} subtopic={subtopic || ""} />
        {/* <Rightbar /> */}
      </div>
    </>
  );
};

export default ContentLayout;
