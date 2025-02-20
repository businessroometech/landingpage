import React from "react";
// import { Link } from "react-router-dom";
// import gradient from "../../assets/v960-ning-31.jpg";
import CardComponent3 from "./CardComponent3";
import CardComponent4 from "./CardComponent4";
import RotatingCircle from "./Components/RotatingCircle";
import RotatingCircle2 from "./Components/RotatingCircle2";
// import Businessroom from "../../assets/businessroom-logo.png";

const AboutSection: React.FC = () => {
  return (
    <>
      <div
        className="about1-section-area sp6"
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
        {/* Big 'B' in Center */}
        {/* <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(0deg)",
            fontSize: "300px",
            fontWeight: "bold",
            color: "#3DAEF4",
            opacity: 0.1,
            zIndex: -1,
            animation: "rotateBigB 20s linear infinite",
          }}
        >
          <Businessroom/>
        </div> */}

        {/* Multiple Rotating Small 'B's */}
        {/* {[...Array(19)].map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%) rotate(0deg)",
              fontSize: `${50 + Math.random() * 50}px`,

              color: "#3DAEF4",
              opacity: 0.08,
              zIndex: -1,
              animation: `rotateB${index} 10s linear infinite`,
            }}
          >
            B
          </div>
        ))} */}
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
            <div className="col-lg-4" style={{ marginTop: "-100px" }}>
              <div
                className="about-images"
                style={{
                  transform: "scale(0.8)",
                  marginLeft: "3rem",
                  position: "relative",
                }}
              >
                <CardComponent3 />
              

                {/* <div
                  style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "10px 10px 0px 10px",
                  width: "fit-content",
                  maxWidth: "80%",
                  padding: "8px 12px", 
                  color: "#252525",
                  fontWeight: "bold",
                  fontSize: "28px",
                  alignItems: "center",
                  alignContent:"center",
                  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                  position: "absolute",
                  top: "-10px", 
                  height:"100px",
                  left: "81%",
                  // transform: "translateX(-50%) rotate(-20deg)", 
                  minWidth: "400px",
                  marginTop:"9rem"
                  }}
                >
                  Connect with Co-Founders
                </div> */}
                <div style={{ marginLeft: "28rem", marginTop: "-5rem" }}>
                  <RotatingCircle />
                </div>
              </div>
            </div>

            {/* <div className="col-lg-5" style={{ paddingBottom: "80px" }}>
              <div className="about-content-area heading2">
                <h2 className="text-anime-style-3" style={{ fontSize: "40px" }}>
                  Fostering connections between co-founders and investors
                </h2>
                <div
                  className="btn-area"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <Link
                    to="/about"
                    className="header-btn1"
                    style={{ backgroundColor: "#3DAEF4" }}
                  >
                    Get Started With Businessroom
                    <span>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ color: "#3DAEF4" }}
                      ></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div> */}
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
    </>
  );
};

export default AboutSection;
