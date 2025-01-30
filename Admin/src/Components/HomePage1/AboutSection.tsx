import React from "react";
import { Link } from "react-router-dom";
import businessman from "../../assets/businessmen-thumbs-up-looking-camera.jpg"
import businessman2 from "../../assets/portrait-business-person-work.jpg"
import gradient from "../../assets/v960-ning-31.jpg"
import imagelogo from "../../assets/br blue.png"
import { Container, Row, Col } from "react-bootstrap";
const AboutSection: React.FC = () => {
  return (
    <>
    <div className="about1-section-area sp6" id="about"   style={{ backgroundImage: `url(${gradient})`,  }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="about-images" >
              
              <figure
              style={{height:"100%"}}
              
                className="image-anime"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <img
                  src={businessman}
                  alt="About"
                  style={{borderRadius: "300px 300px 300px 300px", width:"550px"}}
                  
                />
               
                
              </figure>
               {/* <img
                src={imagelogo}
                alt="Star"
                className="star1 keyframe5"
                style={{color: "blue", objectFit:"contain"}}
              /> */}
               
              
              
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-content-area heading2">
              <div className="arrow-circle">
                {/* <Link to="/about">
                  <img
                    src="/assets/img/elements/elements4.png"
                    alt="Element"
                    className="elements4 keyframe5"
                  />
                  <img
                    src="/assets/img/icons/arrow.svg"
                    alt="Arrow"
                    className="arrow"
                  />
                </Link> */}
              </div>
              <h2 className="text-anime-style-3" style={{fontSize:"40px", marginLeft:"25px" }}>
              Fostering connections between  co-founders and investors 
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000" style={{fontSize: "20px"}}>
              We foster meaningful connections between co-founders and investors, creating opportunities for collaboration, innovation, and long-term growth. By bridging the gap between visionary entrepreneurs and strategic investors, we empower businesses to thrive, scale, and make a lasting impact in their industries.
              </p>
              <div
                className="btn-area"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
               <Link to="/about" className="header-btn1">
                  Get Started With BusinessRoom
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link> 
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-auhtor-images">
               {/* <img
                src="/assets/img/elements/elements5.png"
                alt="Element"
                className="elements5 keyframe5"
              />  */}
              <figure
                className="image-anime"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <img
                style={{borderRadius: "200px 200px 200px 200px"}}
                  src={businessman2}
                  alt="About Author"
                />
                
              </figure>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    
    <div className="about7-section-area sp1" id="about" style={{backgroundImage: `url(${gradient})`, marginRight:"20px"}} >
    <Container >
      <Row>
        <Col lg={7} className="m-auto">
          <div className="about-header text-center heading12">
            <h5>About Us</h5>
            <h2 className="text-anime-style-3">
              Unveiling the Faces And Mission Of Our Digital Marketing Agency
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <div className="about-pera-list" >
            <h1 data-aos="fade-right" data-aos-duration="800">
            Businessroom Live
            </h1>
            <div className="space8"></div>
            <div data-aos="fade-right" data-aos-duration="1000">

              <p >

              Pitch your idea to a global community and build meaningful connections



              </p>
              {/* <ul>
                <li>
                  <img src="/assets/img/icons/check11.svg" alt="Check" />{" "}
                  Digital Marketing
                </li>
                <li>
                  <img src="/assets/img/icons/check11.svg" alt="Check" />{" "}
                  Marketing Agency
                </li>
                <li>
                  <img src="/assets/img/icons/check11.svg" alt="Check" />{" "}
                  SEO Optimization
                </li>
                <li>
                  <img src="/assets/img/icons/check11.svg" alt="Check" />{" "}
                  First Working Process
                </li>
              </ul> */}
            </div>
            <div className="space32"></div>
            <div
              className="btn-area1"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <Link to="/about" className="header-btn13">
                More About Us <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={7}>
          <div className="about-images">
            <Row>
              <Col lg={6} md={6}>
                <div className="img1">
                  <img
                    src="/assets/img/all-images/about-img7.png"
                    alt="About Image 7"
                  />
                  <div className="counter-area">
                    <h2>
                      <span className="counter">16</span>K+
                    </h2>
                    <p>Customer Satisfied</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration="1000">
                <div className="space80 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>
                <div className="img2">
                  <img
                    src="/assets/img/all-images/about-img8.png"
                    alt="About Image 8"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={2}>
          <div className="counter-boxarea">
            <Row>
              <Col lg={12} md={6} xs={6}>
                <div
                  className="counter-box"
                  data-aos="zoom-out"
                  data-aos-duration="800"
                >
                  <h1>Acquireroom</h1>
                  <h4>A no-brokerage marketplace for online business acquisitions</h4>
                  {/* {/* <h2>
                    <span className="counter">500</span>+
                  </h2> }
                  <p>Campaigns</p>
                </div>
              </Col>
              <Col lg={12} md={6} xs={6}>
                <div
                  className="counter-box"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                >
                  <h2>
                    <span className="counter">98</span>%
                  </h2>
                  <p>Client Satisfaction</p>
                </div>
              </Col>
              <Col lg={12} md={6} xs={6}>
                <div
                  className="counter-box"
                  data-aos="zoom-out"
                  data-aos-duration="1100"
                >
                  <h2>
                    <span className="counter">25</span>+
                  </h2>
                  <p>Country Reach</p> */}
                </div>
              </Col>
              <Col lg={12} md={6} xs={6}>
                <div
                  className="counter-box"
                  data-aos="zoom-out"
                  data-aos-duration="1200"
                >
                  {/* <h2>
                    <span className="counter">15</span>+
                  </h2>
                  <p>Certified Experts</p> */}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</>

  );
};

export default AboutSection;
