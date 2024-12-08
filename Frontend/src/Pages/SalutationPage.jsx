import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import Salutation from '../Components/Salutation.jsx';

const SalutationPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="IMA Flag Salutation" 
        description="Members can read IMA Flag Salutation from here"      />   
<Salutation/>
      
      <Footer/>
      
    </>
  );
};
 
export default SalutationPage;
