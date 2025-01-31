import React from "react";
import StartupLanding from "./myPage";

const ServiceSection2: React.FC<{ className: string }> = ({ className }) => {
  console.log(className);
  return (
    <div className={''} style={{backgroundColor : 'white',height : '100vh',display : 'flex',alignItems : 'center',justifyContent : 'center'}} id="work">
      <StartupLanding/>
    </div>
  );
};

export default ServiceSection2;
