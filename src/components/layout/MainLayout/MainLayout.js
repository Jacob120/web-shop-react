import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CompareProducts from '../../features/CompareProducts/CompareProducts';
import { useEffect } from 'react';
import { getMediaQuery, getScreenSize } from '../../../redux/settingsReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DESKTOP, TABLET, MOBILE } from '../../../settings/settings';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  const screenSize = useSelector(getMediaQuery);

  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width > 767 && screenSize !== DESKTOP) {
        dispatch(getScreenSize({ mediaQuery: DESKTOP }));
      } else if (
        window.screen.width < 767 &&
        window.screen.width > 576 &&
        screenSize !== TABLET
      ) {
        dispatch(getScreenSize({ mediaQuery: TABLET }));
      } else if (window.screen.width < 576 && screenSize !== MOBILE) {
        dispatch(getScreenSize({ mediaQuery: MOBILE }));
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
      <CompareProducts />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
