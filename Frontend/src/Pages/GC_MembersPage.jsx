import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import GC_Members from '../Components/GC_Members.jsx';

const GC_MembersPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Governing Council Members" 
        description="IMA-AMS Governing Council Members"      />  
<GC_Members/> 
      
      <Footer/>
      
    </>
  );
};
 
export default GC_MembersPage;
