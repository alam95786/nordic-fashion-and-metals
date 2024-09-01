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
import Popup from '../components/popup/Popup';

const GarmentsProduct = () => {
  const products = [
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
      title: "Blue Ceramic Vase",
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
    {
      id: 7,
      title: "Red Glass Candle Holder",
      image: pic7,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    {
      id: 8,
      title: "Red Glass Candle Holder",
      image: pic8,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    {
      id: 9,
      title: "Red Glass Candle Holder",
      image: pic9,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    {
      id: 10,
      title: "Red Glass Candle Holder",
      image: pic10,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    {
      id: 11,
      title: "Red Glass Candle Holder",
      image: pic11,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    {
      id: 12,
      title: "Red Glass Candle Holder",
      image: pic12,
      material: "Glass",
      color: "Red",
      application: "Home Decor",
      uses: "Restaurants, Homes"
    },
    // Add more products as needed
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Banner bannerImg={bannerImg} title="Garments" />
      <section className="content-inner-1 over">
        <div className="container">
          <div className="section-head style-2 text-center">
            <h6 className="sub-title text-primary">Our Product</h6>
            <h2 className="title">Top Fashion</h2>
          </div>
          <div className="product-list grid">
            {products.map((product) => (
              <div key={product.id} className="product-wrapper">
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
            ))}
          </div>
        </div>
      </section>
      <Popup isOpen={isPopupOpen} onClose={togglePopup} />
    </>
  );
};

export default GarmentsProduct;
