import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom"; 
import Banner from "../components/section/Banner";
import bannerImg from '../assets/images/banner/bnr2.jpg' ;

const Contact = () => {
  const form = useRef();
  const [thankyouMesssage, setThankyouMesssage] = useState(false)
  const [error, setError] = useState(false)
 
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    emailjs
      .sendForm('service_cjy9qf6', 'template_99bzi8k', form.current,'W9NAEabWtXYeD7cZd' )
      .then(
        (result) => {
          setThankyouMesssage(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <>
    <Banner bannerImg={bannerImg} title="Contact Us"/>
    <section className="content-inner">
      <div className="container">
        <div className="row">
          {/* Contact Info Box - Call Now */}
          <div
            className="col-lg-4 col-md-6 m-b30 aos-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="icon-bx-wraper style-8 bg-white" data-name="01">
              <div className="icon-md m-r20">
                <span className="icon-cell text-primary">
                  <i className="flaticon-telephone"></i>
                </span>
              </div>
              <div className="icon-content">
                <h4 className="tilte m-b10">Call Now</h4>
                <p className="m-b0">
                  +91 0000000
                  <br /> +91 0000000
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Info Box - Email Now */}
          <div
            className="col-lg-4 col-md-6 m-b30 aos-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="icon-bx-wraper style-8 bg-white" data-name="02">
              <div className="icon-md m-r20">
                <span className="icon-cell text-primary">
                  <i className="flaticon-email"></i>
                </span>
              </div>
              <div className="icon-content">
                <h4 className="tilte m-b10">Email Now</h4>
                <p className="m-b0">
                  info@gmail.com,
                  <br /> services@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Box - Location */}
          <div
            className="col-lg-4 col-md-12 m-b30 aos-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="icon-bx-wraper style-8 bg-white" data-name="03">
              <div className="icon-md m-r20">
                <span className="icon-cell text-primary">
                  <i className="flaticon-placeholder"></i>
                </span>
              </div>
              <div className="icon-content">
                <h4 className="tilte m-b10">Location</h4>
                <p className="m-b0">
                India Office
              New Delhi, India <br/>
              Europe Office:
              Copenhagen, Denmark

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="content-inner-1 pt-0">
      {/* Map Iframe */}
      <div className="map-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219"
          className="align-self-stretch radius-sm"
          style={{ border: 0, width: "100%", minHeight: "100%" }}
          allowFullScreen
          title="Google Map"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="container">
        <div
          className="contact-area aos-item"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
           {
            !thankyouMesssage &&
          <div className="section-head style-1 text-center">
            <h6 className="sub-title text-primary">Contact Us</h6>
            <h2 className="title">Get In Touch With Us</h2>
          </div>
          }
          {
            !thankyouMesssage && 
          <form
            ref={form}
            className="dz-form dzForm contact-bx"
            onSubmit={sendEmail}
          >
            <div className="row sp10">
              {/* First Name Input */}
              <div className="col-sm-6 m-b20">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="First Name"
                    required
                  />
                </div>
              </div>
              {/* Last Name Input */}
              <div className="col-sm-6 m-b20">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              {/* Email Input */}
              <div className="col-sm-6 m-b20">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              {/* Phone Number Input */}
              <div className="col-sm-6 m-b20">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone No."
                    required
                  />
                </div>
              </div>
              {/* Subject Input */}
              {/* Message Input */}
              <div className="col-sm-12 m-b20">
                <div className="input-group">
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <div className="col-sm-12 text-center">
                <button
                  name="submit"
                  type="submit"
                  className="btn btn-primary btn-rounded"
                >
                  SUBMIT <i className="m-l10 fas fa-caret-right"></i>
                </button>
              </div>
            </div>
          </form>
          }
          {
            thankyouMesssage && 
            <div className="text-center">
            <h3 className='text-gold'>Thank you for your submission!</h3>
            <p> We have received your message and will get back to you shortly.</p>
          </div>
          }
          {
            error &&
          <p className='text-danger text-center'>Oops! Something went wrong. Please try submitting the form again.</p>
        }
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
