import React from "react";

import "./App.css";

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
                    I love puzzles. I love when you begin to understand what the full picture could look
                    like by testing the compatibility of constituent parts, checking whether or not components
                    will click into place. I find that that exploration, the testing and checking and piecing
                    together, is key for any innovative design process. 
                </p>
                <p>
                    For me, computer science is a puzzle-like design practice. Developing an understanding of 
                    core algorithms, data structures, and programming styles allows for the exploratory design
                    of both creative software projects and practical solutions to real-world problems. 
                </p>
                <p>
                    A curiosity about combining various techniques, skills, and tools similarly informs my other
                    design practices across mediums. I seek out an investigation, discovering what is possible by 
                    combining familiar strategies and approaches with that which I have yet to explore in order to 
                    create unique projects that push my technical, fabrication, and design capabilities. 
                </p>
                <p>
                    I am curious about opportunities to meld methods across disciplines. I like to explore 
                    possibilities at the intersection of art and technology such as emergent digital art forms, 
                    front-end user interface design, and 3D fabrication.
                </p>
            </div>
        </div>
    )
}

export default About;