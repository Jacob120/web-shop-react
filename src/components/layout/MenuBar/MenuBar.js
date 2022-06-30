import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container mb-5'>
      <div className={'row align-items-center ' + styles.menu}>
        <div className={'col ' + styles.searchField}>
          <ProductSearch />
        </div>
        <div className={'col-auto' + styles.mobile_menu}>
          <nav className={'navbar navbar-expand-sm navbar-light bg-none'}>
            <div className='container-fluid'>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse navbar-mobile' id='navbarNav'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <a className='nav-link active' aria-current='page' href='#'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item active'>
                    <a className='nav-link' href='#'>
                      Furniture
                    </a>
                  </li>
                  <li className='nav-item active'>
                    <a className='nav-link' href='#'>
                      Chair
                    </a>
                  </li>
                  <li className='nav-item active'>
                    <a className='nav-link' href='#'>
                      Table
                    </a>
                  </li>
                  <li className='nav-item active'>
                    <a className='nav-link' href='#'>
                      Sofa
                    </a>
                  </li>
                  <li className='nav-item active'>
                    <a className='nav-link' href='#'>
                      Bedroom
                    </a>
                  </li>
                  <li className='nav-item active'>
                    <a
                      className='nav-link disabled'
                      href='#'
                      tabIndex='-1'
                      aria-disabled='true'
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
