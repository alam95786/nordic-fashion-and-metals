import React from 'react';
import bannerImg from '../assets/images/banner/bnr2.jpg' ;
import Banner from '../components/section/Banner';
import pic1 from '../assets/images/product/pd1.jpg';
import pic2 from '../assets/images/product/pd2.jpg';
import pic3 from '../assets/images/product/pd3.jpg';
import Counters from '../components/section/Counters';
import Testimonial from '../components/section/Testimonials';

const AboutUs = () => {
  return (
    <>
    <Banner bannerImg={bannerImg} title="About Us"/>
    <section
      className="section-full content-inner about-bx2 pb-0"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="dz-media">
              <div className="img1 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <img src={pic3} alt="" />
              </div>
              <div className="img2 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                <img src={pic1} alt="" />
              </div>
              {/* <div className="img3 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                <img src={pic3} alt="" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="year-exp">
              <h2 className="year aos-item counter" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                25
              </h2>
              <h4 className="text aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                Years Of Working Experience
              </h4>
            </div>
            <p className="m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              Donec lacus velit, volutpat a consequat quis, placerat vitae massa. Nulla facilisi. Fusce ac odio justo.
              Phasellus a risus in libero feugiat aliquam quis nec metus. Sed vulputate bibendum nulla, eu sodales magna
              gravida nec. Integer sit amet sollicitudin massa, a blandit lectus. Vivamus lacinia justo non congue
              blandit.
            </p>
            <div className="accordion dz-accordion about-faq" id="aboutFaq">
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutOne"
                    aria-expanded="true"
                    aria-controls="aboutOne"
                  >
                    <i className="flaticon-crane"></i>
                    Mission
                    <span className="toggle-close"></span>
                  </button>
                </h4>
                <div
                  id="aboutOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="aboutOne"
                  data-bs-parent="#aboutFaq"
                >
                  <div className="accordion-body">
                    <p className="m-b0">
                      Vivamus sed eleifend diam. Proin vel orci commodo nulla viverra feugiat nec quis neque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutTwo"
                    aria-expanded="false"
                    aria-controls="aboutTwo"
                  >
                    <i className="flaticon-interior-design"></i>
                    Vision
                    <span className="toggle-close"></span>
                  </button>
                </h4>
                <div
                  id="aboutTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="aboutTwo"
                  data-bs-parent="#aboutFaq"
                >
                  <div className="accordion-body">
                    <p className="m-b0">
                      Vivamus sed eleifend diam. Proin vel orci commodo nulla viverra feugiat nec quis neque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutThree"
                    aria-expanded="false"
                    aria-controls="aboutThree"
                  >
                    <i className="flaticon-blueprint"></i>
                    Fashion
                    <span className="toggle-close"></span>
                  </button>
                </h4>
                <div
                  id="aboutThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="aboutThree"
                  data-bs-parent="#aboutFaq"
                >
                  <div className="accordion-body">
                    <p className="m-b0">
                      Vivamus sed eleifend diam. Proin vel orci commodo nulla viverra feugiat nec quis neque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Counters/>
    <Testimonial/>
    </>
  );
};

export default AboutUs;
