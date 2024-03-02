import React from "react";
import "./services.css";
import ServicesCard from "./ServicesCard";
import data from "./data.js";
const Services = () => {
  const mapServiceCard = (mydata) => {
    return mydata.map((item, index) => {
      return (
        <div className="services-card" key={index}>
          <ServicesCard data={item} />
        </div>
      );
    });
  };
  return (
    <div className="services-container" id="services">
      <h1>What do we offer?</h1>
      <div className="services-content">{mapServiceCard(data)}</div>
    </div>
  );
};

export default Services;
