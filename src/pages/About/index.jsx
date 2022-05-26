import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import img from "../../assets/img_about.png";
import "../../styles/About.css";

function About() {
  return (
    <div>
      <Header></Header>
    
      <img src={img} alt="Mountain" className="img" />
      <Dropdown></Dropdown>
    </div>
  );
}

export default About;
