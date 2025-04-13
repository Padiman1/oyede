import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook
import "./SupportHero.css";
import heroImg from "../../assets/hero4.jpg"; // Replace with your path

const SupportHero = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleDonateClick = () => {
    navigate("/donate"); // Navigate to the donation page
  };

  return (
    <div
      className="support-hero-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="support-hero-overlay">
        <h1 className="support-hero-title">Support Our Vision: Today!</h1>
        <p className="support-hero-description">
          Help shape the future of the Oyede community by supporting the Oyede Community Cultural Heritage Center project. Let’s unite to safeguard and honor our cherished Oyede heritage for future generations.
        </p>
        <button className="support-hero-donate-btn" onClick={handleDonateClick}>
          Donate
        </button>
      </div>
    </div>
  );
};

export default SupportHero;