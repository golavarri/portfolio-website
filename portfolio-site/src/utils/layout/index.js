import { useMediaQuery } from 'react-responsive';
import SplashMobile from '../../pages/mobile/SplashMobile';
import Splash from '../../pages/Splash';

const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? <SplashMobile /> : <Splash />;
};

export default Layout;
