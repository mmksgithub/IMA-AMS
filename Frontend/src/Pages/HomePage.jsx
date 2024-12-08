import React from 'react';
import Header from '../Components/Header.jsx';
import Hero from '../Components/Hero.jsx';
import About from '../Components/About.jsx';
import CountSection from '../Components/CountSection.jsx';
import WhyUs from '../Components/WhyUs.jsx';
import Features from '../Components/Features.jsx';
import Courses from '../Components/Coursesmentor.jsx';
import Members from '../Components/Members.jsx';
import Footer from '../Components/Footer.jsx';
import Trainers from '../Components/Trainers.jsx';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero/>
      {/* <About/> */}
      <CountSection/>
      <WhyUs/>
      {/* <Features/> */}
      {/* <Courses/> */}
      <Members/>
      <Trainers/>
      <Footer/>
      
    </>
  );
};

export default HomePage;
