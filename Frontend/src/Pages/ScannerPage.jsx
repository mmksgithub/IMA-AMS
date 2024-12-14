import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import Scanner from '../Components/Scanner.jsx';

const ScannerPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Qr-Code" 
        description="Scan Me To Pay"      />    
    <Scanner/>
      <Footer/>
    </>
  );
};
 
export default ScannerPage;
