import React from "react";
import "./MeetingAndProjects.css";
import meetingImg from "../../../assets/congress.jpeg"; // Replace with your actual path
import projectsImg from "../../../assets/congress1.jpg"; // Replace with your actual path

const MeetingAndProjects = () => {
  return (
    <div className="about-page">

      <section className="about-section">
        <div className="about-image">
          <img src={meetingImg} alt="Who We Are" />
        </div>

        <div className="about-text">
          <h2 className="section-heading">Meeting Updates</h2>
          <p className="section-subtitle">Recent Meeting Highlights</p>
          <p className="bold-title">March 2025 General Meeting</p>
          <p>
            <strong>Location:</strong> Zoom
          </p>
          <p>
            <strong>Attendance:</strong> +-25 members
          </p>
          <p>
            <strong>Key decisions:</strong>
          </p>
          <ul>
            <li>Approval of new welfare contributions</li>
            <li>Planning for major upcoming events</li>
            <li>Launch of OIU online platform</li>
          </ul>
          <div className="buttons">
            <button className="primary-btn">Download Full Minutes</button>
            <button className="outline-btn">Past Meetings Archive</button>
          </div>
        </div>
      </section>

     
      <section
        className="about-section-reverse"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="about-text">
          <h2 className="section-heading">Projects</h2>
          <p className="section-subtitle">
            We believe in development through action. Here are some of our
            ongoing and completed projects:
          </p>
          <p>
            <strong>Ongoing Projects:</strong>
          </p>
          <ul>
            <li>Scholarship Program for Oyede students</li>
            <li>Medical Outreach – Partnership with local clinics</li>
          </ul>
          <p>
            <strong>Completed Projects:</strong>
          </p>
          <ul>
            <li>Installation of solar lights in Oyede/Bethel Road</li>
          </ul>
          <div className="buttons">
            <button className="primary-btn">Support a Project</button>
            <button className="outline-btn">See More</button>
          </div>
        </div>

        <div className="about-image">
          <img src={projectsImg} alt="Who We Are" />
        </div>
      </section>
    </div>
  );
};

export default MeetingAndProjects;
