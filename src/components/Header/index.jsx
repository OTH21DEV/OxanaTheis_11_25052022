import { Link } from "react-router-dom";
import "../../styles/Header.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

function Header() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width:880px)").matches);

  useEffect(() => {
    window.matchMedia("(min-width: 880px)").addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Kasa" className="nav-logo" />
      </Link>

      <div className="nav-links">
        {matches && <Link to="/">Accueil</Link>}
        {!matches && <Link to="/">ACCUEIL</Link>}
        {matches && <Link to="/about">A Propos</Link>}
        {!matches && <Link to="/about">A PROPOS</Link>}
      </div>
    </div>
  );
}

export default Header;
