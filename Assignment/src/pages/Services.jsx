import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-list">
        <div className="service-item">
          <h3>Service 1</h3>
          <p>Details about service 1.</p>
        </div>
        <div className="service-item">
          <h3>Service 2</h3>
          <p>Details about service 2.</p>
        </div>
        <div className="service-item">
          <h3>Service 3</h3>
          <p>Details about service 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
