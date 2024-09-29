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
import pic1 from '../assets/images/product/pd1.jpg';
import pic2 from '../assets/images/product/pd2.jpg';
import pic3 from '../assets/images/product/pd3.jpg';
import pic4 from '../assets/images/product/pd4.jpg';
import pic5 from '../assets/images/product/pd5.jpg';
import pic6 from '../assets/images/product/pd6.jpg';
import m_1 from '../assets/images/product/metals/garden/1.jpg';
import m_2 from '../assets/images/product/metals/home-decor/1.jpg';
import m_3 from '../assets/images/product/metals/furniture/1.jpg';
import m_4 from '../assets/images/product/metals/christmas/1.jpg';
import Map from '../components/section/Map';



const Home = () => {
  

  const GarmentsData = [
    {
      id: 1,
      title: "Green Iron Hanging Lantern",
      image: pic1,
      material: "Iron",
      color: "Green",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    {
      id: 2,
      title: "Blue Ceramic Vase lorem",
      image: pic2,
      material: "Ceramic",
      color: "Blue",
      application: "Home Decor",
      uses: "Offices, Homes"
    },
    {
      id: 3,
      title: "Red Glass Candle Holder",
      image: pic3,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    {
      id: 4,
      title: "Red Glass Candle Holder",
      image: pic4,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    {
      id: 5,
      title: "Red Glass Candle Holder",
      image: pic5,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    {
      id: 6,
      title: "Red Glass Candle Holder",
      image: pic6,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    
    // Add more products as needed
  ];

  const metalsData = [
    {
      id: 1,
      image: m_1,
      title: "Garden Decor",
      application: "Garden Decor",
      
    },
    {
      id: 2,
      image: m_2,
      title: "Furniture",
      application: "Furniture",
     
    },
    {
      id: 3,
      image: m_3,
      title: "Home Decor",
      application: "Home Decor",
     
    },
    {
      id: 4,
      image: m_4,
      title: "Christmas",
      application: "Christmas",
    },
    
   
  ];
  
  

  return (
    <>
        <Hero/>
        <About/>
        <Products bgColor="bg-gray" title="Garments Collection" items={GarmentsData} />
        <Products title="Metals Collection" items={metalsData}/>
        <Map/>
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
