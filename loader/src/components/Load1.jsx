import React from 'react';
import "../styles/load1.css";
import logo from "../assets/logo.svg";
import arr from "../assets/arrow.svg";
import line from "../assets/line.svg";

const Load1 = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hero">
        <p>
          Let’s make
          <br /> code easy to <br /> code
        </p>
      </div>
       <div className="h">
        <h6 id="h" > Scroll to Explore</h6>
      </div> 
        
      <div className="arrow">
        <img src={line} alt="Line" />
        <img src={arr} alt="Arrow" />
      </div>
    </div>
  );
};

export default Load1;
