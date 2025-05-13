import React from "react";
import { motion } from "framer-motion";

import "../App.css";

const pageVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
};

const About = () => {
    return (
        <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
        >
            <div className="About-page">
                <div className="Overlay">
                    <h1 className="Design-nav"><a href="/design" style={{color: "white"}}>design</a></h1>
                    <h1 className="About-nav"><a href="/about" style={{color: "white"}}>about</a></h1>
                    <h1 className="Code-nav"><a href="/code" style={{color: "white"}}>code</a></h1>
                    <h1 className="Other-nav"><a href="/other" style={{color: "white"}}>other</a></h1>
                    <a href="/">
                        <img className="Home-nav" 
                            src="/images/GO(white).png" 
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
                <div className="Portrait">
                    <img
                        src="/images/portrait1.JPG"
                        alt="Genna Olavarri"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default About;