// React imports
import '../../App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Local imports
import Splash from '../../pages/Splash.js';
import Design from '../../pages/Design.js';
import About from '../../pages/About.js';
import Code from '../../pages/Code.js';
import Other from '../../pages/Other.js';
import ProjectPage from '../../pages/Project-page.js';

/*--------------------------------------------------------------------------------------------------*/

function DesktopLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />
        <Route path="/code" element={<Code />} />
        <Route path="/other" element={<Other />} />
        <Route path="/projects/:projectName" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default DesktopLayout;