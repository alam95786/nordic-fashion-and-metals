import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import logo1 from '../../assets/images/logo/logo-gray1.png';
import logo2 from '../../assets/images/logo/logo-gray2.png';
import logo3 from '../../assets/images/logo/logo-gray3.png';
import logo4 from '../../assets/images/logo/logo-gray4.png';
import logo5 from '../../assets/images/logo/logo-gray5.png';
import logo6 from '../../assets/images/logo/logo-gray6.png';
const ClientsLogo = () => {
  const logos = [
    `${logo1}`,
    `${logo2}`,
    `${logo3}`,
    `${logo4}`,
    `${logo5}`,
    `${logo6}`
    
  ];

  return (
    <div className="clients-wrapper content-inner-1">
      <div className="container">
      <div className="section-head style-1 text-center">
				<h6 className="sub-title text-primary">Brands</h6>
				<h2 className="title">Our Top Partners</h2>
			</div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          speed={1000} 
          parallax={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          navigation={{
            nextEl: ".clients-next",
            prevEl: ".clients-prev",
          }}
          pagination={{ clickable: true, el: ".clients-pagination" }}
          className="clients-swiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div
                className="clients-logo"
              >
                <img
                  className="logo-main"
                  src={logo}
                  alt={`Logo ${index + 1}`}
                />
              </div>
            </SwiperSlide>
            
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientsLogo;
