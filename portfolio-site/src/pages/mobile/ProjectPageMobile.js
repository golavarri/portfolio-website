
import React, { useState } from 'react';
import '../../AppMobile.css';
import ProjectImages from '../../utils/Project-images';
import { motion, AnimatePresence } from "framer-motion";

const ProjectPage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
        
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
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
        const newIndex = images.findIndex((image) => image.category === category);
        if (newIndex !== -1) {
            setCurrentIndex(newIndex);
        }
        setDropdownOpen(false);
    };

    return (
        <div className="Projects">
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
            <div className="Project-content-m">
                <motion.h1 style={{fontSize:'2em'}}>{image_info.title}</motion.h1>
                {categories.length > 1 && (
                    <div className="Project-categories-m">
                    <button className="Category-toggle-p" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <div className="Current-category-wrapper-p">
                            <span className="Current-category-p">{images[currentIndex].category}</span>
                            <span className="Dropdown-arrow-p">&#9660;</span>
                        </div>
                    </button>
                    {dropdownOpen && (
                        <ul className="Category-dropdown-p">
                        {categories.map((category, index) => (
                            <li
                            key={index}
                            className={category === images[currentIndex].category ? 'active-category-p' : ''}
                            onClick={() => handleCategoryClick(category)}
                            >
                            {category}
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>
                )}
                <div className="Project-content">
                    <button className="Back-button-m" onClick={() => window.history.back()}>
                        &#x2715;
                    </button>
                    <div className="Project-images-m">
                        <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            href={images[currentIndex].link}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6 }}
                            className="block"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(event, info) => {
                                if (Math.abs(info.offset.x) > 50) {
                                if (info.offset.x < 0) {
                                    // Swiped left → go to next image
                                    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                                } else {
                                    // Swiped right → go to previous image
                                    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                                }
                                }
                            }}>
                            <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            loading="lazy"
                            />
                        </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <img
                    onClick={() => handleImageNavigation("left")}
                    className="Arrow-p left"
                    aria-label="Left"
                    src="/images/leftarrow.png"
                    alt="Left Arrow"
                />
                <img
                    onClick={() => handleImageNavigation("right")}
                    className="Arrow-p right"
                    aria-label="Right"
                    src="/images/rightarrow.png"
                    alt="Right Arrow"
                />
        </div>
        <div className="Project-info-m">
            <div className="Project-description-m">
                <p>{image_info.description}</p>
            </div>
        </div>
        </div>
        )
};

export default ProjectPage;