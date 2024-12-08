import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import Activity from '../Components/Activity.jsx';
const ActivityPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Activity Reports" 
        description="Members can download activity reports from here"      />  
<Activity/> 
      
      <Footer/>
      
    </>
  );
};
 
export default ActivityPage;
