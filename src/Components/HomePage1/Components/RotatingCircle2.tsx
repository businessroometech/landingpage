import React from "react";

const RotatingCircle = () => {
  return (
    <div
    style={{
      width: "270px",
      height: "270px",
      padding: "20px",
      borderRadius: "0px 16px 16px 16px",
      backgroundColor: "#ffffff",
      boxShadow: "0 6px 14px rgba(0, 0, 0, 0.15)",
      fontFamily: "system-ui, -apple-system, sans-serif",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <p
      style={{
        fontSize: "24px",
        color: "#252525", 
        fontWeight: "bold",
      }}
    >
      Buy/Sell <br/>Startups
    </p>
  </div>

  );
};

export default RotatingCircle;
