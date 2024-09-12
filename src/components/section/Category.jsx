import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OurCategory = ({ data }) => {
  const [categories, setCategories] = useState(data);

  return (
    <>
      <section className="content-inner-1 over">
        <div className="container">
          <div className="section-head style-2 text-center">
            <h6 className="sub-title text-primary">Our Product</h6>
            <h2 className="title">Our Top Collection</h2>
          </div>
          <div className="product-list grid">
            {categories.map((category) => (
              <Link to={`/category/${category.id}`} state={{ categories }}>
              <div key={category.id} className="dz-card blog-grid style-2 aos-item rounded-0">
                <div className="dz-media">
                  <Link to={`/category/${category.id}`} state={{ categories }}>
                    <img src={category.image} alt="Work Space" />
                  </Link>
                </div>
                <div className="dz-meta">
                  <ul>
                    <li className="post-date">{category.id}</li>
                  </ul>
                </div>
                <div className="dz-info">
                  <div className="bottom-contact">
                    <h5 className="dz-title">
                      <Link to={`/category/${category.id}`} state={{ categories }}>
                        {category.application}
                      </Link>
                    </h5>
                  </div>
                  <div className="read-more">
                    <Link
                      to={`/category/${category.id}`}
                      state={{ categories }} // Pass categories as state
                      className="btn btn-primary btn-rounded btn-sm align-items-center"
                    >
                      <span>
                        View Collection<i className="fas fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCategory;
