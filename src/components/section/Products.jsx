import React , { useState } from 'react';
import Popup from '../popup/Popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Products = ({bgColor, title, items}) => {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
    <section className={`content-inner-1 ${bgColor ? bgColor : ''} over`}>
      <div className="container">
        <div className="section-head style-2 text-center" data-aos="fade-up"
                data-aos-duration="800">
          <h6 className="sub-title text-primary">Our Product</h6>
          <h2 className="title">{title}</h2>
        </div>
        <div className="product-list">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
            }}
            speed={1000} 
            parallax={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            navigation={{
              nextEl: '.testimonial3-next',
              prevEl: '.testimonial3-prev',
            }}
            pagination={{ clickable: true, el: '.testimonial3-pagination' }}
          >
            {items.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-wrapper">
                  <div className="thumbnail">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-details">
                    <h4 className="dz-title">{product.title}</h4>
                    <ul className="data">
                      <li>
                        <strong>Material:</strong>
                        <span>{product.material}</span>
                      </li>
                      <li>
                        <strong>Color:</strong>
                        <span>{product.color}</span>
                      </li>
                      <li>
                        <strong>Application:</strong>
                        <span>{product.application}</span>
                      </li>
                      <li>
                        <strong>Uses:</strong>
                        <span>{product.uses}</span>
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-rounded btn-sm hover-icon" onClick={togglePopup}>
                      <span>Enquiry Now</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="num-pagination style-1">
            <div className="testimonial3-prev btn-prev"><i className="las la-arrow-left"></i></div>
            <div className="testimonial3-pagination"></div>
            <div className="testimonial3-next btn-next"><i className="las la-arrow-right"></i></div>
          </div>
        </div>
      </div>
    </section>
     <Popup isOpen={isPopupOpen} onClose={togglePopup} />
     </>
  );
};

export default Products;
