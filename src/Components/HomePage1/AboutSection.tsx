import React from "react";
import { Link } from "react-router-dom";
import gradient from "../../assets/v960-ning-31.jpg";
import CardComponent3 from "./CardComponent3";
import CardComponent4 from "./CardComponent4";

const AboutSection: React.FC = () => {
  return (
    <>
      <div
        className="about1-section-area sp6"
        id="about"
        style={{
          backgroundImage: `url(${gradient})`,
          height: "120vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Big 'B' in Center */}
        <div
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
          B
        </div>

        {/* Multiple Rotating Small 'B's */}
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%) rotate(0deg)",
              fontSize: `${50 + Math.random() * 50}px`,
              fontWeight: "bold",
              color: "#3DAEF4",
              opacity: 0.08,
              zIndex: -1,
              animation: `rotateB${index} 10s linear infinite`,
            }}
          >
            B
          </div>
        ))}

        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4" style={{ marginTop: "-140px" }}>
                <div className="about-images" style={{ transform: "scale(0.8)", marginLeft: '3rem' }}>
                <CardComponent3 />
                </div>
            </div>
            <div className="col-lg-5" style={{ paddingBottom: "80px" }}>
              <div className="about-content-area heading2">
                <h2 className="text-anime-style-3" style={{ fontSize: "40px" }}>
                  Fostering connections between co-founders and investors
                </h2>
                <div className="btn-area" data-aos="fade-left" data-aos-duration="1200">
                  <Link to="/about" className="header-btn1" style={{ backgroundColor: "#3DAEF4" }}>
                    Get Started With Businessroom
                    <span>
                      <i className="fa-solid fa-arrow-right" style={{ color: "#3DAEF4" }}></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="about-auhtor-images" style={{ transform: "scale(0.8)",marginRight: '35rem' }}>
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
        {Array.from({ length: 7 }, (_, index) => `
          @keyframes rotateB${index} {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `).join("\n")}
      </style>
    </>
  );
};

export default AboutSection;
