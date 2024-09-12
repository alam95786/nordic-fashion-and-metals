import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Popup from '../components/popup/Popup';
import Banner from "../components/section/Banner";
import bannerImg from '../assets/images/banner/bnr2.jpg';

const CategoryProducts = () => {
  const { categoryId } = useParams(); // Get categoryId from route parameters
  const location = useLocation(); // Get state passed from Link
  const { categories } = location.state; // Extract categories from state

  // Find the category using the categoryId
  const category = categories.find(cat => cat.id.toString() === categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
    <Banner bannerImg={bannerImg} title={category.application} />
    <section className="content-inner-1 over">
        <div className="container">
          <div className="section-head style-2 text-center">
            <h6 className="sub-title text-primary">Our Product</h6>
            <h2 className="title">{category.application} Collections</h2>
          </div>
          <div className="product-list grid">
      {category.products && category.products.length > 0 ? (
        category.products.map((product) => (
          <div key={product.id} className="product-wrapper">
          <div className="thumbnail">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <h4 className="dz-title">{product.title}</h4>
            {/* <ul className="data">
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
            </ul> */}
            <button className="btn btn-primary btn-rounded btn-sm hover-icon" onClick={togglePopup}>
              <span>Enquiry Now</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        ))
      ) : (
        <p>No products available for this category.</p>
      )}
  </div>
        </div>
      </section>
     <Popup isOpen={isPopupOpen} onClose={togglePopup} />
     </>
  );
};

export default CategoryProducts;
