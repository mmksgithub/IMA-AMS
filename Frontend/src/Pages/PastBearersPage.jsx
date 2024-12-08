import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import PastBearers from '../Components/PastBearers.jsx';

const PastBearersPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Past Office Bearers" 
        description="IMA-AMS Governing Council Members"      />  
<PastBearers/> 
      
      <Footer/>
      
    </>
  );
};
 
export default PastBearersPage;
