import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";

import img_xl from "../../assets/image_xl.png";
import img_xs from "../../assets/image_xs.png";
import "../../styles/About.css";

function About() {
  const firstDropdown =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const secondDropdown =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const thirdDropdown = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const forthDropdown =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  const [matches, setMatches] = useState(window.matchMedia("(min-width:376px)").matches);
  useEffect(() => {
    window.matchMedia("(min-width: 376px)").addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div>
      <Header></Header>

      {matches && <img src={img_xl} alt="Mountain" className="img" />}
      {!matches && <img src={img_xs} alt="Mountain" className="img" />}

      <section className="wrapper-dropdowns">
        <Dropdown title="Fiabilité" container="dropdown-reliability" content={firstDropdown}></Dropdown>
        <Dropdown title="Respect" container="dropdown-respect" content={secondDropdown}></Dropdown>
        <Dropdown title="Service" container="dropdown-service" content={thirdDropdown}></Dropdown>
        <Dropdown title="Sécurité" container="dropdown-security" content={forthDropdown}></Dropdown>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default About;
