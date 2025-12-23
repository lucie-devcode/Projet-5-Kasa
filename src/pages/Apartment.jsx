import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements.json";

function Apartment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find((log) => log.id === id);

  if (!logement) {
    navigate("/404", { replace: true });
    return null;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
    </div>
  );
}

export default Apartment;
