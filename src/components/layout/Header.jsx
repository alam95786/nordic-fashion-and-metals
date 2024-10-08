import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/nf-hr-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const menuRef = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const HideMenu = () => {
    if (window.innerWidth < 991) {
      menuRef.current.click();
    }
  };
  
  const subMenuOpen = ( )=> {
    setIsSubOpen((isSubOpen)=> !isSubOpen )
  }
  return (
    <header className="site-header mo-left header style-2 header-transparent">
     <div className="top-header">
      <div className="container">
        <div className="row">
        <div className="col-md-6 header-ct-details">
        <div className="widget_getintuch">
                  <ul>
                    <li>
                     <a href="tel:+91 0000000000">
                     <i className="las la-phone-volume"></i>
                     +91 0000000000
                     </a>
                    </li>
                    <li>
                      <a href="mailto:">
                      <i className="las la-envelope"></i>
                      info@example.com
                      </a>
                    </li>
                  </ul>
                </div>
        </div>
        <div className="col-md-6">
          <ul className="social-handle">
            <li>
              <a href="#">
              <i class="lab la-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
              <i class="lab la-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
              <i class="lab la-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
     </div>
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix bg-dark">
          <div className="container clearfix">
           
            <div className="logo-header mostion logo-light">
              <Link to="/">
                <img src={logo} className='' alt="Logo" />
              </Link>
            </div>
           
            <button class={`navbar-toggler collapsed navicon justify-content-end ${isOpen && 'open'}`} onClick={handleClick} ref={menuRef}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span></span>
					<span></span>
					<span></span>
				</button>
           
            <div className="extra-nav">
            </div>
            <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
              <div className="logo-header">
                <Link to="/" className="logo-dark" onClick={HideMenu}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              <ul className="nav navbar-nav navbar navbar-left">
                <li>
                  <Link to="/" onClick={HideMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={HideMenu}>About Us</Link>
                </li>
                <li>
                  <Link to="/gallery" onClick={HideMenu}>gallery</Link>
                </li>
                <li className={`sub-menu-down ${isSubOpen && "open"}`}>
                  <Link to="javascript:void(0);" onClick={subMenuOpen} >Product</Link>
                  <ul className="sub-menu">
                    <li><Link to="/garments" onClick={HideMenu}>Garments</Link></li>
                    <li><Link to="/metals" onClick={HideMenu}>Metals</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact" onClick={HideMenu}>Contact Us</Link>
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
