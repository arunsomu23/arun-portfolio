import React from "react";

const Education = () => {
  return (
    <section id="education" class="education">
      <div class="section-heading text-center">
        <h2>education</h2>
      </div>
      <div class="container">
        <div class="education-horizontal-timeline">
          <div class="row">
            <div class="col-sm-4">
              <div class="single-horizontal-timeline">
                <div class="experience-time">
                  <h2>2008 - 2012</h2>
                  <h3>
                    Bachelor <span>of </span>engineering in computer science
                  </h3>
                </div>
                <div class="timeline-horizontal-border">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <span class="single-timeline-horizontal"></span>
                </div>
                <div class="timeline">
                  <div class="timeline-content">
                    <h4 class="title">Anna university</h4>
                    <h5>Chennai, India</h5>
                    <p class="description">
                      Computer Engineering is the discipline that focuses on the
                      design, installation, and maintenance of digital devices
                      and appropriate software to effectively and efficiently
                      meet the scientific, technological and administrative
                      needs of business and industry in a global economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="single-horizontal-timeline">
                <div class="experience-time">
                  <h2>2005 - 2008</h2>
                  <h3>
                    Diploma <span>in </span> Computer Science & Engineering
                  </h3>
                </div>
                <div class="timeline-horizontal-border">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <span
                    class="single-timeline-horizontal spacial-horizontal-line
									"
                  ></span>
                </div>
                <div class="timeline">
                  <div class="timeline-content">
                    <h4 class="title">Apollo Polytechnic College</h4>
                    <h5>Chennai, India</h5>
                    <p class="description">
                      A diploma in Computer engineering is attached with
                      electrical engineering and computer science to create new
                      super-computer hardware and software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
