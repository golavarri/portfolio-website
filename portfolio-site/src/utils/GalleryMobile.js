import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./GalleryMobile.css";

const Gallery = ({ images, categories, pauseDuration = 750 }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
       const handleWheel = (event) => {
         if (isPaused) return;
         setIsPaused(true);
   
         setCurrentIndex((prevIndex) => {
           if (event.deltaY > 0) {
             return (prevIndex + 1) % images.length;
           } else {
             return (prevIndex - 1 + images.length) % images.length;
           }
         });
   
         setTimeout(() => setIsPaused(false), pauseDuration);
       };
   
       window.addEventListener("wheel", handleWheel, { passive: true });
       return () => window.removeEventListener("wheel", handleWheel);
     }, [isPaused, images.length, pauseDuration]);

    const handleTitleNavigation = (direction) => {
        const newIndex =
          direction === "left"
            ? (currentIndex - 1 + images.length) % images.length
            : (currentIndex + 1) % images.length;
      
        setCurrentIndex(newIndex);
    };

    const handleCategoryClick = (category) => {
        const newIndex = images.findIndex((image) => image.caption === category);
        if (newIndex !== -1) {
            setCurrentIndex(newIndex);
        }
        setDropdownOpen(false);
    };
        

    return (
        <div className="Mobile-Gallery">
            {categories.length >= 1 && (
                <div className="Gallery-categories-m">
                <button className="Category-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <div className="Current-category-wrapper">
                        <span className="Current-category-m">{images[currentIndex].caption}</span>
                        <span className="Dropdown-arrow">&#9660;</span>
                    </div>
                </button>
                {dropdownOpen && (
                    <ul className="Category-dropdown">
                    {categories.map((category, index) => (
                        <li
                        key={index}
                        className={category === images[currentIndex].caption ? 'active-category' : ''}
                        onClick={() => handleCategoryClick(category)}
                        >
                        {category}
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            )}
            <div className="Button-container-m">
                <button
                    onClick={() => handleTitleNavigation("left")}
                    className="Arrow-button-m left"
                    aria-label="Left"
                >
                    <img 
                        src="/images/leftarrow.png"
                        alt="Left Arrow"
                        className="Arrow-icon"
                    />
                </button>
                <button
                        onClick={() => handleTitleNavigation("right")}
                        className="Arrow-button-m right"
                        aria-label="Right"
                    >
                        <img 
                            src="/images/rightarrow.png"
                            alt="Right Arrow"
                            className="Arrow-icon"
                        />
                    </button>
            </div>
            <div className="Gallery-item-m">
                <AnimatePresence mode="wait">
                <motion.a
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
                    }}
                >
                        <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            loading="eager"
                          />
                    </motion.a>
                </AnimatePresence>
            </div>
            <div className="Gallery-title-container-m">
                <div className="Gallery-title-m">
                    <h2> { images[currentIndex].title } </h2>
                </div>
            </div>
        </div>
    );
};

export default Gallery;