import React from "react";
import Hero from "./hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import OyedeUnionActivities from "./OyedeUnionActivities/OyedeUnionActivities";
import MeetingAndProjects from "./MeetingAndProjects/MeetingAndProjects";

const Index = () => {
  return (
    <div>
      <Hero />
      <AboutUs showCta={true} />
      <OyedeUnionActivities />
      <MeetingAndProjects />
    </div>
  );
};

export default Index;
