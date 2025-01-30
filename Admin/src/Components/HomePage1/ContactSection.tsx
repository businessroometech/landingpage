import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const ContactSection: React.FC = () => {
  const options = [
    { value: "Belgium", label: "Belgium" },
    { value: "Brazil", label: "Brazil" },
    { value: "Argentina", label: "Argentina" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Germany", label: "Germany" },
  ];

  return (
    <div className="contact1-section-area sp6" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="contact-header-area text-center heading2">
              <img
                src="/assets/img/elements/star2.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="/assets/img/elements/star2.png"
                alt=""
                className="star3 keyframe5"
              />
              <h2 className="text-anime-style-3">Get In Touch With Us Today</h2>
              <p>
                We're here to help! If you have any questions or would like to
                discuss <br className="d-md-block d-none" />
                how our SEO and digital marketing services can benefit your
                business,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-5"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <div className="contact-info-area">
              <h3>Contact Info</h3>
              <p>
                We're here to help! If you have any questions or would like to
                discuss how our SEO and digital marketing services can benefit
                your business,
              </p>
              <div className="space32"></div>
              <div className="contact-author-box">
                <div className="icons">
                  <img src="/assets/img/icons/location2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <Link to="#">
                    8708 Technology Forest Pl Suite
                    <br className="d-lg-block d-none" />
                    125 -G, The Woodlands, TX 773
                  </Link>
                </div>
              </div>
              <div className="space40"></div>
              <div className="contact-author-box">
                <div className="icons">
                  <img src="/assets/img/icons/phone2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <Link to="tel:123-456-7890">
                    123-456-7890 <br />
                    123-456-7890
                  </Link>
                </div>
              </div>
              <div className="space40"></div>
              <div className="contact-author-box">
                <div className="icons">
                  <img src="/assets/img/icons/email2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <Link to="mailto:infoseoc@gmail.com">
                    infoseoc@gmail.com <br />
                    infoseoc@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7"
            data-aos="zoom-out"
            data-aos-duration="1200"
          >
            <div className="contact-boxarea">
              <h3>Get In Touch</h3>
              <p>
                We're here to help! If you have any questions or would like to
                discuss <br className="d-lg-block d-none" />
                how our SEO and digital marketing services can benefit your
                business,
              </p>
              <form action="https://api.web3forms.com/submit" method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="First Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area mt-4">
                      <Select className="country-area" options={options} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea placeholder="Your Message" required></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <button className="header-btn1">
                        Free Consultation
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
