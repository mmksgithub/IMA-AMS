import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import ContactUs from '../Components/ContactUs.jsx';
import Certificate from '../Components/Certificate.jsx';

const ContactPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Contact" 
        description="IMA AMS Hqrs #102, IMA Building 2nd Floor,
Esamia Bazar. Koti, Hyderabad, Telangana - 500 027"      />  
<Certificate
  recipientName="John Doe"
  date="December 10, 2024"
  logoUrl="/path/to/logo.png"
  signature1="/path/to/signature1.png"
  signature2="/path/to/signature2.png"
/>
<ContactUs/>
      
      <Footer/>
      
    </>
  );
};
 
export default ContactPage;
