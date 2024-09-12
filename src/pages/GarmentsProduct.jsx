import React, { useState } from 'react';
import Banner from "../components/section/Banner";
import bannerImg from '../assets/images/banner/bnr2.jpg';
import pic1 from '../assets/images/product/pd1.jpg';
import pic2 from '../assets/images/product/pd2.jpg';
import pic3 from '../assets/images/product/pd3.jpg';
import pic4 from '../assets/images/product/pd4.jpg';
import pic5 from '../assets/images/product/pd5.jpg';
import pic6 from '../assets/images/product/pd6.jpg';
import pic7 from '../assets/images/product/pd7.jpg';
import pic8 from '../assets/images/product/pd8.jpg';
import pic9 from '../assets/images/product/pd9.jpg';
import pic10 from '../assets/images/product/pd10.jpg';
import pic11 from '../assets/images/product/pd11.jpg';
import pic12 from '../assets/images/product/pd12.jpg';
import OurCategory from '../components/section/Category';

const GarmentsProduct = () => {
  const data = [
    {
      id: 1,
      image: pic1,
      application: "Tops",
      products: [
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
    ]
    },
    {
      id: 2,
      image: pic2,
      application: "Tops",
      products: [
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
    ]
    },
    {
      id: 3,
      image: pic3,
      application: "kurtis",
      products: [
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
    ]
    },
    {
      id: 4,
      image: pic4,
      application: "Tops",
      products: [
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
    ]
    },
    
   
  ];

  return (
    <>
      <Banner bannerImg={bannerImg} title="Garments" />
      <OurCategory data={data} />
    </>
  );
};

export default GarmentsProduct;
