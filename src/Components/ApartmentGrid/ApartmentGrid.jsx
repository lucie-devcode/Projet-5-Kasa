import React from "react";
import "./ApartmentGrid.scss";
import logements from "../../data/logements.json";
import { Link } from "react-router-dom";

function ApartmentGrid() {
  return (
    <div className="apartment-grid-container">
      <div className="apartment-grid">
        {logements.map((logement) => (
          <Link
            to={`/logement/${logement.id}`}
            key={logement.id}
            className="apartment-card"
          >
            <img src={logement.cover} alt={logement.title} />
            <h3>{logement.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ApartmentGrid;
