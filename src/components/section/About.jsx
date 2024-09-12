import React from "react";
import pic1 from '../../assets/images/about/about-me.jpg'
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
              <h2 className="title m-b20">Nahid Fatima (Owner and Founder)</h2>
              <p>
              Nahid Fatima, the visionary founder and owner of Nordic Fashion and Metals, is a true trailblazer in both the garment and brass industries. With a wealth of experience spanning years in fashion and metal craftsmanship, she has carved a unique niche for herself. Nahid’s remarkable ability to seamlessly blend creativity with technical expertise has propelled her brand to the forefront of innovation and style.
              </p>
              <p>Her deep knowledge of garment design, coupled with her extensive experience in the brass industry, has allowed her to create products that are not only aesthetically stunning but also of unparalleled quality. Under her leadership, Nordic Fashion and Metals has become synonymous with elegance, craftsmanship, and originality, standing out in a competitive market.</p>
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
