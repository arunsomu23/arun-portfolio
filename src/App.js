import React from 'react';
import Navbar from './components/Navbar';
import WelcomeHero from './components/WelcomeHero';
import About from './components/About'
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import './assets/css/style.css';
// import './assets/css/animate.css';

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeHero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
