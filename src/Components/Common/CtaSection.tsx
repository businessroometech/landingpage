import React from "react";
import { Link } from "react-router-dom";

const CtaSection: React.FC = () => {
  return (
    <div className="cta-section-area overflow-hidden">
      <img
        src="/assets/img/bg/cta-bg1.png"
        alt=""
        className="cta-bg1 aniamtion-key-2"
      />
      <img
        src="/assets/img/bg/cta-bg2.png"
        alt=""
        className="cta-bg2 aniamtion-key-1"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="cta-header-area text-center sp4 heading2" style={{marginTop : '-50px'}}>
              <h2 className="text-anime-style-3">
              Connect, collaborate, and grow <br className="d-md-block d-none" />
               within a dynamic ecosystem 
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
              Engage with like-minded individuals, exchange innovative ideas,<br/> and build meaningful partnerships in a thriving <br className="d-md-block d-none" />
              and ever-evolving community.</p>
              
              <div
                className="btn-area text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link to="/contact" className="header-btn1">
                  Sign Up
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
