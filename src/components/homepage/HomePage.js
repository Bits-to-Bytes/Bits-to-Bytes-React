import React from "react";
import { NavLink } from "react-router-dom";
import "./homepage.css";
import { Popup } from "react-popup";

const HomePage = () => {
  const handleTap = () => {
    // Popup.alert("Coming Soon!");
  };

  return (
    <div className="home-page" id="home">
      <div className="content">
        <img src="./assets/logo.png" alt="" className="logo" />
        <h1 className="home-title">Bits To Bytes</h1>
        <h2 className="sub-title">GEC Bhavnagar</h2>
        <p className="home-info">
          Being a programming club of the institution, we assure pretty much
          everything you ask for! We conduct events and workshops, hold lectures
          and talks, and even host coding competitions and hackathons.
        </p>
    
        <button type="button" onClick={handleTap}>
          <i className="fas fa-user-circle "></i>
          <p>Become a member</p>
        </button>
      </div>

      <lottie-player
        src="https://assets1.lottiefiles.com/private_files/lf30_YhW5Ji.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
        mode="bounce"
        className="image"
      ></lottie-player>
    </div>
  );
};

export default HomePage;
