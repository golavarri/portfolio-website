import React, { useState } from "react";

import '../../AppMobile.css';
import Gallery from '../../utils/GalleryMobile';
import images from '../../utils/Code-images';

const Code = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Code-page">
            <div className="Menu">
                <button className="Menu-button" onClick={toggleMenu}>
                    <img
                        className="Menu-icon"
                        src="/images/menubutton.png"
                        alt="Menu icon"
                    />
                </button>
                {menuOpen && (
                    <div className="Dropdown">
                        <button className="Close-button" onClick={toggleMenu}> &#10005; </button>
                        <div className="Dropdown-content">
                            <a href="/">
                                <img className="Home-menu" 
                                    src="/images/GO(white).png" 
                                    alt="Initials logo" 
                                />
                            </a>
                            <h2 className="Design-menu"><a href="/design">design</a></h2>
                            <h2 className="Code-menu"><a href="/code">code</a></h2>
                            <h2 className="Other-menu"><a href="/other">other</a></h2>
                            <h2 className="About-menu"><a href="/about">about</a></h2>
                        </div>
                    </div>
                )}
            </div>
            <div className="Body-content">
                <h1>code</h1>
                <h2 className="Github"><a href="https://github.com/golavarri">github &#x2197;</a></h2>
                <Gallery images={images} categories={[]} />
            </div>
        </div>
    );
};

export default Code;