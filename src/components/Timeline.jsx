import React from "react";

const Timeline = ({ events }) => {
  return (
    <div style={{ borderLeft: "3px solid #B87333", marginLeft: "20px", paddingLeft: "20px" }}>
      {events.map((event, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3 style={{ color: "#8B4000" }}>{event.year}</h3>
          <p style={{ color: "#333333" }}>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
