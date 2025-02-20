import React from "react";
// import { Link } from "react-router-dom";
// import gradient from "../../assets/v960-ning-31.jpg";
import CardComponent3 from "./CardComponent3";
import CardComponent4 from "./CardComponent4";
import RotatingCircle from "./Components/RotatingCircle";
import RotatingCircle2 from "./Components/RotatingCircle2";
import { color } from "framer-motion";
// import Businessroom from "../../assets/businessroom-logo.png";


const AboutSection: React.FC = () => {

  return (
    <>

    <div>

  
      <div
        className="about1-section-area sp6  laptop-view"

        id="about"
        style={{
          // backgroundImage: `url(${gradient})`,
          backgroundColor:'white',
          height: "120vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
            <div
              style={{
              position: "absolute",
              // backgroundColor:'yellow',
              zIndex: -2,
              marginTop: "-228px",
              marginLeft: "1000px", // Reduced margin from left
              }}
            >
              <svg
              width="320"
              height="920" // Increased height
              viewBox="0 0 500 480" // Adjusted viewBox to match new height
              xmlns="http://www.w3.org/2000/svg"
              >
              <rect
                x="10"
                y="10"
                width="480"
                height="466" // Increased height
                rx="10"
                ry="10"
                fill="none"
                stroke="black"
                strokeWidth="0.6"
                strokeDasharray="6 3"
              >
                <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-20"
                dur="1s"
                repeatCount="indefinite"
                />
              </rect>
              </svg>
            </div>
      
         <div
              style={{
              position: "absolute",
              zIndex: -3,
              marginTop: "-228px",
              marginLeft: "240px", // Reduced margin from left
              }}
            >
              <svg
              width="330"
              height="1200" // Increased height
              viewBox="0 0 500 480" // Adjusted viewBox to match new height
              xmlns="http://www.w3.org/2000/svg"
              >
              <rect
                x="10"
                y="10"
                width="480"
                height="466" // Increased height
                rx="10"
                ry="10"
                fill="none"
                stroke="black"
                strokeWidth="0.6"
                strokeDasharray="6 3"
              >
                <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-20"
                dur="1s"
                repeatCount="indefinite"
                />
              </rect>
              </svg>
            </div>

        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4" style={{ marginTop: "-100px",  }}>
              <div
                className="about-images"
                style={{
                  transform: "scale(0.8)",
                  marginLeft: "3rem",
                  position: "relative",
                }}
              >
                <CardComponent3 />
              

                <div style={{ marginLeft: "28rem", marginTop: "-5rem" }}>
                  <RotatingCircle />
                </div>
              </div>
            </div>

       
            <div className="col-lg-3" style={{ position: "relative" }}>
              <div
                style={{ position: "absolute", top: "-12rem", left: "27rem" }}
              >
                <RotatingCircle2 />
              </div>
              <div
                className="about-author-images"
                style={{
                  transform: "scale(0.8)",
                  marginRight: "0",
                  marginLeft: "40rem",
                  marginTop: "4rem",
                }}
              >
                <CardComponent4 />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe Animations for Rotating 'B's */}
      <style>
        {`
          @keyframes rotateBigB {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}
        {Array.from(
          { length: 7 },
          (_, index) => `
          @keyframes rotateB${index} {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `
        ).join("\n")}
      </style>


        {/* mobile view */}
      
        <div
        className="about1-section-area sp6 mobile-view   "

        id="about"
        style={{
          // backgroundImage: `url(${gradient})`,
          backgroundColor:'white',
          height: "180vh",
          position: "relative",
          overflow: "hidden",
          marginTop: "-140px",
          // backgroundColor:'yellow',
        }}
      >


        <div  >
            <div
              style={{
              position: "absolute",
              backgroundColor:'white',
              zIndex: -2,
              marginTop: "568px",
              marginLeft: "80px", // Reduced margin from left
              
            }}
            >
              <svg
              width="290"
              height="1200" // Increased height
              viewBox="0 0 500 480" // Adjusted viewBox to match new height
              xmlns="http://www.w3.org/2000/svg"
              >
              <rect
                x="10"
                y="10"
                width="480"
                height="466" // Increased height
                rx="10"
                ry="10"
                fill="none"
                stroke="black"
                strokeWidth="0.6"
                strokeDasharray="6 3"
              >
                <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-20"
                dur="1s"
                repeatCount="indefinite"
                />
              </rect>
              </svg>
            </div>
       
       
         <div
              style={{
              position: "absolute",
              zIndex: -3,
              marginTop: "-228px",
              marginLeft: "80px", // Reduced margin from left
              }}
            >
              <svg
              width="290"
              height="1200" // Increased height
              viewBox="0 0 500 480" // Adjusted viewBox to match new height
              xmlns="http://www.w3.org/2000/svg"
              >
              <rect
                x="10"
                y="10"
                width="480"
                height="466" // Increased height
                rx="10"
                ry="10"
                fill="none"
                stroke="black"
                strokeWidth="0.6"
                strokeDasharray="6 3"
              >
                <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-20"
                dur="1s"
                repeatCount="indefinite"
                />
              </rect>
              </svg>
            </div>

        </div>

        <div className="container-fluid">
          <div className="row align-items-center">
           
        
        {/* 2 */}
    

            <div className="col-lg-4  " style={{ marginTop: "-140px", }}>
              <div
                className="about-images"
                style={{
                  transform: "scale(0.8)",
                  marginLeft: "-2rem",
                  position: "relative",
                }}
              >
                <CardComponent3 />
              

                
                <div style={{ marginLeft: "12rem", marginTop: "2rem" }}>
                  <RotatingCircle />
                </div>
              </div>
            </div>

            {/* card 2  */}

             <div className="col-lg-3" style={{ position: "relative" }}>
              <div
                style={{ position: "absolute", top: "27rem", left: "11rem" }}
              >
                <RotatingCircle2 />
              </div>
              <div
                className="about-author-images"
                style={{
                  transform: "scale(0.8)",
                  marginRight: "0",
                  marginLeft: "-2rem",
                  marginTop: "-6rem",
                }}
              >
                <CardComponent4 />
              </div>
            </div>

             
          </div>
        </div>
      </div>

      {/* Keyframe Animations for Rotating 'B's */}
      <style>
        {`
          @keyframes rotateBigB {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}
        {Array.from(
          { length: 7 },
          (_, index) => `
          @keyframes rotateB${index} {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `
        ).join("\n")}
      </style>


     

      </div>
    </>
  );
};

export default AboutSection;
