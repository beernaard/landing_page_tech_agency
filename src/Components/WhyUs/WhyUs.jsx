import React from "react";
import "./whyus.css";
import helping from "../../assets/Images/helping.jpg";
const WhyUs = () => {
  return (
    <div className="whyus-container">
      <p className="whyus-container-p">Why you should choose us?</p>
      <div className="whyus-content">
        <div className="whyus-text">
          <h5>
            Big, Small or just starting up? We will help you with all our might!
          </h5>
          <p className="whyus-text-p">
            We will ensure your money will be well spent with our top notch
            quality services
          </p>
        </div>
        <div className="whyus-image">
          <img src={helping} alt="Helping a person" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
