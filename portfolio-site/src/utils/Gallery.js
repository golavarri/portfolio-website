import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Gallery.css";

const Gallery = ({ images, categories, pauseDuration = 750 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titlesRef = useRef(null);

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

  const handleTitleClick = (index) => {
    setCurrentIndex(index);
    setTitleIndex(index);
  };

  const generateVisibleTitles = () => {
    const visibleCount = Math.min(5, images.length);
    const total = images.length;
  
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (currentIndex + i) % total;
      return {
        ...images[index],
        originalIndex: index,
      };
    });
  };
  

  useEffect(() => {
    if (titlesRef.current) {
      const activeTitle = titlesRef.current.querySelector(".font-bold");
      if (activeTitle) {
        activeTitle.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [titleIndex]);

  const handleTitleNavigation = (direction) => {
    const newIndex =
      direction === "up"
        ? (currentIndex - 1 + images.length) % images.length
        : (currentIndex + 1) % images.length;
  
    setTitleIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  const handleCategoryClick = (category) => {
    const index = images.findIndex((image) => image.caption === category);
    if (index !== -1) {
      setCurrentIndex(index);
      setTitleIndex(index);
    }
  };

  return (
    <div className="Gallery">
        {/* Title List */}
        <div className="Gallery-titles-wrapper">
          <button
            onClick={() => handleTitleNavigation("up")}
            className="Arrow-button up"
            aria-label="Up"
          >
            ▲
          </button>

          <div className="Gallery-titles" ref={titlesRef}>
            {generateVisibleTitles().map(({ title, originalIndex }) => (
              <div
                key={originalIndex}
                onClick={() => handleTitleClick(originalIndex)}
                className="Gallery-title"
                style={{
                  fontWeight: originalIndex === currentIndex ? "bold" : "normal",
                  color: originalIndex === currentIndex ? "black" : "gray",
                }}
              >
                {title}
              </div>
            ))}
          </div>

          <button
            onClick={() => handleTitleNavigation("down")}
            className="Arrow-button down"
            aria-label="Down"
          >
            ▼
          </button>
        </div>

        {/* Image Display */}
        <div className="Gallery-item">
          <AnimatePresence mode="wait">
            <motion.a
              key={currentIndex}
              href={images[currentIndex].link}
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
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Categories */}
        <div className="Gallery-categories">
          {categories.map((category) => (
            <span
              key={category}
              className="Gallery-category"
              onClick={() => handleCategoryClick(category)}
              style={{
                fontWeight: category === images[currentIndex].caption ? "bold" : "normal",
                color: category === images[currentIndex].caption ? "black" : "gray",
              }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
  );
};

export default Gallery;
