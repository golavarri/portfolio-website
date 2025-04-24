import React from "react";
import images from "./utils/Code-images";
import Gallery from "./utils/Gallery";

import "./App.css";

const Code = () => {
    return (
        <div className="Code-page">
            <div className="Overlay">
                <h1 className="Design-nav"><a href="/design" style={{color: "black"}}>design</a></h1>
                <h1 className="About-nav"><a href="/about" style={{color: "black"}}>about</a></h1>
                <h1 className="Code-nav"><a href="/code" style={{color: "purple"}}>code</a></h1>
                <h2 className="Github-link"><a href="https://github.com/golavarri">github &#x2197;</a></h2>
                <h1 className="Other-nav"><a href="/other" style={{color: "black"}}>other</a></h1>
                <a href="/">
                    <img className="Home-nav" 
                         src="/images/GO.png" 
                         alt="Home" 
                    />
                </a>
            </div>
            <div className="Code-body">
                <Gallery images={images} categories={[]} />
            </div>
        </div>
    )
}

export default Code;