import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/nf-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="site-header mo-left header style-2 header-transparent">
     
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix bg-dark">
          <div className="container clearfix">
           
            <div className="logo-header mostion logo-light p-1">
              <Link to="/">
                <img src={logo} className='' alt="Logo" />
              </Link>
            </div>
           
            <button class={`navbar-toggler collapsed navicon justify-content-end ${isOpen && 'open'}`} onClick={handleClick}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span></span>
					<span></span>
					<span></span>
				</button>
           
            <div className="extra-nav">
            </div>
            <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
              <div className="logo-header">
                <Link to="/" className="logo-dark">
                  <img src="assets/images/logo-3.png" alt="Logo" />
                </Link>
              </div>
              <ul className="nav navbar-nav navbar navbar-left">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/gallery">gallery</Link>
                </li>
                <li className="sub-menu-down">
                  <Link to="javascript:void(0);">Product</Link>
                  <ul className="sub-menu">
                    <li><Link to="/garments">Garments</Link></li>
                    <li><Link to="/metals">Metals</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <div className="dz-social-icon">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/dexignzone/" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/dexignzone/" target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/dexignzones/" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@dexignzone1723" target="_blank" rel="noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
