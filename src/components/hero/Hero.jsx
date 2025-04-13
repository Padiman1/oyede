import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroBg1 from "../../assets/hero.jpg";
import heroBg2 from "../../assets/hero2.jpg";
import heroBg3 from "../../assets/hero3.jpg";
import heroBg4 from "../../assets/hero4.jpg";
const images = [heroBg1, heroBg2, heroBg3, heroBg4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero fade"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="sub-heading">One Nation, One People, One Culture</h2>
          <h1>Oyede Improvement Union</h1>
          <p>
            Welcome to Oyede Improvement Union, UK Branch
            <br />
            We are a community of proud sons and daughters of Oyede Town, united
            in purpose and driven by the desire to support progress,
            development, and unity among our people both at home and abroad.
          </p>
          <a href="#join" className="cta-button">
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
