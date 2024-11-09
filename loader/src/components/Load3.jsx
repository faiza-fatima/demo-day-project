import React from 'react';
import "../styles/load3.css";
import logo from "../assets/logo.svg"
import brain from "../assets/brain.png";
import cat from "../assets/cat.png";

const Load3 = () => {
    return (
        <>
            
            <div className="contai">
            <div className="lo">
                    <img src={logo} alt="Logo" className="h-10" /> {/* Adjust the height as needed */}
                </div>
                <div className="he">
                <img src={brain} alt="brain" />
                </div>
                </div>
                <div className="group">
                    <img src={cat} alt="Bottom Left Image" />
                
            </div>

        </>
    );
}

export default Load3;
