import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import Annals from '../Components/Annals.jsx';
const AnnalsPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Annals" 
        description="Members can download annals from here"      />  
<Annals/> 
      
      <Footer/>
      
    </>
  );
};
 
export default AnnalsPage;
