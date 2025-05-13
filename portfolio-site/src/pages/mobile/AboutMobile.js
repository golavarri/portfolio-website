import React, { useState } from "react";

import '../../AppMobile.css';

const About = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="About-page">
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
            <div className="About-content">
                <h1>Genna Olavarri</h1>
                <h2>golavarri@yahoo.com 
                    <br />  
                    <a href="https://www.linkedin.com/in/genevieve-olavarri/">LinkedIn</a>
                    &nbsp;  &#x2022;  &nbsp;
                    <a href="https://github.com/golavarri">GitHub</a>
                </h2>
                <div className="About-text">
                    <p><b>Genevieve (Genna) Olavarri</b> is a computer science and design and engineering student
                        at Wesleyan University. 
                    </p>

                    <hr />

                    <p>
                        Genna is an interdisciplinary computer scientist and designer compelled by the 
                        problem-solving at the core of both practices. In developing programming projects
                        she is drawn to the process of piecing together analytic solutions to complex challenges. 
                        She is likewise attracted to exploratory practices through various art and design mediums. 
                        She constantly adds to her hard skills through puzzling together unfamiliar methods and 
                        tools to develop projects that push her technical, fabrication, and design capabilities. 
                        Genna is particularly curious about digital art forms, front-end user interface design, 
                        and digital fabrication techniques and their potential as interdisciplinary applications 
                        of technology and art. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;