import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import WhyUs from "./Components/WhyUs/WhyUs";
import Companies from "./Components/Companies/Companies";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <div className="app-navbar">
        <NavBar />
      </div>
      <div className="app-homepage">
        <HomePage />
      </div>
      <div className="app-aboutus">
        <AboutUs />
      </div>

      <div className="app-services">
        <Services />
      </div>
      <div className="app-whyus">
        <WhyUs />
      </div>
      <div className="app-companies">
        <Companies />
      </div>
      <div className="app-contactus">
        <ContactUs />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
