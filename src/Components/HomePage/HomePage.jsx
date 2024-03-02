import React from "react";
import "./homepage.css";
import homepageImg from "../../assets/Images/homepage-img.jpg";
import { CiLocationArrow1 } from "react-icons/ci";
const HomePage = () => {
  return (
    <div className="homepage-container" id="home">
      <div className="homepage-content">
        <h1>Digital Solution</h1>
        <p>
          One of the most trusted provider for Digital solution.We Provide
          solution in this digital world and help you to achieve answers for
          your problems
        </p>
        <div className="homepage-link">
          <a href="">
            Contact Us
            <CiLocationArrow1 className="homepage-icon" />
          </a>
        </div>
      </div>
      <div className="homepage-image">
        <img src={homepageImg} alt="Homepage_Image" />
      </div>
    </div>
  );
};

export default HomePage;
