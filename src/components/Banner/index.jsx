import img from "../../assets/img.png";
import "../Banner/Banner.css"

function Banner() {
  return (
    <div className="banner">
      <img src={img} alt="Paysage" />
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
