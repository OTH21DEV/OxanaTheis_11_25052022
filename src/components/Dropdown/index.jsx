import arrow_down from "../../assets/arrow.svg";
import "../../styles/Dropdown.css";

function Dropdown() {
  return (
    <div>
      <div className="dropdown-title">
        <h3>Fiabilité</h3>
        <img src={arrow_down} alt="Arrow down" />
      </div>
    </div>
  );
}

export default Dropdown;
