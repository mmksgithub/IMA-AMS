import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import Constitution from '../Components/Constitution.jsx';
import Salutation from '../Components/Salutation.jsx';

const ConstitutionPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Constitution" 
        description="Members can download constitution from here"      />  
<Constitution/> 
      
      <Footer/>
      
    </>
  );
};
 
export default ConstitutionPage;
