/*--------------------------------------------------------------------------------------------------*
 *                                         Main React App                                           *
 *                                         Genna Olavarri                                           *
 *                                           Spring 2025                                            *
 *--------------------------------------------------------------------------------------------------*/

/* This is the main React app component. It contains the routing for the web pages. */

/*--------------------------------------------------------------------------------------------------*/

// React imports
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Local imports
import Splash from './Splash.js';
import Design from './Design.js';
import About from './About.js';
import Code from './Code.js';
import Other from './Other.js';
import ProjectPage from './Project-page.js';

/*--------------------------------------------------------------------------------------------------*/

function App() {
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

export default App;

