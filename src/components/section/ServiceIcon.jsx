// ServiceArea.js
import React from "react";

const ServiceIcon = () => {
  const services = [
    {
      icon: "flaticon-blueprint-1",
      title: "lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "/ArchHub/BlogDetails.html",
    },
    {
      icon: "flaticon-crane",
      title: "lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "/ArchHub/BlogDetails.html",
    },
    {
      icon: "flaticon-interior-design-1",
      title: "lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "/ArchHub/BlogDetails.html",
    },
    {
      icon: "flaticon-home",
      title: "Architecture & Buildlorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      link: "/ArchHub/BlogDetails.html",
    },
  ];

  return (
    <section className="content-inner service-area">
      <div className="container">
        <div className="section-head style-2 text-center">
          <h6 className="sub-title text-primary">Our Best Services</h6>
          <h2 className="title">
            How We Provide
            <br /> Our Services
          </h2>
        </div>
        <div className="row align-items-center">
          {services.map((service, index) => (
            <div
              className="col-xl-3 col-md-6 m-lg-b30"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="icon-bx-wraper style-9">
                <div className="icon-lg">
                  <span className="icon-cell">
                    <i className={service.icon}></i>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dz-title">{service.title}</h4>
                  <p>{service.description}</p>
                  <a
                    href={service.link}
                    className="btn btn-primary btn-rounded btn-sm hover-icon"
                  >
                    <span>READ MORE</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIcon;
