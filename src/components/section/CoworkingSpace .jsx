import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
import pic1 from '../../assets/images/product/pd1.jpg';
import pic2 from '../../assets/images/product/pd2.jpg';
import pic3 from '../../assets/images/product/pd3.jpg';

const CoworkingSpace = () => {

  return (
    <section className="content-inner-2 pt-0">
      <div className="container">
        <div className="section-head style-2 text-center">
          <h6 className="sub-title text-primary">Lorem, ipsum dolor.</h6>
          <h2 className="title">Lorem, ipsum.</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 m-b30">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 2000, 
                disableOnInteraction: false,
                pauseOnMouseEnter: true, 
              }}
              speed={1000} 
              parallax={true}
              loop={true}
              navigation={{
                nextEl: ".testimonial3-next",
                prevEl: ".testimonial3-prev",
              }}
              pagination={{ clickable: true, el: ".testimonial3-pagination" }}
              className="blog-swiper-2"
            >
              <SwiperSlide>
                <div
                  className="dz-card blog-grid style-2 aos-item rounded-0"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div className="dz-media">
                    <a href="ArchHub/BlogDetails.html">
                      <img
                        src={pic1}
                        alt="Work Space"
                      />
                    </a>
                  </div>
                  <div className="dz-meta">
                    <ul>
                      <li className="post-date">01</li>
                    </ul>
                  </div>
                  <div className="dz-info">
                    <div className="bottom-contact">
                      <h5 className="dz-title">
                        <a href="ArchHub/BlogDetails.html">Lorem, ipsum dolor.</a>
                      </h5>
                      <p className="text">Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="read-more">
                      <a
                        href="ArchHub/BlogDetails.html"
                        className="btn btn-primary btn-rounded btn-sm align-items-center"
                      >
                        <span>
                          View More<i className="fas fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="dz-card blog-grid style-2 aos-item rounded-0"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div className="dz-media">
                    <a href="ArchHub/BlogDetails.html">
                      <img
                        src={pic2}
                        alt="Private Space"
                      />
                    </a>
                  </div>
                  <div className="dz-meta">
                    <ul>
                      <li className="post-date">02</li>
                    </ul>
                  </div>
                  <div className="dz-info">
                    <div className="bottom-contact">
                      <h5 className="dz-title">
                        <a href="ArchHub/BlogDetails.html">Lorem, ipsum.</a>
                      </h5>
                      <p className="text">Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="read-more">
                      <a
                        href="ArchHub/BlogDetails.html"
                        className="btn btn-primary btn-rounded btn-sm align-items-center"
                      >
                        <span>
                          View More<i className="fas fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="dz-card blog-grid style-2 aos-item rounded-0"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div className="dz-media">
                    <a href="ArchHub/BlogDetails.html">
                      <img
                        src={pic3}
                        alt="Custom Space"
                      />
                    </a>
                  </div>
                  <div className="dz-meta">
                    <ul>
                      <li className="post-date">03</li>
                    </ul>
                  </div>
                  <div className="dz-info">
                    <div className="bottom-contact">
                      <h5 className="dz-title">
                        <a href="ArchHub/BlogDetails.html">Lorem, ipsum.</a>
                      </h5>
                      <p className="text">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="read-more">
                      <a
                        href="ArchHub/BlogDetails.html"
                        className="btn btn-primary btn-rounded btn-sm align-items-center"
                      >
                        <span>
                          View More<i className="fas fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="num-pagination style-1">
              <div className="testimonial3-prev btn-prev">
                <i className="las la-arrow-left"></i>
              </div>
              <div className="testimonial3-pagination"></div>
              <div className="testimonial3-next btn-next">
                <i className="las la-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoworkingSpace;
