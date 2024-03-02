import React from "react";
import "./contactus.css";
import ContactUsCard from "./ContactUsCard";
const ContactUs = () => {
  return (
    <div className="contactus-container" id="contactus">
      <div className="contactus-text">
        <h4>Let's get started!</h4>
        <p>We will create your future starting with us.</p>
      </div>
      <div className="contactus-card">
        <ContactUsCard />
      </div>
    </div>
  );
};

export default ContactUs;
