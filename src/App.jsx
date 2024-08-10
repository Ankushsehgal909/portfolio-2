// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Project';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="">
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* Add other sections here */}
      </div>
    </div>
  );
}

export default App;
