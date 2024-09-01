import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Parallax,Autoplay } from 'swiper/modules';
import Popup from '../popup/Popup';
import banner1 from '../../assets/images/main-slider/slider3/pic1.jpg'
import banner2 from '../../assets/images/main-slider/slider3/pic3.jpg'
import { Link } from 'react-router-dom';
const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const slides = [
    {
      id: 1,
      image: `${banner1}`,
      title: 'Architecture With A Different Approach',
      text: 'If you are going to use a passage of Ipsum, need anything embarrassing hidden in the middle of text.',
    },
    {
      id: 2,
      image: `${banner2}`,
      title: 'Architecture With A Different Approach',
      text: 'If you are going to use a passage of Ipsum, need anything embarrassing hidden in the middle of text.',
    },
    {
      id: 3,
      image: `${banner1}`,
      title: 'Architecture With A Different Approach',
      text: 'If you are going to use a passage of Ipsum, need anything embarrassing hidden in the middle of text.',
    },
  ];

  return (
    <>
    <div className="slidearea ps-0">
      <div className="silder-three">
        <Swiper
          modules={[Navigation, Pagination, Parallax, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3500, 
            disableOnInteraction: false, 
          }}
          speed={1500} // Transition speed of 1500ms
          parallax={true}
          loop={true}
          pagination={{ el: '.swiper-pagination.style-2', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
          }}
        >
            
          <SwiperSlide>
            <div className="silder-content" data-swiper-parallax="-40%">
              <div className="container">
                <div className="inner-content row align-items-center g-0">
                  <div className="col-md-6">
                    <div className="inner-text">
                      <h6 className="text text-gold">Lorem ipsum dolor sit amet.</h6>
                      <h3 className="title">
                        Lorem, ipsum dolor.<br /> A <span className="text-gold">Lorem</span> sit amet
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, veritatis.
                      </p>
                      <div>
                        <Link
                          to="/garments"
                          className="btn btn-primary btn-rounded btn-md hover-icon"
                        >
                          <span>See Product</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                        <button
                          className="btn btn-primary btn-rounded m-l15 btn-border btn-md hover-icon"
                          onClick={togglePopup}
                        >
                          <span>Enquiry Now</span>
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="overlay-slide" data-swiper-parallax="100%">
                      <img
                        src={banner1}
                        alt="Slide 1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="silder-content" data-swiper-parallax="-40%">
              <div className="container">
                <div className="inner-content row align-items-center g-0">
                  <div className="col-md-6">
                    <div className="inner-text">
                      <h6 className="text text-gold">Lorem ipsum dolor sit amet.</h6>
                      <h3 className="title">
                        Lorem, ipsum dolor.<br /> A <span className="text-gold">Lorem</span> sit amet
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, veritatis.
                      </p>
                      <div>
                        <Link
                          to="/metals"
                          className="btn btn-primary btn-rounded btn-md hover-icon"
                        >
                          <span>See Product</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                        <button
                          className="btn btn-primary btn-rounded m-l15 btn-border btn-md hover-icon"
                          onClick={togglePopup}
                        >
                          <span>Enquiry Now</span>
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="overlay-slide" data-swiper-parallax="100%">
                      <img
                        src={banner2}
                        alt="Slide 1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="silder-content" data-swiper-parallax="-40%">
              <div className="container">
                <div className="inner-content row align-items-center g-0">
                  <div className="col-md-6">
                    <div className="inner-text">
                      <h6 className="text text-gold">Lorem ipsum dolor sit amet.</h6>
                      <h3 className="title">
                        Lorem, ipsum dolor.<br /> A <span className="text-gold">Lorem</span> sit amet
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, veritatis.
                      </p>
                      <div>
                        <Link
                          to="/garments"
                          className="btn btn-primary btn-rounded btn-md hover-icon"
                        >
                          <span>See Product</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                        <button
                          className="btn btn-primary btn-rounded m-l15 btn-border btn-md hover-icon"
                          onClick={togglePopup}
                        >
                          <span>Enquiry Now</span>
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="overlay-slide" data-swiper-parallax="100%">
                      <img
                        src={banner1}
                        alt="Slide 1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          
        </Swiper>

        <div className="slider-three-pagination">
          <div className="btn-prev swiper-button-prev3 swiper-button-white">
            <i className="las la-angle-left"></i>
          </div>
          <div className="btn-next swiper-button-next3 swiper-button-white">
            <i className="las la-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <Popup isOpen={isPopupOpen} onClose={togglePopup} />
    </>
  );
};

export default Hero;
