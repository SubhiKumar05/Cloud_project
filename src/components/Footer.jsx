import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#556B2F",
        color: "#F5F5DC",
        textAlign: "center",
        padding: "15px 10px",
        margin: 0,
        borderTop: "1px solid #8B4000",
        boxSizing: "border-box",
      }}
    >
      <p style={{ margin: "5px 0" }}>
        © 2025 Berliner Diaries | All rights reserved
      </p>
      <p style={{ margin: "5px 0" }}>
        Follow us on:
        <a href="#" style={{ color: "#B87333", margin: "0 5px" }}>
          Instagram
        </a>
        |
        <a href="#" style={{ color: "#B87333", margin: "0 5px" }}>
          GitHub
        </a>
        |
        <a href="#" style={{ color: "#B87333", margin: "0 5px" }}>
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
