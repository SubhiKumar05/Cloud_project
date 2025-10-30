import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Full Page Section */}
      <section className="about-hero">
        <div className="overlay">
          <div className="about-container">
            {/* Left Side Text */}
            <div className="about-text">
              <h1>About Me & My Journey</h1>
              <p>Hallo! This is Subhi Kumar</p>
              <p>
                I’m a passionate explorer and tech enthusiast who finds inspiration
                in Germany’s blend of culture, innovation, and history. 
                This blog reflects my love for storytelling — merging travel, 
                creativity, and technology into a digital experience.
              </p>
              <p>
                Through this space, I aim to inspire others to explore Germany’s 
                unique landscapes, learn its history, and experience its 
                modern wonders — all built with React and deployed on Vercel.
              </p>
              <p>
  Vielen Dank für deinen Besuch , Auf Wiedersehen und bis bald !(Thank you for visiting, See you soon!)
  
</p>
              

            </div>

            {/* Right Side Image */}
           
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #fdfaf6;
        }

        /* Background Image */
        .about-hero {
          background-image: url('/images/image26.jpg');
          background-size: cover;
          background-position: center;
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Full-page opaque layer */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(9, 9, 9, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 1s ease;
        }

        /* Container inside opaque layer */
        .about-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 85%;
          max-width: 1300px;
        }

        /* Left side text */
        .about-text {
          flex: 1;
          min-width: 300px;
          padding-right: 40px;
        }

        .about-text h1 {
          color: #f4f5e5ff;
          font-size: 2.8rem;
          margin-bottom: 20px;
        }

        .about-text p {
          color: #f4f5e5ff;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 15px;
          text-align: justify;
        }

        .about-text strong {
          color: #A0522D;
        }

        /* Right side image */
        .about-side-image {
          flex: 1;
          min-width: 280px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-side-image img {
          width: 90%;
          max-width: 450px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          transition: transform 0.4s ease;
        }

        .about-side-image img:hover {
          transform: scale(1.05);
        }

        /* Contact Button */
        .contact-btn {
          margin-top: 25px;
          padding: 12px 28px;
          background-color: #8B4000;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .contact-btn:hover {
          background-color: #5C4033;
          transform: scale(1.05);
        }

        /* Animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .about-container {
            flex-direction: column;
            text-align: center;
          }

          .about-text {
            padding-right: 0;
          }

          .about-side-image img {
            margin-top: 30px;
            width: 100%;
            max-width: 350px;
          }
        }
      `}</style>
    </>
  );
};

export default About;
