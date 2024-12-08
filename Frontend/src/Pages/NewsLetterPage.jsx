import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Breadcrumb from '../Components/Breadcrumb.jsx';
import NewsLetter from '../Components/NewsLetter.jsx';

const NewsLetterPage = () => {
  return (
    <>
    <Header/>
    <Breadcrumb 
        title="NewsLetter" 
        description="Members can download newsletters from here"      />  
<NewsLetter/> 
      
      <Footer/>
      
    </>
  );
};
 
export default NewsLetterPage;
