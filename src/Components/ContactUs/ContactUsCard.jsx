import React from "react";
import "./contactuscard.css";
const ContactUsCard = () => {
  return (
    <div className="contactuscard-container">
      <form action="" className="main-form">
        <div className="contactuscard-header">
          <h5>Book a consultation</h5>
          <p>Enter your details and we will contact you.</p>
        </div>
        <div className="contactuscard-form">
          <div className="form-name">
            <div className="firstname">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className="lastname">
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-email">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="form-phone">
            <label htmlFor="">Phone</label>
            <input type="text" />
          </div>
        </div>
        <button className="contactuscard-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsCard;
