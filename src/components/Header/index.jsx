import { Link, NavLink } from "react-router-dom";
import "../../components/Header/Header.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

function Header() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width:880px)").matches);

  useEffect(() => {
    window.matchMedia("(min-width: 880px)").addEventListener("change", (e) => setMatches(e.matches));
  }, []);

//activeClassName props- use to identify the route is currently being visited.

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Kasa" className="nav-logo" />
      </Link>

      <div className="nav-links">
        {matches && (
          <NavLink className="nav-links__home" exact activeClassName="active" to="/">
            Accueil
          </NavLink>
        )}
        {!matches && (
          <NavLink className="nav-links__home" exact activeClassName="active" to="/">
            ACCUEIL
          </NavLink>
        )}
        {matches && (
          <NavLink className="nav-links__about" exact activeClassName="active" to="/about">
            A Propos
          </NavLink>
        )}
        {!matches && (
          <NavLink className="nav-links__about" exact activeClassName="active" to="/about">
            A PROPOS
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
