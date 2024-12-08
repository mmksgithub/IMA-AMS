import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import Login from '../Components/Login.jsx';

const LoginPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="Login's" 
        description="Welcome, Admins, to the Login Page"
   />   
<Login/> 
      <Footer/>
      
    </>
  );
};
 
export default LoginPage;
