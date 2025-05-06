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
import { useMediaQuery } from 'react-responsive';

// Local imports
import MobileLayout from './utils/layout/Mobile-layout';
import DesktopLayout from './utils/layout/Desktop-layout';


/*--------------------------------------------------------------------------------------------------*/

function App() {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobileLayout /> : <DesktopLayout />
}

export default App;

