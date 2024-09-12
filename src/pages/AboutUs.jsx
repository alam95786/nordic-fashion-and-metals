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
            Nordic Fashion and Metals is an innovative company with a unique presence in both Europe and India, specializing in the fusion of high-quality fashion and metal craftsmanship. Founded by Nahid Fatima, the company brings together her extensive experience in the garment and brass industries to create exceptional products that stand out for their design and durability.
            </p>
            <div className="accordion dz-accordion about-faq" id="aboutFaq">
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutOne"
                    aria-expanded="false"
                    aria-controls="aboutOne"
                  >
                    <i className="flaticon-crane"></i>
                    Mission
                    <span className="toggle-close"></span>
                  </button>
                </h4>
                <div
                  id="aboutOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="aboutOne"
                  data-bs-parent="#aboutFaq"
                >
                  <div className="accordion-body">
                    <p className="m-b0">
                    The mission of Nordic Fashion and Metals is to create innovative, high-quality products that seamlessly blend the art of fashion with expert metal craftsmanship. We are committed to delivering exceptional designs that embody elegance, durability, and sustainability. By combining traditional techniques with modern aesthetics, we aim to inspire creativity and set new standards in both the fashion and metal industries, while fostering a culture of craftsmanship, integrity, and global collaboration.
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
                    The vision of Nordic Fashion and Metals is to become a global leader in the fusion of fashion and metal craftsmanship, recognized for our innovative designs, quality, and sustainability. We aspire to shape the future of the industry by creating timeless, versatile products that celebrate both modern creativity and traditional artistry. Our goal is to inspire and empower individuals around the world with unique, elegant, and durable pieces, while fostering a positive impact on the communities and markets we serve across Europe, India, and beyond.
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
                    More than just clothing, fashion is an art form that tells stories, challenges norms, and shapes how people present themselves to the world. It influences lifestyle choices and plays a key role in defining eras, movements, and global aesthetics.
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
