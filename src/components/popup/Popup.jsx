import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Popup = ({ isOpen, onClose }) => {
    const form = useRef();
    const [thankyouMesssage, setThankyouMesssage] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_cjy9qf6', 'template_99bzi8k', form.current,'W9NAEabWtXYeD7cZd' )
          .then(
            () => {
              setThankyouMesssage(true);
            },
            (error) => {
              setError(true);
            },
          );
      };

  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <div
          className="contact-area aos-item mt-0 py-5"
        >
           <span className="close-btn" onClick={onClose}>&times;</span>
           {
            !thankyouMesssage && 
            <div className="section-head style-1 text-center">
            <h6 className="sub-title text-primary">Enquiry Now</h6>
            <h2 className="title">Get a Quick Quote</h2>
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
    </div>
  );
};

export default Popup;
