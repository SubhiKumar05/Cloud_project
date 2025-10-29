import React from "react";

const Card = ({ title, image, description }) => {
  return (
    <div style={{
      border: "1px solid #B87333",
      borderRadius: "10px",
      overflow: "hidden",
      margin: "10px",
      width: "250px",
      boxShadow: "2px 2px 10px #888"
    }}>
      <img src={image} alt={title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <div style={{ padding: "10px" }}>
        <h3 style={{ color: "#8B4000" }}>{title}</h3>
        <p style={{ color: "#333333" }}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
