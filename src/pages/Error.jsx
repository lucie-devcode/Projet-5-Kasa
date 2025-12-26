import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "./Error.scss";

function Error() {
  return (
    <>
      <div className="error-page">
        <h1>404 </h1>
        <h2>Oops! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </>
  );
}

export default Error;
