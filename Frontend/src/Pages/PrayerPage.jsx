import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import Prayer from '../Components/Prayer.jsx';

const PrayerPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="IMA Prayer" 
        description="Members can read IMA Prayer from here"      />   
<Prayer/>      
      <Footer/>
      
    </>
  );
};
 
export default PrayerPage;
