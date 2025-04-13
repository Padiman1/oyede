import React from "react";
import "./AboutUs.css";
import whoImage from "../../assets/hero.jpg";
import missionImage from "../../assets/hero4.jpg";
import visionImage from "../../assets/hero2.jpg";

const AboutUs = ({ showCta = true }) => {
  return (
    <section className="about-page">
      <div className="about-section">
        <div className="about-image">
          <img src={whoImage} alt="Who We Are" />
        </div>
        <div className="about-text">
          <h3>Who We Are</h3>
          <p>
            The Oyede Improvement Union (OIU), UK Branch is the diaspora chapter
            of Oyede citizens living in the United Kingdom. We are a proud
            extension of the Oyede Improvement Union Global family, committed to
            fostering unity, development, and cultural preservation.
            <br />
            We believe that staying connected to our heritage is essential to
            building a strong and supportive community both in the UK and back
            home in Oyede.
          </p>
          {showCta && (
            <div style={{ marginTop: 64 }}>
              <a href="/about-us" className="cta-button">
                Learn More
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="about-section-reverse">
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
            To unite Oyede indigenes in the UK and channel our collective
            strength toward meaningful impact in our hometown and among
            ourselves.
            <br />
            <br />
            Our mission is to serve as a bridge between the diaspora and Oyede
            Town, fostering collaboration, providing support, and initiating
            projects that uplift the community. We aim to harness the skills,
            resources, and goodwill of our members to drive sustainable
            development in key areas such as education, healthcare, youth
            empowerment, and economic advancement.
          </p>
          {showCta && (
            <div style={{ marginTop: 64 }}>
              <a href="/about-us" className="cta-button">
                Learn More
              </a>
            </div>
          )}
        </div>
        <div className="about-image">
          <img src={missionImage} alt="Our Mission" />
        </div>
      </div>

      <div className="about-section">
        <div className="about-image">
          <img src={visionImage} alt="Our Vision" />
        </div>
        <div className="about-text">
          <h3>Our Vision</h3>
          <p>
            A strong, united Oyede community at home and abroad, empowered to
            make a difference.
            <br />
            <br />
            We envision a future where every Oyede indigene, no matter where
            they are in the world, feels connected, supported, and inspired to
            contribute to the growth of our homeland. Through unity, shared
            responsibility, and a commitment to excellence, we believe that our
            collective effort will foster a thriving community that reflects the
            pride and potential of our people.
          </p>
          {showCta && (
            <div style={{ marginTop: 64 }}>
              <a href="/about-us" className="cta-button">
                Learn More
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;