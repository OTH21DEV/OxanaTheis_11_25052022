import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import img from "../../assets/img_about.png";
import "../../styles/About.css";

function About() {
  const firstDropdown = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  const secondDropdown = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const thirdDropdown = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  const forthDropdown = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  return (
    <div>
      <Header></Header>
      <img src={img} alt="Mountain" className="img" />
      <Dropdown title ="Fiabilité" container ="test" content = {firstDropdown}></Dropdown>
      <Dropdown title ="Respect" container ="test2" content = {secondDropdown}></Dropdown>
      <Dropdown title ="Service"container ="test3" content = {thirdDropdown}></Dropdown>
      <Dropdown title ="Sécurité"container ="test4" content = {forthDropdown}></Dropdown>
      <Footer></Footer>
    </div>
  );
}

export default About;
