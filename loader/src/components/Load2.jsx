import React from 'react';
import "../styles/load2.css";
import logo from "../assets/logo.svg"
import brain from "../assets/brain.png";
import cat from "../assets/cat.png";

const Load2 = () => {
    return (
        <>
            
            <div className="contain">
            <div className="log">
                    <img src={logo} alt="Logo"  /> {/* Adjust the height as needed */}
             </div>
                <div className="her">
                    <p>
                        Let’s make
                        <br /> code easy to  <br />code 
                    </p>
                    <img src={brain} alt="brain" />
                </div>
                <div className="cat">
                <img src={cat} alt="cat" />
                </div>
            </div>
         
        </>
    );
}

export default Load2;
