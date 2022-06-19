import { Link, useLocation } from "react-router-dom";
import "../../components/Header/Header.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

function Header() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width:880px)").matches);

  useEffect(() => {
    window.matchMedia("(min-width: 880px)").addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const location = useLocation();

  useEffect(() => {
    let linkAbout = document.querySelector(".nav-links__about");
    let linkHome = document.querySelector(".nav-links__home");
    if (location.pathname === "/") {
      linkHome.classList.add("nav-links__underline");
      linkAbout.classList.add("nav-links__without-underline");
    }
    if (location.pathname === "/about") {
      linkAbout.classList.add("nav-links__underline");
      linkHome.classList.remove("nav-links__underline");
      linkHome.classList.add("nav-links__without-underline");
    }
  }, [location]);

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Kasa" className="nav-logo" />
      </Link>

      <div className="nav-links">
        {matches && (
          <Link className="nav-links__home" to="/">
            Accueil
          </Link>
        )}
        {!matches && (
          <Link className="nav-links__home" to="/">
            ACCUEIL
          </Link>
        )}
        {matches && (
          <Link className="nav-links__about" to="/about">
            A Propos
          </Link>
        )}
        {!matches && (
          <Link className="nav-links__about" to="/about">
            A PROPOS
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
