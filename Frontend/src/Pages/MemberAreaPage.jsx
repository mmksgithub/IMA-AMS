import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import MemberArea from '../Components/MemberArea.jsx';
import MemberData from '../Components/MemberData.jsx';


const MemberAreaPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Member Area" 
        description="IMA-AMS members can search their details here "     />   

      <MemberArea/>
      <MemberData/>
      <Footer/>
      
    </>
  );
};
 
export default MemberAreaPage;
