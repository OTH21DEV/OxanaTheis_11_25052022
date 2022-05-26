import Header from "../Header/index";
import "../../styles/Error.css"
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Header></Header>
      <div className="title">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className="title-link">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
