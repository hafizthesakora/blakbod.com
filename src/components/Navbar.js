import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar wrapper">
        <div className="navbar-container">
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            BLAKBOD
            <i className="fab fa-typo3" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className="bar">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <a
                  href="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/solutions"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Solutions
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/career"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Careers
                </a>
              </li>
              <li className="nav-item go">
                About Us <i className="fa fa-caret-down" aria-hidden="true"></i>
                <ul>
                  <li>
                    <a href="/about-us" className="nav-links">
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a href="/mission-vision" className="nav-links">
                      Mission and Vision
                    </a>
                  </li>
                  <li>
                    <a href="/core-values" className="nav-links">
                      Core Values
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-links">
                  Contact
                </a>
              </li>

              <li className="nav-item gone">
                <a
                  href="/about-us"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About US
                </a>
              </li>

              <li className="nav-item gone">
                <a
                  href="/sign-up"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  BOOTCAMP {new Date().getFullYear()}
                </a>
              </li>
            </ul>
          </div>

          {button && (
            <Button buttonStyle="btn--outline">
              BOOTCAMP {new Date().getFullYear()}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
