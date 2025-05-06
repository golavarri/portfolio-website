// src/components/Layout/index.jsx
import { useMediaQuery } from 'react-responsive';
import MobileLayout from './Mobile-layout';
import DesktopLayout from './Desktop-layout';

const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Layout;