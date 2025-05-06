import React from "react";

import '../App.css';
import Canvas from "../utils/Canvas";

const Splash = () => {

    return (
        <div className="App">
            <div className="Overlay">
                <h1 className="Design-nav"><a href="/design" style={{color: "black"}}>design</a></h1>
                <h1 className="About-nav"><a href="/about" style={{color: "black"}}>about</a></h1>
                <h1 className="Code-nav"><a href="/code" style={{color: "black"}}>code</a></h1>
                <h1 className="Other-nav"><a href="/other" style={{color: "black"}}>other</a></h1>
            </div>
            <div 
                className="Background"
                style={{
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <Canvas />
            </div>
        </div>
    );
};

export default Splash;
