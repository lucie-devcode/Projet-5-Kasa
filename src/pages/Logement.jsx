import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
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
      <Carousel pictures={logement.pictures} />

      <section className="logement-header">
        <div className="logement-main">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </section>

      {/* <section className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </section> */}
    </main>
  );
}

export default Logement;
