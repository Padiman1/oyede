import React, { useEffect, useRef } from "react";
import "./OurTeam.css"; // Import the CSS file for styling
import Isaac from "../../assets/isaac.jpg";
import Manasse from "../../assets/manasse.jpg";
import Odoh from "../../assets/odoh.jpg";
const teamMembers = [
  {
    name: "Isaac Ukeleghe",
    role: "Secretary",
    image: Isaac, // Replace with actual image URL
    bio: "Isaac Ukeleghe is a highly skilled secretary with experience in managing administrative tasks and ensuring smooth operations. He plays a pivotal role in coordinating communication within the team and providing organizational support. Isaac's attention to detail and dedication make him an essential part of our team.",
  },
  {
    name: "Manasse Obibi",
    role: "Finance",
    image: Manasse, // Replace with actual image URL
    bio: "Manasse Obibi is a finance expert with a deep understanding of budgeting, financial planning, and resource management. He oversees the financial operations and ensures that funds are allocated efficiently. His analytical skills and strategic thinking help steer the company toward its financial goals.",
  },
  {
    name: "Julius Odoh",
    role: "Chairman",
    image: Odoh, // Replace with actual image URL
    bio: "Julius Odoh is the chairman of the team, bringing years of leadership experience. As a visionary and strategic leader, he guides the direction of the company and makes key decisions that affect the company's future. Julius's leadership is characterized by his strong focus on innovation and growth.",
  },
];

const OurTeam = () => {
  const overlayRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-content");
          } else {
            entry.target.classList.remove("show-content");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the item is in view
    );

    overlayRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      overlayRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="our-team">
      <h2 className="section-header-teams">Our Team</h2>
      <p className="section-paragraph-teams">Profiles of Key Team Members</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            className="team-member"
            key={index}
            ref={(el) => (overlayRefs.current[index] = el)}
          >
            <div className="team-member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
