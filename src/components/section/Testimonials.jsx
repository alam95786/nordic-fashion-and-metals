import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
import pic1 from '../../assets/images/testimonials/pic1.jpg';
import pic2 from '../../assets/images/testimonials/pic2.jpg';
import pic3 from '../../assets/images/testimonials/pic3.jpg';
const Testimonial = () => {
  return (
    <section className="content-inner-1 bg-gray over">
      <div className="container">
        <div className="section-head style-2 text-center">
          <h6 className="sub-title text-primary">Testimonial</h6>
          <h2 className="title">What The People Think About Us</h2>
        </div>
        <div className="testi-inner">
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
              nextEl: '.testimonial3-next',
              prevEl: '.testimonial3-prev',
            }}
            pagination={{ clickable: true, el: '.testimonial3-pagination' }}
          >
            <SwiperSlide>
              <div className="testimonial-3">
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={pic1} alt="Karla Lyias" />
                  </div>
                  <div className="clearfix">
                    <h4 className="testimonial-name">Karla Lyias</h4>
                    <span className="testimonial-position">Engineer</span>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>There are many variations of passages of Lore alteration in some form, by injected humour, or which don't look even slightly believable.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-3">
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={pic2} alt="Lindsey" />
                  </div>
                  <div className="clearfix">
                    <h4 className="testimonial-name">Lindsey</h4>
                    <span className="testimonial-position">Manager Effiect</span>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>There are many variations of passages of Lore alteration in some form, by injected humour, or which don't look even slightly believable.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-3">
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={pic3} alt="Kaylynn Donin" />
                  </div>
                  <div className="clearfix">
                    <h4 className="testimonial-name">Kaylynn Donin</h4>
                    <span className="testimonial-position">CEO Factory</span>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>There are many variations of passages of Lore alteration in some form, by injected humour, or which don't look even slightly believable.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-3">
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={pic1} alt="Karla Lyias" />
                  </div>
                  <div className="clearfix">
                    <h4 className="testimonial-name">Karla Lyias</h4>
                    <span className="testimonial-position">Engineer</span>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>There are many variations of passages of Lore alteration in some form, by injected humour, or which don't look even slightly believable.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="num-pagination style-1">
            <div className="testimonial3-prev btn-prev"><i className="las la-arrow-left"></i></div>
            <div className="testimonial3-pagination"></div>
            <div className="testimonial3-next btn-next"><i className="las la-arrow-right"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
