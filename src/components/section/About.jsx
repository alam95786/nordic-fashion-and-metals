import React from "react";
import pic1 from '../../assets/images/about/pic1.jpg'
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="content-inner-1">
      <div className="container">
        <div className="row align-items-center about-bx4">
          <div className="col-lg-6 m-b30">
            <div className="dz-media">
              <img
                src={pic1}
                alt=""
                className="img1"
                data-aos="fade-down"
                data-aos-duration="800"
              />
              {/* <img
                src={pic2}
                alt=""
                className="img2"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="400"
              /> */}
            </div>
          </div>
          <div
            className="col-lg-6 m-b30"
            data-aos="fade-in"
            data-aos-duration="800"
          >
            <div className="section-head style-2">
              <h6 className="sub-title text-gold">About Me</h6>
              <h2 className="title m-b20">Lorem ipsum dolor sit amet consectetur.</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quos, commodi porro est magni eum, et reprehenderit veritatis eveniet saepe mollitia veniam? Suscipit, placeat eaque.
              </p>
            </div>
            <Link
              to="/about"
              className="btn btn-primary btn-rounded hover-icon"
            >
              <span>READ MORE</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
