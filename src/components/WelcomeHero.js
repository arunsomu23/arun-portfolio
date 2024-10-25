import React from 'react';

import resume from '../assets/download/arunachalam_resume.pdf';

const WelcomeHero = () => {
  return (
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>Hi, I am <br /> Arunachalam <br /> Somasundaram</h2>
              <p>Web/Application Developer & UI/UX Designer</p>
              <a href={resume} target="_blank" rel="noopener noreferrer" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;
