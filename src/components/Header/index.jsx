import { Link } from "react-router-dom";
import "../../styles/Header.css"
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="nav">
         <Link to="/">
      <img src={logo} alt="Kasa" className="nav-logo"/></Link>

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </div>
  );
}

export default Header;
