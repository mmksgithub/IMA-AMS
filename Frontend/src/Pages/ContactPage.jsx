import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import ContactUs from '../Components/ContactUs.jsx';

const ContactPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Contact" 
        description="IMA AMS Hqrs #102, IMA Building 2nd Floor,
Esamia Bazar. Koti, Hyderabad, Telangana - 500 027"      />   
<ContactUs/>
      
      <Footer/>
      
    </>
  );
};
 
export default ContactPage;
