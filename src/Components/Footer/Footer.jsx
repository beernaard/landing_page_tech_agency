import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-header">
        <div className="footer-leftcol">
          <h4>Digital Agency</h4>
          <p>Contact us or visit our office on </p>
        </div>
        <div className="footer-middlecol">
          <div className="middlecol-left">
            <h5>Lorem Ipsum</h5>
            <div className="middle-div">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="middlecol-middle">
            <h5>Lorem Ipsum</h5>
            <div className="middle-div">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="middlecol-right">
            <h5>Lorem Ipsum</h5>
            <div className="middle-div">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
        <div className="footer-rightcol">
          <h5 className="footer-rightcol-socials">Socials</h5>
          <div className="rightcol-socials">
            <div>
              <FaLinkedin />
            </div>
            <div>
              <FaFacebook />
            </div>
            <div>
              <FaXTwitter />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-end">
        <h3>&copy; Copyright 2024, Made by Bernard Lagoc</h3>
        <div className="footer-end-links">
          <h3>
            Vector Art designed by <a href="https://www.freepik.com">Freepik</a>
          </h3>
          <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=brand+logo+company&query=brand+logo+company&type=icon">
            Icon by Firststyles
          </a>
          <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=brand+logo+company&query=brand+logo+company&type=icon">
            Icon by amoghdesign
          </a>
          <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=brand+logo+company&query=brand+logo+company&type=icon">
            Icon by Freepik
          </a>
          <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=brand+logo+company&query=brand+logo+company&type=icon">
            Icon by Marz Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
