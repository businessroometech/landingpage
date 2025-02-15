import React from "react";
import { Link } from "react-router-dom";
import businessman from "../../assets/businessmen-thumbs-up-looking-camera.jpg"
import businessman2 from "../../assets/portrait-business-person-work.jpg"
import gradient from "../../assets/v960-ning-31.jpg"
import Features from "./Components/Features";
import MyDeals from "./Components/Deals";
import ChatInterface from "./Components/Chats";
import DottedLineAnimation from "./Components/DottedLine";
import CardComponent3 from "./CardComponent3";
import CardComponent4 from "./CardComponent4";
const AboutSection: React.FC = () => {
  return (
    <>
    <div className="about1-section-area sp6" id="about" style={{ backgroundImage: `url(${gradient})`, height: '120vh' }}>
      <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-lg-4" style={{ marginTop: '-140px' }}>
            <div className="about-images" style={{ transform: 'scale(0.8)' }}>
              <CardComponent3 />
            </div>
            </div>
            <div className="col-lg-5" style={{ paddingBottom: '80px' }}>
            <div className="about-content-area heading2">
              {/* <div className="arrow-circle">
              <Link to="/about">
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
              </Link>
              </div> */}
              <h2 className="text-anime-style-3" style={{fontSize:"40px"}}>
              Fostering connections between  co-founders and investors 
              </h2>
              {/* <p data-aos="fade-left" data-aos-duration="1000" style={{fontSize: "20px"}}>
              We foster meaningful connections between co-founders and investors, creating opportunities for collaboration, innovation, and long-term growth. By bridging the gap between visionary entrepreneurs and strategic investors, we empower businesses to thrive, scale, and make a lasting impact in their industries.
              </p> */}
              <div
              className="btn-area"
              data-aos="fade-left"
              data-aos-duration="1200"
              >
               <Link to="/about" className="header-btn1" style={{backgroundColor : '#3DAEF4'}}>
                Get Started With Businessroom
                <span>
                <i className="fa-solid fa-arrow-right" style={{color : '#3DAEF4'}}></i>
                </span>
              </Link> 
              </div>
            </div>
          </div>
            <div className="col-lg-3" >
            <div className="about-auhtor-images" style={{ transform: 'scale(0.8)' }}>
               {/* <img
              src="/assets/img/elements/elements5.png"
              alt="Element"
              className="elements5 keyframe5"
              />  */}
              {/* <figure
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
              
              </figure> */}
              <CardComponent4></CardComponent4>
            </div>
            </div>
        </div>
      </div>
      
    </div>
    
    {/*.....................................................................................*/}

    {/* <div 
      style={{ backgroundColor : '#f8faff',height : '100vh',display : 'flex',flexDirection : 'column',alignItems : 'center',justifyContent : 'center'}}
    >
      {/* <img
        src="/assets/img/elements/elements1.png"
        alt=""
        className="elements1 aniamtion-key-1"
      /> 
      
      <div style={{width : '100%',height : '25%', backgroundColor : ''}}>
        <div style={{display : 'flex',alignItems : 'center',justifyContent : 'center',height : '100%'}}>
        <h2  style={{opacity: 1, visibility: "inherit",fontSize : 50,fontWeight : 'bolder',textAlign : 'center'}}>
        A no-brokerage marketplace<br/> for online business acquisitions</h2>
        </div>
      </div>
      <DottedLineAnimation/>

      <div style={{width : '100%',height : '75%',display : 'flex'}}>
          <div style={{width : '33.33333%',height : 'full',display : 'flex',justifyContent : 'center',paddingTop : '60px'}}>
            <div style={{width : '370px',marginTop : '-110px',scale : '0.80',marginLeft : '60px'}}>
             <ChatInterface/>
             <h1 style={{fontSize : 50,fontWeight : 'bolder',textAlign : 'center',marginTop : '45px',color : '#25224a'}}>Sellers</h1>
             <div style={{display : 'flex',alignItems : 'center',justifyContent : 'center'}}>
        <h2  style={{opacity: 1, visibility: "inherit",fontSize : 25,fontWeight : 'bolder',textAlign : 'center',color : '#464664',paddingTop : '20px'}}>Unlock the full potential of your exit</h2>
        </div>
            </div>
          </div>
          <div style={{width : '33.33333%',height : 'full',display : 'flex',justifyContent : 'center',paddingTop : '60px'}}>
            <div style={{width : '370px',marginTop : '-110px',scale : '0.80'}}>
              <Features />
            </div>
            
          </div>
          <div style={{width : '33.33333%',height : 'full',display : 'flex',justifyContent : 'center',paddingTop : '60px'}}>
            <div style={{width : '360px',marginTop : '-110px', scale : '0.80',marginRight : '60px'}}>
                <MyDeals/>
              <h1 style={{fontSize : 50,fontWeight : 'bolder',textAlign : 'center',marginTop : '45px',color : '#25224a'}}>Buyers</h1>
             <div style={{display : 'flex',alignItems : 'center',justifyContent : 'center'}}>
        <h2  style={{opacity: 1, visibility: "inherit",fontSize : 25,fontWeight : 'bolder',textAlign : 'center',color : '#464664',paddingTop : '20px'}}>Discover the perfect startup for you</h2>
        </div>
            </div>
          </div>
      </div>
      {/* <div style={{width : '100%',backgroundColor : 'black'}}>
        <div className="row align-items-center"style={{marginLeft:"-7%",}} >
          <div className="col-lg-6">
            <div className="header-main-content heading1" style={{marginTop : '-150px'}}>
              <h1 className="" style={{color : '#2C3E50'}} >
               Acquireroom
              </h1>
              <h4 data-aos="fade-left" data-aos-duration="1000" 
                  style={{color : '#2C3E50' ,fontSize : '1.5rem', fontWeight: '600', lineHeight : '1.6', maxWidth : '800px'}}>
                  A no-brokerage marketplace for online business acquisitions
                  <br class="d-lg-block d-none" />
                  Provides clear insights into financials, traffic, and business operations.
              </h4>
              <div
              
                className="btn-area"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                 <Link to="/contact" className="header-btn1">
                  Start Ranking Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link> 
                 <Link to="/contact" className="header-btn2">
                  Contact Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link> 
              </div>
            </div>
          </div>



          <div className="col-lg-6">
            <div className="header-images-area">
              <div className="main-images-area">
                <div className="img1" style={{height: "700px"}}>
                  

<div style={{ borderRadius:"20px", marginTop:"20px"}}>

<CardComponent2></CardComponent2>

</div>

                </div>
                
                
              </div>
            </div>
          </div>



        </div>
      </div> 
    </div>



 */}

</>

  );
};

export default AboutSection;
