import React from "react";
import images from "./utils/Other-images";

import "./App.css";
import Gallery from "./utils/Gallery";

const Other = () => {
    return (
        <div className="Other-page">
            <div className="Overlay">
                <h1 className="Design-nav"><a href="/design" style={{color: "black"}}>design</a></h1>
                <h1 className="About-nav"><a href="/about" style={{color: "black"}}>about</a></h1>
                <h1 className="Code-nav"><a href="/code" style={{color: "black"}}>code</a></h1>
                <h1 className="Other-nav"><a href="/other" style={{color: "purple"}}>other</a></h1>
                <a href="/">
                    <img className="Home-nav" 
                         src="/images/GO.png" 
                         alt="Home" 
                    />
                </a>
            </div>
            <div className="Other-body">
                <Gallery images={images} categories={["3D modeling", "drawing", "graphic design", "digital art"]} />
            </div>
        </div>
    )
}

export default Other;