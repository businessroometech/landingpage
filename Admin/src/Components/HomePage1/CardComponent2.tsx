import React from 'react';
import businessPitch1 from "../../assets/Pitch Deck Layout with Green Accents Stock Template.jpeg";
import businessPitch2 from "../../assets/businessmen-thumbs-up-looking-camera.jpg";

function Card({ imageSrc, style }) {
  const cardStyle = {
    width: '360px', 
    height: "500px",
    padding: '10px', // Reduce padding to avoid extra space
    borderRadius: '20px',
    backgroundColor: 'transparent',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow effect
    fontFamily: 'system-ui, -apple-system, sans-serif',
    border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Ensures image does not exceed card boundaries
  };
  const imageStyle = {
    width: '100%', // Ensures it stretches to full width
    height: '100%', // Ensures it fills the height
    objectFit: 'cover', // Keeps aspect ratio while covering the card
    borderRadius: '15px',
  };


  return (
    <div style={{ ...cardStyle, ...style }}>
    <img src={imageSrc} alt="Business Pitch" 
         style={imageStyle} />
  </div>
  );
}

function CardComponent2() {
  return (
    <>
      <div style={{ position: 'absolute', zIndex: 50, marginTop: '-108px' }}>
        <svg width="600" height="600" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="140" height="138" rx="10" ry="10"
            fill="none" stroke="black" strokeWidth="1.1" strokeDasharray="6 3">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ marginRight: '65px', marginTop: '-185px', zIndex: 100 }}>
          <Card imageSrc={businessPitch1} style={undefined} />
        </div>
        <div style={{ marginTop: '136px', zIndex: 100 }}>
          <Card imageSrc={businessPitch2} style={undefined} />
        </div>
      </div>
    </>
  );
}

export default CardComponent2;