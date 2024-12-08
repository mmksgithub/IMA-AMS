import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import GC_Minutes from '../Components/GC_Minutes.jsx';

const GC_MinutesPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Minutes" 
        description="Members can download Governing Council Minutes from here"      />  
<GC_Minutes/> 
      
      <Footer/>
      
    </>
  );
};
 
export default GC_MinutesPage;
