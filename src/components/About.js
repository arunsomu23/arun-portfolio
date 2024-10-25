import React from "react";
import profileImage from '../assets/images/about/profile_image.jpg';

const About = () => {
  return (
    <section id="about" class="about">
      <div class="section-heading text-center">
        <h2>about me</h2>
      </div>
      <div class="container">
        <div class="about-content">
          <div class="row">
            <div class="col-sm-6">
              <div class="single-about-txt">
                <h3>
                  I am a Professional Lead Web/Application Developer with over
                  10+ years of experience in building responsive, dynamic web
                  applications.
                </h3>
                <p>
                  Proficient in front-end development with React, TypeScript,
                  and back-end technologies like PHP, Relational Databases and
                  Microservices. Adept at developing dynamic web applications
                  and implementing new software features. Proficient in web
                  application development, API integration, and modern DevOps
                  practices.
                </p>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="single-about-add-info">
                      <h3>phone</h3>
                      <p>+1 (782)882-9528</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="single-about-add-info">
                      <h3>email</h3>
                      <p>arun.smartarun@gmail.com</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="single-about-add-info">
                      <h3>website</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-offset-1 col-sm-5">
              <div class="single-about-img">
              <img src={profileImage} alt="profile_image" />
                <div class="about-list-icon">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/arunachalam-somasundaram">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
