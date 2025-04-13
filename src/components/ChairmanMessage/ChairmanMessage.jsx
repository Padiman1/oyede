import React from "react";
import "./ChairmanMessage.css";
import BlogHero from "../BlogHero/BlogHero";
import OurTeam from "../OurTeam/OurTeam";
import AboutUs from "../AboutUs/AboutUs";

const ChairmanMessage = () => {
  return (
    <div>
      <BlogHero title={"ABOUT US"} />

      <div className="chairman-page">
        <div className="chairman-container">
          <h2 className="chairman-title">Message from the Chairman</h2>
          <p className="chairman-text">Dear Oyede Sons and Daughters,</p>
          <p className="chairman-text">
            It is with great pride and gratitude that I welcome you to the
            official website of the Oyede Improvement Union, UK Branch. This
            platform represents our collective voice, vision, and commitment to
            the progress of our beloved Oyede Kingdom.
          </p>
          <p className="chairman-text">
            Here in the UK, we remain deeply connected to our roots. Through
            unity, cultural pride, and shared responsibility, we aim to uplift
            our people and support meaningful development back home. I encourage
            every Oyede indigene in the diaspora to get involved — together, we
            can make a lasting impact.
          </p>
          <p className="chairman-text">
            Let us continue to support one another and build a legacy we can all
            be proud of.
          </p>
          <p className="chairman-signature">
            Warm regards, <br />
            <strong>[Chairman’s Full Name]</strong>
            <br />
            Chairman, OIU UK Branch
          </p>
        </div>
      </div>
      <OurTeam />
      <AboutUs showCta={false} />
    </div>
  );
};

export default ChairmanMessage;
