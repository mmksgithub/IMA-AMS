import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import Courses from '../Components/Courses.jsx';

const CoursesPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Courses" 
        description="Members can download courses from here"      />  
<Courses/> 
      
      <Footer/>
      
    </>
  );
};
 
export default CoursesPage;
