import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import "./Logement.scss";
import Carousel from "../Components/Carousel/Carousel.jsx";
import Collapse from "../Components/Collapse/Collapse.jsx";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((log) => log.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="logement">
      <div className="logement-container">
        <Carousel pictures={logement.pictures} />

        <section className="logement-header">
          {/* Ligne 1 : titre/location à gauche, host à droite */}
          <div className="header-top">
            <div className="title-location">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>

            <div className="host">
              <div className="host-name">
                {logement.host.name.split(" ").map((n, i) => (
                  <p key={i}>{n}</p>
                ))}
              </div>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>

          {/* Ligne 2 : tags à gauche, rating à droite */}
          <div className="header-bottom">
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={index < logement.rating ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="logement-details">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>

          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          </Collapse>
        </section>
      </div>
    </main>
  );
}

export default Logement;
