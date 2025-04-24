import React from "react";
import Gallery from "./utils/Gallery";
import images from "./utils/Design-images";

import "./App.css";

const Design = () => {
    return (
        <div className="Design-page">
            <div className="Overlay">
                <h1 className="Design-nav"><a href="/design" style={{color: "purple"}}>design</a></h1>
                <h1 className="About-nav"><a href="/about" style={{color: "black"}}>about</a></h1>
                <h1 className="Code-nav"><a href="/code" style={{color: "black"}}>code</a></h1>
                <h1 className="Other-nav"><a href="/other" style={{color: "black"}}>other</a></h1>
                <a href="/">
                    <img className="Home-nav" 
                         src="/images/GO.png" 
                         alt="Home"
                    />
                </a>
            </div>
            <div className="Design-body">
                <Gallery images={images} categories={[]} />
            </div>
        </div>
    )
}

export default Design;