import React from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Isaac Ukeleghe",
    role: "Secretary",
    image: "../../assets/hero4.jpg", // Replace with actual image URL
  },
  {
    name: "Manasse Obibi",
    role: "Finance",
    image: "../../assets/hero4.jpg", // Replace with actual image URL
  },
  {
    name: "Julius Odoh",
    role: "Chairman",
    image: "../../assets/hero4.jpg", // Replace with actual image URL
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <div className="team-member-info">
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;