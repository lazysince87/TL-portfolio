import React from "react";
import "./porfolio.css";

const Porfolio = () => {
  return (
    <section className="porfolio container section">
      <h1 className="section_title">my latest work</h1>
      <div className="on_progress">
        <h2>in progress...</h2>
      </div>
      
      <div className="star-container">
        <div className="shooting-star">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="shooting-star-2">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

    </section>
  );
};

export default Porfolio;
