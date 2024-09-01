import React from "react";
import { Link } from "react-router-dom";


const Banner = ({title,bannerImg}) => {
  return (
    <div className="slidearea bannerside">
      <div
        className="dz-bnr-inr style-1 overlay-left"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="container-fluid">
          <div className="dz-bnr-inr-entry">
            <h1>{title}</h1>
            {/* Breadcrumb Row */}
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">{title}</li>
              </ul>
            </nav>
            {/* Breadcrumb Row End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
