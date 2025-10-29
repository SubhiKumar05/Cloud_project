import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const places = [
  { title: "Neuschwanstein Castle", state: "Bavaria", image: "/images/Neuschwanstein.jpg", height: 300, width: 100, description: "Fairy-tale castle with scenic views." },
  { title: "Brandenburg Gate", state: "Berlin", image: "/images/brandenburg.jpg", height: 450, width: 100, description: "Iconic historical landmark." },
  { title: "Black Forest", state: "Baden-Württemberg", image: "/images/blackforest.jpg", height: 450, width: 100, description: "Dense forest known for its beauty." },
  { title: "Cologne Cathedral", state: "North Rhine-Westphalia", image: "/images/Cologne.jpg", height: 400, width: 100, description: "Gothic cathedral and UNESCO World Heritage site." },
  { title: "Heidelberg Castle", state: "Baden-Württemberg", image: "/images/heidelberg.jpeg", height: 280, width: 100, description: "Historic castle overlooking the Neckar River." },
  { title: "Oktoberfest, Munich", state: "Bavaria", image: "/images/Oktoberfest.jpg", height: 515, width: 100, description: "Famous beer festival attracting millions of visitors." },
  { title: "Hohenzollern Castle", state: "Baden-Württemberg", image: "/images/hohenzollern.jpg", height: 500, width: 100, description: "Majestic castle perched on a hilltop." },
  { title: "Miniatur Wunderland", state: "Hamburg", image: "/images/Wunderland.jpg", height: 280, width: 100, description: "Largest model railway exhibition in the world." },
  { title: "Rothenburg ob der Tauber", state: "Bavaria", image: "/images/image3.jpg", height: 420, width: 100, description: "Medieval town with well-preserved architecture." }
];

const foods = [
  { title: "Bratwurst", origin: "Germany", image: "/images/bratwurst.jpg", height: 250, width: 100, description: "Traditional German sausage often served with mustard and bread." },
  { title: "Pretzel", origin: "Bavaria", image: "/images/pretzel.jpg", height: 400, width: 100, description: "Soft, twisted bread commonly enjoyed as a snack." },
  { title: "Sauerbraten", origin: "Rhineland", image: "/images/sauerbraten.jpg", height: 530, width: 100, description: "Pot roast marinated in a mix of vinegar and spices." },
  { title: "Schwarzwälder Kirschtorte", origin: "Black Forest", image: "/images/blackforest-cake.jpg", height: 280, width: 100, description: "Famous Black Forest cherry cake with chocolate and cream." },
  { title: "Kartoffelsalat", origin: "Germany", image: "/images/kartoffelsalat.jpg", height: 455, width: 100, description: "Classic German potato salad, often served with sausages." },
  { title: "Rouladen", origin: "Germany", image: "/images/rouladen.jpg", height: 440, width: 100, description: "Beef rolls stuffed with bacon, onions, and pickles." },
  { title: "Spätzle", origin: "Swabia", image: "/images/spatzle.jpg", height: 500, width: 100, description: "Soft egg noodles, served as a side dish or main course." },
  { title: "Leberkäse", origin: "Bavaria", image: "/images/leberkase.jpg", height: 280, width: 100, description: "Baked meatloaf served in slices, popular street food." },
  { title: "Apfelstrudel", origin: "Germany/Austria", image: "/images/apfelstrudel.jpg", height: 400, width: 100, description: "Delicious apple-filled pastry dessert." }
];

const Tourist = () => {
  return (
    <>
      <Navbar />

      {/* Tourist Places */}
      <div className="tourist-gallery">
        <h2>Top Tourist Places in Germany</h2>
        <div className="intro">
          <p>
            Germany is a country rich in history, culture, and natural beauty. From the fairy-tale castles of Bavaria to bustling city landmarks and serene landscapes like the Black Forest, Germany offers a wide variety of attractions for travelers. Explore these top destinations to experience the charm, heritage, and adventure that make Germany a must-visit country in Europe.
          </p>
        </div>
        <div className="masonry">
          {places.map((place, index) => (
            <div className="masonry-item" key={index} style={{ height: `${place.height}px` }}>
              <img src={place.image} alt={place.title} />
              <div className="overlay">
                <h3>{place.title}</h3>
                <p className="state">{place.state}</p>
                <p className="description">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Famous German Foods */}
      <div className="tourist-gallery">
        <h2>Famous German Foods</h2>
        <div className="intro">
          <p>
            German cuisine offers a variety of flavors, from savory sausages to sweet pastries. Experience traditional dishes, local specialties, and iconic desserts that showcase the rich culinary heritage of Germany.
          </p>
        </div>
        <div className="masonry">
          {foods.map((food, index) => (
            <div className="masonry-item" key={index} style={{ height: `${food.height}px` }}>
              <img src={food.image} alt={food.title} />
              <div className="overlay">
                <h3>{food.title}</h3>
                <p className="state">{food.origin}</p>
                <p className="description">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      <style>{`
        .tourist-gallery {
          padding: 50px 20px;
          background-color: #f5f5f5;
        }

        .tourist-gallery h2 {
          text-align: center;
          font-size: 2.8rem;
          color: #5C4033;
          margin-bottom: 20px;
        }

        .intro {
          max-width: 900px;
          margin: 0 auto 50px auto;
          text-align: center;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          background: rgba(255, 255, 255, 0.95);
          padding: 20px 30px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        /* Masonry Layout */
        .masonry {
          column-count: 3;
          column-gap: 20px;
        }

        .masonry-item {
          position: relative;
          display: inline-block;
          width: 100%;
          margin-bottom: 20px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
          break-inside: avoid;
        }

        .masonry-item img {
          width: 100%;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          transition: transform 0.3s;
          height: 100%;
        }

        /* Hover Overlay */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          transform: translateY(100%);
          transition: transform 0.3s;
        }

        .masonry-item:hover .overlay {
          transform: translateY(0);
        }

        .overlay h3 {
          font-size: 1.7rem;
          margin: 0 0 10px 0;
          color: #FFD700;
        }

        .overlay .state {
          font-size: 1rem;
          margin: 5px 0;
          color: #ADFF2F;
        }

        .overlay .description {
          font-size: 1rem;
        }

        .masonry-item:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        .masonry-item:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .masonry {
            column-count: 2;
          }
        }

        @media (max-width: 768px) {
          .masonry {
            column-count: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Tourist;
