import React from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>
      <div className="portfolio-gallery">
        <div className="portfolio-item">Project 1</div>
        <div className="portfolio-item">Project 2</div>
        <div className="portfolio-item">Project 3</div>
      </div>
    </div>
  );
};

export default Portfolio;
