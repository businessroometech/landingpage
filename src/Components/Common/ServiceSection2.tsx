import React from "react";
import { Link } from "react-router-dom";
import StartupLanding from "./myPage";

const ServiceSection2: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={''} style={{backgroundColor : 'white',height : '100vh',display : 'flex',alignItems : 'center',justifyContent : 'center'}} id="work">
      <StartupLanding/>
    </div>
  );
};

export default ServiceSection2;
