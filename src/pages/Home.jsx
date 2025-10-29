import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const highlights = [
  {
    title: "Rich History",
    image: "/images/image2.jpg",
    description:
      "Discover Germany’s journey through centuries of culture, conflicts, and unification.",
  },
  {
    title: "Tourist Attractions",
    image: "/images/image3.jpg",
    description:
      "Explore famous landmarks like Neuschwanstein Castle, Brandenburg Gate, and the Black Forest.",
  },
  {
    title: "Cultural Festivals",
    image: "/images/image4.jpg",
    description:
      "Experience unique events like Oktoberfest and Christmas markets.",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Inline CSS */}
      <style>{`
      
        .home-container {
          padding-top: 80px;
          padding-bottom: 60px;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          text-align: center;
        }

        .hero-image {
          width: 100%;
          height: 90vh;
          object-fit: cover;
          filter: brightness(70%);
        }

        .hero-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #f5f5dc;
          text-align: center;
          padding: 20px 40px;
          background: rgba(85, 107, 47, 0.7);
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          animation: fadeIn 2s ease;
        }

        .hero-text h1 {
          font-size: 3.2rem;
          color: #ffd39b;
          margin-bottom: 10px;
        }

        .hero-text p {
          font-size: 1.3rem;
          max-width: 800px;
          margin: 0 auto;
        }

        /* About Section */
        .about-section {
          padding: 60px 20px;
          background-color: #f5f5dc;
          text-align: center;
        }

        .about-section h2 {
          color: #8b4000;
          margin-bottom: 20px;
          font-size: 2rem;
        }

        .about-section p {
          max-width: 900px;
          margin: 0 auto;
          color: #333;
          font-size: 1.15rem;
          line-height: 1.8;
        }

        /* Highlights */
        .highlight-section {
          padding: 60px 20px;
          background: linear-gradient(180deg, #ede6d6 0%, #fff9e6 100%);
          text-align: center;
        }

        .highlight-section h2 {
          color: #8b4000;
          margin-bottom: 40px;
          font-size: 2rem;
        }

        .highlight-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
        }

        /* Quote Section */
        .quote-section {
          padding: 60px 20px;
          background-color: #f0e5cf;
          text-align: center;
          font-style: italic;
        }

        .quote-section p {
          font-size: 1.4rem;
          color: #556b2f;
          max-width: 800px;
          margin: 0 auto;
        }

        /* CTA Section */
        .cta-section {
    background-color: #556B2F;
    color: #F5F5DC;
    text-align: center;
    padding-top: 60px;
    padding-bottom: 0; /* remove extra bottom padding */
    margin: 0; /* remove default margin */
  }

        .cta-section h2 {
          margin-bottom: 20px;
          color: #ffd39b;
          font-size: 2rem;
        }

        .cta-section p {
          margin-bottom: 25px;
          font-size: 1.15rem;
          max-width: 700px;
          margin: 0 auto 25px;
        }

        .cta-button {
          padding: 12px 28px;
          background-color: #b87333;
          color: #f5f5dc;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #8b4000;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .hero-text h1 {
            font-size: 2.6rem;
          }
          .hero-text p {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-image {
            height: 70vh;
          }
          .hero-text {
            width: 85%;
            padding: 15px;
          }
          .hero-text h1 {
            font-size: 2rem;
          }
          .hero-text p {
            font-size: 1rem;
          }
          .highlight-container {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-image {
            height: 60vh;
          }
          .hero-text h1 {
            font-size: 1.7rem;
          }
          .hero-text p {
            font-size: 0.9rem;
          }
          .about-section p,
          .cta-section p {
            font-size: 1rem;
            line-height: 1.6;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -60%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}</style>

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <img src="/images/image25.jpg" alt="Germany" className="hero-image" />
          <div className="hero-text">
            <h1>Willkommen in Deutschland 🇩🇪</h1>
            <p>
              Journey through Germany’s legacy, its culture, resilience, and breathtaking beauty.
            </p>
          </div>
        </section>

        {/* About Section */}
<section className="about-section">
  <h2>Overview of Germany</h2>
  <p>
    Germany, located in the heart of Europe, is a country rich in history, culture, and natural beauty. 
    Known for its medieval castles, vibrant cities, and scenic landscapes, it has played a pivotal role 
    in shaping European history. From the bustling streets of Berlin to the fairy-tale castles of Bavaria, 
    Germany offers a blend of tradition and modernity. Its festivals, cuisine, and cultural landmarks attract 
    millions of visitors every year, making it a fascinating destination to explore.
  </p>
</section>


        {/* Highlights Section */}
        <section className="highlight-section">
          <h2>Highlights</h2>
          <div className="highlight-container">
            {highlights.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <p>
            “Germany is a place of ideas where history breathes, culture thrives, and innovation never rests.”
          </p>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Start Exploring Germany</h2>
          <p>
            Navigate through our pages to learn about Germany’s history, civil wars, and its most enchanting travel destinations.
          </p>
          <a href="/tourist" className="cta-button">
            Explore Tourist Places
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
