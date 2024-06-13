// src/App.js
import React from 'react';
import GlobalStyles from './components/styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectScope from './components/ProjectScope';
import Milestones from './components/Milestones';
import Downloads from './components/Downloads';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Home />
      <ProjectScope />
      <Milestones />
      <Downloads />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default App;
