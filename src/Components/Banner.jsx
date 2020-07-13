import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <div className="logo">
        <img src={require("../Assets/images/pawLogo.png")} alt="pawtastic logo"/>
      </div>
        <div className="companyName">
          Pawtastic
        </div>
    </div>
  );
};

export default Banner;