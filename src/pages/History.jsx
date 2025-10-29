import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = [
  { 
    year: "800 AD", 
    title: "Formation of the Holy Roman Empire",
    description: "On December 25, 800 AD, Charlemagne, King of the Franks, was crowned Emperor of the Romans by Pope Leo III in Rome. This marked the beginning of the Holy Roman Empire, a loose confederation of territories in Central Europe, primarily in modern-day Germany and Austria. It symbolized the union of church and state, intertwining political and religious authority.",
    image: "/images/image5.jpg"
  },
  { 
    year: "1356", 
    title: "Golden Bull of 1356",
    description: "The Golden Bull, issued by Emperor Charles IV, regulated the election of the Holy Roman Emperor and stabilized the empire's political framework for centuries.",
    image: "/images/image10.jpg"
  },
  { 
    year: "1517", 
    title: "Martin Luther & the Reformation",
    description: "Martin Luther published his Ninety-Five Theses, sparking the Protestant Reformation and transforming Germany’s religious, cultural, and political landscape.",
    image: "/images/image11.jpg"
  },
  { 
    year: "1648", 
    title: "End of the Thirty Years' War",
    description: "The Peace of Westphalia ended the Thirty Years' War, giving German states political and religious autonomy and shaping the future map of Germany.",
    image: "/images/image12.jpg"
  },
  { 
    year: "1871", 
    title: "Unification of Germany under Prussian Leadership",
    description: "After the Franco-Prussian War, German states united under Prussia. Otto von Bismarck's diplomacy and military strategy made Germany a major European power.",
    image: "/images/image6.jpg"
  },
  { 
    year: "1914-1918", 
    title: "Germany in World War I",
    description: "Germany fought on multiple fronts, with trench warfare causing massive casualties. Defeat led to Kaiser Wilhelm II's abdication and the Weimar Republic's formation.",
    image: "/images/image7.jpg"
  },
  { 
    year: "1923", 
    title: "Hyperinflation Crisis",
    description: "The Weimar Republic faced economic collapse, wiping out savings and fueling social unrest, paving the way for extremist movements.",
    image: "/images/image13.jpg"
  },
  { 
    year: "1933", 
    title: "Rise of Adolf Hitler and the Nazi Party",
    description: "Hitler became Chancellor; the Nazis established totalitarian rule, dismantling democracy and setting the stage for WWII and the Holocaust.",
    image: "/images/image14.jpg"
  },
  { 
    year: "1939-1945", 
    title: "Germany in World War II",
    description: "Germany invaded Poland and much of Europe, using blitzkrieg tactics. The Holocaust caused millions of deaths. Germany surrendered in 1945.",
    image: "/images/image8.jpg"
  },
  { 
    year: "1949", 
    title: "Division of Germany",
    description: "Germany was divided into West and East Germany, marking the start of the Cold War in Europe.",
    image: "/images/image15.jpg"
  },
  { 
    year: "1989", 
    title: "Fall of the Berlin Wall",
    description: "The Berlin Wall fell, allowing free movement and paving the way for reunification of Germany.",
    image: "/images/image16.jpg"
  },
  { 
    year: "1990", 
    title: "Reunification of East and West Germany",
    description: "East and West Germany officially reunited on October 3, 1990, forming a unified nation and a leading European power.",
    image: "/images/image9.jpg"
  }
];

const History = () => {
  return (
    <>
      <Navbar />

      <style>{`
        /* Full-page fixed background */
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-image: url('/images/history.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        /* Full-page opaque overlay */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(107, 142, 35, 0.4);
          z-index: 0;
        }

        .history-container {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1; /* content above overlay */
        }

        .history-container h2 {
          text-align: center;
          color:white;
          font-size: 2.8rem;
          margin-bottom: 50px;
        }

        .timeline {
          position: relative;
          margin: 0;
          padding: 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background-color: #b87333;
        }

        .event {
          position: relative;
          width: 50%;
          padding: 20px 40px;
          box-sizing: border-box;
        }

        .event.left {
          left: 0;
          text-align: right;
        }

        .event.right {
          left: 50%;
          text-align: left;
        }

        .event::before {
          content: '';
          position: absolute;
          top: 20px;
          width: 20px;
          height: 20px;
          background-color: #ffd39b;
          border: 4px solid #b87333;
          border-radius: 50%;
          z-index: 1;
        }

        .event.left::before {
          right: -10px;
        }

        .event.right::before {
          left: -10px;
        }

        .event-content {
          background-color: #f5f5dc;
          padding: 15px 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .event-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        .event-image {
          width: 100%;
          max-width: 350px;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .event-year {
          font-weight: bold;
          color: #556b2f;
          font-size: 1.2rem;
          margin-bottom: 5px;
        }

        .event-title {
          font-weight: bold;
          color: #b87333;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .event-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
        }

        @media (max-width: 768px) {
          .event, .event.left, .event.right {
            width: 100%;
            text-align: left;
            padding-left: 60px;
            padding-right: 30px;
          }

          .event::before {
            left: 30px;
            right: auto;
          }

          .timeline::before {
            left: 30px;
          }

          .event-image {
            max-width: 100%;
          }
        }
      `}</style>

      {/* Full-page overlay */}
      <div className="overlay"></div>

      <div className="history-container">
        <h2>Germany History Timeline</h2>
        <div className="timeline">
          {events.map((event, index) => (
            <div className={`event ${index % 2 === 0 ? "left" : "right"}`} key={index}>
              <div className="event-content">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-year">{event.year}</div>
                <div className="event-title">{event.title}</div>
                <div className="event-description">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default History;
