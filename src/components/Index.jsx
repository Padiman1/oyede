import React from "react";
import Navbar from "./navbar/navbar";
import Hero from "./hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import OyedeUnionActivities from "./OyedeUnionActivities/OyedeUnionActivities";
import MeetingAndProjects from "./MeetingAndProjects/MeetingAndProjects";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs showCta={true} />
      <OyedeUnionActivities />
      <MeetingAndProjects />
    </div>
  );
};

export default Index;
