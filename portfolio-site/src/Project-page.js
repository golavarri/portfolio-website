
import React, { useState, useEffect } from 'react';
import './utils/Project-page.css';
import ProjectImages from './utils/Project-images';
import { motion, AnimatePresence } from "framer-motion";

const ProjectPage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const pauseDuration = 750;
    
    // Get the project name from the URL
    const url = window.location.href;
    const urlParts = url.split("/");
    const projectName = urlParts[urlParts.length - 1];

    // Print project name to console for debugging
    if (projectName) {
        console.log("Project name:", projectName);
    } else {
        console.error("Project name not found in URL");
    }

    const project_info = ProjectImages({projectName});

    const images = project_info.images;
    const image_info = project_info.description;
    const categories = [];
    for (const image of images) {
        if (!categories.includes(image.category)) {
            categories.push(image.category);
        }
    }

    useEffect(() => {
        const handleWheel = (event) => {
          if (isPaused) return;
          setIsPaused(true);
        
          setCurrentIndex((prevIndex) => {
            if (event.deltaX > 0) {
              return (prevIndex + 1) % images.length;
            } else if (event.deltaX < 0) {
              return (prevIndex - 1 + images.length) % images.length;
            } else {
              return prevIndex;
            }
          });
        
          setTimeout(() => setIsPaused(false), pauseDuration);
        };
        
        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => window.removeEventListener("wheel", handleWheel);
          }, [isPaused, images.length, pauseDuration]);

    // Check if images exist for the project
    if (images === undefined) {
        console.error("No images found for project:", projectName);
    }

    if (!images) {
        return (
            <div className="Project-page">
                <h1>Uh oh!</h1>
                <h2> Looks like this project doesn't have a page yet.</h2>
            </div>
        )
    };

    const handleImageNavigation = (direction) => {
        const newIndex =
            direction === "left"
                ? (currentIndex - 1 + images.length) % images.length
                : (currentIndex + 1) % images.length;

        setCurrentIndex(newIndex);
    };

    const handleCategoryClick = (category) => {
        const index = images.findIndex((image) => image.category === category);
        if (index !== -1) {
          setCurrentIndex(index);
        }
    };

    return (
        <div className="Projects">
        <div className="Project-page">
            <div className="Overlay">
            <h1 className="Design-nav"><a href="/design" style={{color: "black"}}>design</a></h1>
            <h1 className="About-nav"><a href="/about" style={{color: "black"}}>about</a></h1>
            <h1 className="Code-nav"><a href="/code" style={{color: "black"}}>code</a></h1>
            <h1 className="Other-nav"><a href="/other" style={{color: "black"}}>other</a></h1>
            <a href="/">
                <img className="Home-nav" 
                 src="/images/GO.png" 
                 alt="Home" 
                 style={{
                    width: "80px",
                    height: "80px",
                    position: "absolute",
                    top: "0",
                    right: "45%"
                 }}
                />
            </a>
            </div>
            <motion.div className="Project-header" layoutId="project-title">
            <h1 className="Project-name">{image_info.title}</h1>
            </motion.div>
            <img
                onClick={() => handleImageNavigation("left")}
                className="Arrow left"
                aria-label="Left"
                src="/images/leftarrow.png"
                alt="Left Arrow"
            />
            <div className="Project-body">
                <button className="Back-button" onClick={() => window.history.back()}>
                    &#x2715;
                </button>
                <div className="Project-images">
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="block"
                    >
                        <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        />
                    </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <img
                onClick={() => handleImageNavigation("right")}
                className="Arrow right"
                aria-label="Right"
                src="/images/rightarrow.png"
                alt="Right Arrow"
            />
            <div className="Project-categories">
                {categories.map((category) => (
                <span
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    style={{
                    fontWeight: category === images[currentIndex].category ? "bold" : "normal",
                    color: category === images[currentIndex].category ? "black" : "gray",
                    }}
                >
                    {category}
                </span>
                ))}
            </div>
        </div>

        <div className="Project-info">
            <div className="Project-description">
            <p>{image_info.description}</p>
            </div>
        </div>
        </div>
        )
};

export default ProjectPage;
