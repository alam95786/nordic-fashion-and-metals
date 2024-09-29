import React, { useState, useEffect } from "react";
import bannerImg from '../assets/images/banner/bnr2.jpg' ;

// Import images
import pic1 from '../assets/images/product/pd1.jpg';
import pic2 from '../assets/images/product/pd2.jpg';
import pic3 from '../assets/images/product/pd3.jpg';
import pic4 from '../assets/images/product/pd4.jpg';
import pic5 from '../assets/images/product/pd5.jpg';
import pic6 from '../assets/images/product/pd6.jpg';
import g_1 from '../assets/images/product/metals/garden/2.jpg';
import g_2 from '../assets/images/product/metals/garden/3.jpg';
import g_3 from '../assets/images/product/metals/garden/4.jpg';
import g_4 from '../assets/images/product/metals/garden/5.jpg';
import c_1 from '../assets/images/product/metals/christmas/2.jpg';
import c_2 from '../assets/images/product/metals/christmas/4.jpg';
import c_3 from '../assets/images/product/metals/christmas/4.jpg';
import c_4 from '../assets/images/product/metals/christmas/5.jpg';
import Banner from "../components/section/Banner";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const portfolioItems = [
    { category: "garments", img: pic1, title: "Lorem, ipsum."},
    { category: "garments", img: pic2, title: "Lorem, ipsum."},
    { category: "garments", img: pic3, title: "Lorem, ipsum."},
    { category: "garments", img: pic4, title: "Lorem, ipsum."},
    { category: "garments", img: pic5, title: "Lorem, ipsum."},
    { category: "metals", img: g_1, title: "Lorem, ipsum."},
    { category: "metals", img: g_2, title: "Lorem, ipsum."},
    { category: "metals", img: g_3, title: "Lorem, ipsum."},
    { category: "metals", img: g_4, title: "Lorem, ipsum."},
    { category: "metals", img: c_1, title: "Lorem, ipsum."},
    { category: "metals", img: c_2, title: "Lorem, ipsum."},
    { category: "metals", img: c_3, title: "Lorem, ipsum."},
    { category: "metals", img: c_4, title: "Lorem, ipsum."},
    
  ];
  useEffect(() => {
    // Initialize lightGallery
    if ($('#masonry').length > 0) {
      $('#masonry').lightGallery({
        selector: '.lightimg',
        loop: true,
        thumbnail: true,
        exThumbImage: 'data-exthumbimage'
      });
    }

    // Cleanup function
    return () => {
      if ($('#masonry').data('lightGallery')) {
        $('#masonry').data('lightGallery').destroy(true);
      }
    };
  }, [portfolioItems]); // Depend on portfolioItems if it can change dynamically
  return (
    <>
    <Banner bannerImg={bannerImg} title="Gallery"/>
    <section className="content-inner line-img overflow-hidden">
      <div className="container">
        {/* Filter Section */}
        <div className="site-filters style-1 clearfix center">
          <ul className="filters" data-toggle="buttons">
            <li className={`btn ${activeFilter === "All" ? "active" : ""}`} onClick={() => handleFilterChange("All")}>
              <input type="radio" />
              <a href="javascript:void(0);">All</a>
            </li>
            <li className={`btn ${activeFilter === "garments" ? "active" : ""}`} onClick={() => handleFilterChange("garments")}>
              <input type="radio" />
              <a href="javascript:void(0);">Garments</a>
            </li>
            <li className={`btn ${activeFilter === "metals" ? "active" : ""}`} onClick={() => handleFilterChange("metals")}>
              <input type="radio" />
              <a href="javascript:void(0);">Metals</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        {/* Portfolio Items */}
        <ul id="masonry" className="row lightgallery">
          {portfolioItems
            .filter(item => activeFilter === "All" || item.category === activeFilter)
            .map((item, index) => (
              <li key={index} className={`card-container col-xl-4 col-md-6 col-sm-6 ${item.category} m-b30`}>
                <div className="dz-box overlay style-1">
                  <div className="dz-media">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="dz-info">
                    <span data-exthumbimage={item.img} data-src={item.img} className="view-btn lightimg" title={item.title}></span>
                    <h6 className="sub-title">{item.title}</h6>
                    <h4 className="title m-b15">
                      <a href="PortfolioDetails.html">
                        {item.location}, <span>{item.city}</span>
                      </a>
                    </h4>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
    </>
  );
};

export default Gallery;
