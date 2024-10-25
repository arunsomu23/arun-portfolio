import React from "react";

const Contact = () => {
  return (
    <section id="contact" class="contact">
      <div class="section-heading text-center">
        <h2>contact me</h2>
      </div>
      <div class="container">
        <div class="contact-content">
          <div class="row">
            <div class="col-md-offset-1 col-md-5 col-sm-6">
              <div class="single-contact-box">
                <div class="contact-form">
                  <form>
                    <div class="row">
                      <div class="col-sm-6 col-xs-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Name*"
                            name="name"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-xs-12">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Email*"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="subject"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="8"
                            id="comment"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="single-contact-btn">
                          <a class="contact-btn" href="#" role="button">
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-offset-1 col-md-5 col-sm-6">
              <div class="single-contact-box">
                <div class="contact-adress">
                  <div class="contact-add-head">
                    <h3>Arunachalam Somasundaram</h3>
                    <p>Lead Web Application Developer</p>
                  </div>
                  <div class="contact-add-info">
                    <div class="single-contact-add-info">
                      <h3>phone</h3>
                      <p>782-882-9528</p>
                    </div>
                    <div class="single-contact-add-info">
                      <h3>email</h3>
                      <p>arun.smartarun@gmail.com</p>
                    </div>
                    <div class="single-contact-add-info">
                      <h3>website</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="hm-foot-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/arunachalam-somasundaram">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
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

export default Contact;
