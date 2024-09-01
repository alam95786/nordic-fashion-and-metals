import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer style-2" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 aos-item" data-aos="fade-up" data-aos-duration="1000">
              <div className="widget widget_about">
                <h4 className="footer-title">CONTACT</h4>
                <div className="widget_getintuch">
                  <ul>
                    <li>
                      <i className="las la-map-marker-alt"></i>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      <i className="las la-phone-volume"></i>
                      +91 0000000000
                      <br />
                      +91 1000000000
                    </li>
                    <li>
                      <i className="las la-envelope"></i>
                      info@example.com
                      <br />
                      info@example.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="offset-lg-1 col-lg-2 col-sm-4 col-6 aos-item" data-aos="fade-up" data-aos-duration="1000">
              <div className="widget widget_services">
                <h4 className="footer-title">OUR LINKS</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/garments">Garments</Link></li>
                  <li><Link to="/metals">Metals</Link></li>
                  <li><Link to="#">Lorem, ipsum.</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-4 col-6 aos-item" data-aos="fade-up" data-aos-duration="1000" >
              <div className="widget widget_services">
                <h4 className="footer-title">OUR Product</h4>
                <ul>
                  <li><Link to="#">Lorem, ipsum dolor.</Link></li>
                  <li><Link to="#">Lorem, ipsum dolor.</Link></li>
                  <li><Link to="#">Lorem, ipsum dolor.</Link></li>
                  <li><Link to="#">Lorem, ipsum dolor.</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-4 col-6 aos-item" data-aos="fade-up" data-aos-duration="1000" >
              <div className="widget widget_services">
                <h4 className="footer-title">OTHER LINKS</h4>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Terms & Condition</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom part */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <span className="copyright-text">
                Copyright © 2024 <a href="#" className="text-gold" target="_blank" rel="noopener noreferrer">Nordic Fashion and Metals</a> All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="footer-link d-inline-block">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Help Desk</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
