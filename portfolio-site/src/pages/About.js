import React from "react";

import "../App.css";

const About = () => {
    return (
        <div className="About-page">
            <div className="Overlay">
                <h1 className="Design-nav"><a href="/design" style={{color: "black"}}>design</a></h1>
                <h1 className="About-nav"><a href="/about" style={{color: "purple"}}>about</a></h1>
                <h1 className="Code-nav"><a href="/code" style={{color: "black"}}>code</a></h1>
                <h1 className="Other-nav"><a href="/other" style={{color: "black"}}>other</a></h1>
                <a href="/">
                    <img className="Home-nav" 
                         src="/images/GO.png" 
                         alt="Home" 
                    />
                </a>
            </div>
            <div className="About-body">
                <h1>Genna Olavarri</h1>
                <h2>golavarri@yahoo.com 
                    &nbsp;  &#x2022;  &nbsp;  
                    <a href="https://www.linkedin.com/in/genevieve-olavarri/">LinkedIn</a>
                    &nbsp;  &#x2022;  &nbsp;
                    <a href="https://github.com/golavarri">GitHub</a>
                </h2>
                <p><b>Genevieve (Genna) Olavarri</b> is a computer science and design and engineering student
                    at Wesleyan University. 
                </p>

                <hr />

                <p>
                    Genna is an interdisciplinary computer scientist and designer, compelled by the problem 
                    solving at the core of both practices. In developing programming projects, she is captivated 
                    by the process of piecing together analytic solutions to complex challenges. She is likewise 
                    attracted to exploratory practices through various art and design mediums. Genna is constantly 
                    adding to her hard skills through puzzling together unfamiliar methods and tools to develop 
                    projects that push her technical, fabrication, and design capabilities. Genna is particularly 
                    curious about digital art forms, front-end user interface design, and digital fabrication 
                    techniques as possible interdisciplinary applications of technology and art. 
                </p>
            </div>
        </div>
    )
}

export default About;