import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import Gallery from "../Components/Gallery.jsx";

const GalleryPage = () => {
  return (
    <>
      <Header />
      
      <Breadcrumb 
        title="Gallery" 
        description="IMA-AMS Photo Gallery" 
      />

      <Gallery />
      <Footer />
    </>
  );
};

export default GalleryPage;
