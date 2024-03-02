import React from "react";
import "./companies.css";
import { logo1, logo2, logo3, logo4 } from "./data.js";
const Companies = () => {
  return (
    <div className="companies-container">
      <div className="companies-header">
        <p>Trusted by</p>
      </div>
      <div className="companies-logo">
        <div>
          <img src={logo1} alt="Logo1" />
        </div>
        <div>
          <img src={logo2} alt="Logo2" />
        </div>
        <div>
          <img src={logo3} alt="Logo3" />
        </div>
        <div>
          <img src={logo4} alt="Logo4" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
