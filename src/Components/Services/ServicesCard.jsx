import React from "react";
import "./servicescard.css";
const ServicesCard = ({ data }) => {
  return (
    <div className="servicescard-container">
      <img src={data.image} alt="WebsitePicture" />
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </div>
  );
};

export default ServicesCard;
