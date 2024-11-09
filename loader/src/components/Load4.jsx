import React from 'react';
import "../styles/load4.css";
import logo from "../assets/logo.svg";
import brain2 from "../assets/brain2.png";
import cat from "../assets/cat.png";

const Load4 = () => {
    return (
        <>
            
            <div className="conta">
           
                <div className="hee">
                    <p>
                    Let’s get coding 
                    </p>
                    <img src={brain2} alt="brain2" />
                </div>
                <div className="all ">
                <button>enter the website</button>
                </div>
                <div className="grou">
                    <img src={cat} alt="Bottom Left Image" />
                </div>
            </div>

        </>
    );
}

export default Load4;
