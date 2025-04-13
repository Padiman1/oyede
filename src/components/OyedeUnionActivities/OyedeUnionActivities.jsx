import React from "react";
import "./OyedeUnionActivities.css";

import event1 from "../../../assets/activities5.jpg";
import event2 from "../../../assets/activities3.jpg";
import event3 from "../../../assets/activities4.jpg";

const activities = [
  {
    title: "Oyede Annual General Meeting",
    date: "Date to be announced",

    image: event1,
  },
  {
    title: "Oyede Cultural Heritage Celebration",
    date: "Date to be announced",

    image: event2,
  },
  {
    title: "Oyede Charity Fundraising Gala",
    date: "Date to be announced",

    image: event3,
  },
];

const OyedeUnionActivities = () => {
  return (
    <section className="activities-page">
      <h2 className="activities-heading">
        Oyede Union <span style={{ color: "" }}>Activities</span>
      </h2>
      <p className="activities-sub">
        Preserving Culture, Strengthening Community
      </p>
      {/* <button className="mark-event-btn">Mark an Event</button> */}

      <div className="scroll-container">
        {activities.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>
                <>Date:</> {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OyedeUnionActivities;
