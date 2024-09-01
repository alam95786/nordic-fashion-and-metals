import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import Hero from '../components/section/Hero';
import ServiceIcon from '../components/section/ServiceIcon';
import About from '../components/section/About';
import CoworkingSpace from '../components/section/CoworkingSpace ';
import ClientsLogo from '../components/section/ClientLogo';
import Testimonial from '../components/section/Testimonials';
import Counters from '../components/section/Counters';
import Products from '../components/section/Products';
import IntroVideo from '../components/section/IntroVideo';

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Products bgColor="bg-gray"/>
        <Products/>
        <IntroVideo/>
        <Counters/>
        <CoworkingSpace/>
        <ServiceIcon/>
        <Testimonial/>
        <ClientsLogo/>
    </>
  );
};

export default Home;
