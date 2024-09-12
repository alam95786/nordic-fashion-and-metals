import React, { useState } from 'react';
import Banner from "../components/section/Banner";
import bannerImg from '../assets/images/banner/bnr2.jpg';
import pic1 from '../assets/images/product/metals/garden/1.jpg';
import pic2 from '../assets/images/product/metals/home-decor/1.jpg';
import pic3 from '../assets/images/product/metals/furniture/1.jpg';
import pic4 from '../assets/images/product/metals/christmas/1.jpg';
import g_1 from '../assets/images/product/metals/garden/2.jpg';
import g_2 from '../assets/images/product/metals/garden/3.jpg';
import g_3 from '../assets/images/product/metals/garden/4.jpg';
import g_4 from '../assets/images/product/metals/garden/5.jpg';
import c_1 from '../assets/images/product/metals/christmas/2.jpg';
import c_2 from '../assets/images/product/metals/christmas/4.jpg';
import c_3 from '../assets/images/product/metals/christmas/4.jpg';
import c_4 from '../assets/images/product/metals/christmas/5.jpg';
import f_1 from '../assets/images/product/metals/furniture/2.jpg'
import f_2 from '../assets/images/product/metals/furniture/3.jpg';
import f_3 from '../assets/images/product/metals/furniture/4.jpg';
import f_4 from '../assets/images/product/metals/furniture/5.jpg';
import h_1 from '../assets/images/product/metals/home-decor/2.jpg';
import h_2 from '../assets/images/product/metals/home-decor/3.jpg';
import h_3 from '../assets/images/product/metals/home-decor/4.jpg';
import h_4 from '../assets/images/product/metals/home-decor/5.jpg';
import OurCategory from '../components/section/Category';

const MetalsProduct = () => {
  const data = [
    {
      id: 1,
      image: pic1,
      application: "Garden Decor",
      products: [
        {
            id: 1,
            title: "Garden Decor",
            image: g_1,
            material: "Iron",
            color: "Green",
            application: "Home Decor",
            uses: "Restaurants, Homes"
          },
          {
            id: 2,
            title: "Garden Decor",
            image: g_2,
            material: "Ceramic",
            color: "Blue",
            application: "Home Decor",
            uses: "Offices, Homes"
          },
          {
            id: 3,
            title: "Garden Decor",
            image: g_3,
            material: "Glass",
            color: "Red",
            application: "Home Decor",
            uses: "Restaurants, Homes"
          },
          {
            id: 4,
            title: "Garden Decor",
            image: g_4,
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
      application: "Furniture",
      products: [
        {
            id: 1,
            title: "Furniture",
            image: f_1,
            material: "Iron",
            color: "Green",
            application: "Home Decor",
            uses: "Restaurants, Homes"
          },
          {
            id: 2,
            title: "Furniture",
            image: f_2,
            material: "Ceramic",
            color: "Blue",
            application: "Home Decor",
            uses: "Offices, Homes"
          },
          {
            id: 3,
            title: "Furniture",
            image: f_3,
            material: "Glass",
            color: "Red",
            application: "Home Decor",
            uses: "Restaurants, Homes"
          },
          {
            id: 4,
            title: "Furniture",
            image: f_4,
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
      application: "Home Decor",
      products: [
        {
            id: 1,
            title: "Home Decor",
            image: h_1,
            material: "Iron",
            color: "Green",
            application: "Home Decor",
            uses: "Restaurants, Homes"
          },
          {
            id: 2,
            title: "Home Decor",
            image: h_2,
            material: "Ceramic",
            color: "Blue",
            application: "Home Decor",
            uses: "Offices, Homes"
          },
          {
            id: 3,
            title: "Home Decor",
            image: h_3,
            material: "Glass",
            color: "Red",
            application: "Home Decor",
            uses: "Restaurants, Homes"
          },
          {
            id: 4,
            title: "Home Decor",
            image: h_4,
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
      application: "Christmas",
      products: [
        {
            id: 1,
            title: "Christmas",
            image: c_1,
            material: "Iron",
            color: "Green",
            application: "Home Decor",
            uses: "Restaurants, Homes"
          },
          {
            id: 2,
            title: "Christmas",
            image: c_2,
            material: "Ceramic",
            color: "Blue",
            application: "Home Decor",
            uses: "Offices, Homes"
          },
          {
            id: 3,
            title: "Christmas",
            image: c_3,
            material: "Glass",
            color: "Red",
            application: "Home Decor",
            uses: "Restaurants, Homes"
          },
          {
            id: 4,
            title: "Christmas",
            image: c_4,
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
      <Banner bannerImg={bannerImg} title="Metals" />
      <OurCategory data={data} />
    </>
  );
};

export default MetalsProduct;
