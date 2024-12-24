import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>We are committed to delivering the best services to our customers.</p>
      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">Member 1</div>
          <div className="team-member">Member 2</div>
          <div className="team-member">Member 3</div>
        </div>
      </div>
    </div>
  );
};

export default About;
