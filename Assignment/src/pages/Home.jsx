import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your needs</p>
        <button className="cta-button">Learn More</button>
      </header>
      <section className="features">
        <h2>What We Offer</h2>
        <div className="feature-list">
          <div className="feature-item">Feature 1</div>
          <div className="feature-item">Feature 2</div>
          <div className="feature-item">Feature 3</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
