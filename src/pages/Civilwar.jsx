import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const timelineEvents = [
  {
    year: "1815–1840s",
    title: "Early Political Tensions in German States",
    description: [
      "After the Napoleonic Wars, the Congress of Vienna (1815) created the German Confederation — a loose alliance of 39 states dominated by Austria.",
      "Many Germans sought national unity and democratic reforms, but conservative monarchies suppressed press freedom and public assemblies.",
      "Student societies (Burschenschaften) and secret reformist groups emerged, laying ideological foundations for later revolutions.",
      "Industrialization widened the gap between classes, while peasants and workers faced severe hardship, fueling unrest."
    ],
    image: "/images/image17.jpg",
  },
  {
    year: "1848",
    title: "Revolutions of 1848 (March Revolutions)",
    description: [
      "The revolutions of 1848 swept across Europe, driven by liberal and nationalist ideals.",
      "In the German states, citizens demanded constitutions, freedom of speech, and national unity.",
      "The Frankfurt Parliament convened to draft a constitution, aiming for a unified democratic Germany under Prussian leadership.",
      "Despite passionate debate, divisions between liberals, conservatives, and radicals led to the parliament’s collapse.",
      "Although the revolution failed, it deeply influenced Germany’s future political consciousness."
    ],
    image: "/images/image18.jpg",
  },
  {
    year: "1850s–1860s",
    title: "Bismarck and Prussian Consolidation",
    description: [
      "After the failed revolutions, Prussia rose as a dominant power under Otto von Bismarck.",
      "Appointed in 1862, Bismarck practiced Realpolitik — pragmatic politics over ideology — to unify Germany through strength.",
      "He strengthened the military, modernized infrastructure, and used diplomacy to outmaneuver rivals.",
      "Economic growth through the Zollverein (customs union) united states economically before political unification."
    ],
    image: "/images/image19.jpg",
  },
  {
    year: "1864",
    title: "Second Schleswig War",
    description: [
      "Prussia and Austria allied to defeat Denmark over control of Schleswig and Holstein.",
      "The Treaty of Vienna granted Prussia control of Schleswig, while Austria received Holstein.",
      "This victory bolstered Prussia’s prestige and prepared the stage for its confrontation with Austria."
    ],
    image: "/images/image20.jpeg",
  },
  {
    year: "1866",
    title: "Austro–Prussian War (Seven Weeks’ War)",
    description: [
      "Conflict erupted between Austria and Prussia for control of the German Confederation.",
      "Prussia’s modernized army decisively defeated Austria at the Battle of Königgrätz.",
      "The North German Confederation replaced the old German Confederation, excluding Austria — a crucial step toward unification."
    ],
    image: "/images/aus-prussian-war.jpg",
  },
  {
    year: "1870–1871",
    title: "Franco–Prussian War and German Unification",
    description: [
      "France declared war on Prussia after the Ems Dispatch incident, uniting the German states under a common enemy.",
      "After Prussia’s swift victory, Napoleon III was captured, and the German Empire was proclaimed in the Hall of Mirrors at Versailles in 1871.",
      "Germany’s unification under Kaiser Wilhelm I marked the birth of a new European power."
    ],
    image: "/images/franco-prussian.jpg",
  },
  {
    year: "Post–1871",
    title: "Aftermath and Nation-Building",
    description: [
      "Following unification, Germany underwent rapid industrialization and urban expansion.",
      "Bismarck implemented pioneering social reforms such as health insurance and pensions to maintain stability.",
      "Nationalism became central to German identity, but growing militarism later set the stage for future global conflicts."
    ],
    image: "/images/image21.jpg",
  },
  {
    year: "1945",
    title: "End of World War II and Division of Germany",
    description: [
      "Germany’s defeat in World War II left the country devastated and occupied by Allied forces.",
      "It was divided into four zones: American, British, French, and Soviet.",
      "Berlin, located within the Soviet zone, was also split, symbolizing the beginning of Cold War tensions."
    ],
    image: "/images/image22.jpg",
  },
  {
    year: "1949",
    title: "Formation of East and West Germany",
    description: [
      "Political differences solidified into division: the Federal Republic of Germany (West) and the German Democratic Republic (East).",
      "The West adopted democratic capitalism, while the East followed socialist policies under Soviet control.",
      "The two Germanys became ideological battlegrounds during the Cold War."
    ],
    image: "/images/image23.jpg",
  },
  {
    year: "1961",
    title: "Construction of the Berlin Wall",
    description: [
      "East Germany built the Berlin Wall to halt mass emigration to the West.",
      "Families were torn apart, and the wall stood as a symbol of Cold War division for nearly three decades."
    ],
    image: "/images/berlin-wall.jpg",
  },
  {
    year: "1961–1989",
    title: "Life in a Divided Germany",
    description: [
      "West Germany experienced an ‘economic miracle’ and became a global industrial power.",
      "East Germany, under strict state control, faced shortages and surveillance by the Stasi secret police.",
      "Despite repression, East Germans preserved culture, solidarity, and hope for freedom."
    ],
    image: "/images/image24.jpg",
  },
  {
    year: "1989",
    title: "Fall of the Berlin Wall",
    description: [
      "Amid political pressure and public protests, East Germany’s government opened its borders in November 1989.",
      "Citizens from both sides dismantled the wall, celebrating unity and freedom.",
      "The event symbolized the end of the Cold War in Europe."
    ],
    image: "/images/image16.jpg",
  },
  {
    year: "1990",
    title: "Reunification of Germany",
    description: [
      "On October 3, 1990, East and West Germany officially reunified, restoring a single democratic nation.",
      "Economic integration and political restructuring followed, shaping modern Germany’s success as a global leader."
    ],
    image: "/images/image9.jpg",
  },
];

const GermanyTimeline = () => {
  return (
    <>
      <Navbar />
      <div className="timeline-page">
        <div className="timeline-container">
          <h2>Germany: From Civil Unrest to Modern Reunification</h2>

          <p className="intro-text">
            Germany’s transformation from fragmented principalities to a unified modern democracy
            reflects centuries of struggle, resilience, and innovation. Each milestone in its history
            highlights the nation’s evolution through revolution, diplomacy, and unity.
          </p>

          {timelineEvents.map((event, index) => (
            <div className="timeline-item" key={index}>
              <img src={event.image} alt={event.title} className="timeline-image" />
              <div className="timeline-text">
                <h3>{event.year}</h3>
                <h4>{event.title}</h4>
                {event.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}

          <p className="conclusion-text">
            Today, Germany stands united — a democracy founded on lessons from its turbulent past.
            Its story of division and unity continues to inspire the values of freedom, resilience,
            and human rights across the world.
          </p>
        </div>
      </div>
      <Footer />

      <style>{`
        body, html, #root {
          margin: 0;
          height: 100%;
          font-family: 'Poppins', sans-serif;
          background-color: #f5f5dc;
        }

        .timeline-page {
          background-image: url('/images/civilwar.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          min-height: 100vh;
        }

        .timeline-page::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(107, 66, 38, 0.4);
        }

        .timeline-container {
          position: relative;
          z-index: 1;
          padding: 80px 8%;
          color: #2f1d12;
        }

        .timeline-container h2 {
          text-align: center;
          font-size: 2.8rem;
          color: white;
          margin-bottom: 40px;
        }

        .intro-text, .conclusion-text {
          text-align: justify;
          background-color: rgba(255,255,255,0.8);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          margin-bottom: 40px;
          line-height: 1.8;
        }

        .timeline-item {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          background-color: rgba(255,255,255,0.9);
          margin-bottom: 40px;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .timeline-item:hover {
          transform: scale(1.02);
        }

        .timeline-image {
          flex: 1 1 40%;
          max-width: 400px;
          border-radius: 12px;
          margin-right: 25px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .timeline-text {
          flex: 1 1 55%;
        }

        .timeline-text h3 {
          color: #8b4000;
          font-size: 1.4rem;
          margin-bottom: 5px;
        }

        .timeline-text h4 {
          font-size: 1.6rem;
          color: #654321;
          margin-bottom: 10px;
        }

        .timeline-text p {
          font-size: 1rem;
          line-height: 1.7;
          color: #333;
          text-align: justify;
        }

        @media (max-width: 900px) {
          .timeline-item {
            flex-direction: column;
          }
          .timeline-image {
            margin-right: 0;
            margin-bottom: 20px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default GermanyTimeline;
