import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import "./Logement.scss";
import Carousel from "../Components/Carousel/Carousel.jsx";
// import Collapse from "../Components/Collapse/Collapse.jsx";

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
          {/* Partie gauche : titre, location, tags + rating */}
          <div className="logement-main">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>

            <div className="tags-rating">
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
          </div>

          {/* Partie droite : host */}
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </section>
      </div>

      {/* <section className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </section> */}
    </main>
  );
}

export default Logement;
