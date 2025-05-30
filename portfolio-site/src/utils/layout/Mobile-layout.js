// React imports
import '../../AppMobile.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Local imports
import Splash from '../../pages/mobile/SplashMobile.js';
import Design from '../../pages/mobile/DesignMobile.js';
import About from '../../pages/mobile/AboutMobile.js';
import Code from '../../pages/mobile/CodeMobile.js';
import Other from '../../pages/mobile/OtherMobile.js';
import ProjectPage from '../../pages/mobile/ProjectPageMobile.js';
import ArtPage from '../../pages/mobile/ArtPageMobile.js';
import Footer from '../../utils/Footer.js';

/*--------------------------------------------------------------------------------------------------*/

function MobileLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />
        <Route path="/code" element={<Code />} />
        <Route path="/other" element={<Other />} />
        <Route path="/projects/:projectName" element={<ProjectPage />} />
        <Route path="/art/:projectName" element={<ArtPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default MobileLayout;