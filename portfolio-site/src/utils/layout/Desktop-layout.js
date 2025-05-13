import '../../App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Local imports
import Splash from '../../pages/Splash.js';
import Design from '../../pages/Design.js';
import About from '../../pages/About.js';
import Code from '../../pages/Code.js';
import Other from '../../pages/Other.js';
import ProjectPage from '../../pages/Project-page.js';
import ArtPage from '../../pages/Art-page.js';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Splash />} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />
        <Route path="/code" element={<Code />} />
        <Route path="/other" element={<Other />} />
        <Route path="/projects/:projectName" element={<ProjectPage />} />
        <Route path="/art/:projectName" element={<ArtPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function DesktopLayout() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default DesktopLayout;