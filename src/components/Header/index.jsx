import { Link, NavLink } from "react-router-dom";
import "../../components/Header/Header.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

function Header() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width:880px)").matches);

  useEffect(() => {
    window.matchMedia("(min-width: 880px)").addEventListener("change", (e) => setMatches(e.matches));
  }, []);

//NavLink - use to identify the route is currently being visited.

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Kasa" className="nav-logo" />
      </Link>

      <div className="nav-links">
        {matches && (
          <NavLink className= {({ isActive }) => isActive? "active": 'nav-links__home'} to="/">
            Accueil
          </NavLink>
        )}
        {!matches && (
          <NavLink  className= {({ isActive }) => isActive? "active": 'nav-links__home'} to="/">
            ACCUEIL
          </NavLink>
        )}
        {matches && (
          <NavLink className= {({ isActive }) => isActive? "active": 'nav-links__about'} to="/about">
            A Propos
          </NavLink>
        )}
        {!matches && (
          <NavLink className={({ isActive }) => isActive? "active": 'nav-links__about'} to="/about">
            A PROPOS
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
