import arrow_down from "../../assets/arrow.svg";
import "../Dropdown/Dropdown.css";

function Dropdown(props) {
  function handleClick() {
    const dropdownTexte = document.querySelector(`.${props.container} .dropdown-texte`);
    const arrow = document.querySelector(`.${props.container} .dropdown-arrow_down`);
    const container = document.querySelector(`.${props.container}`);

    if (arrow.dataset.open === "false") {
      dropdownTexte.classList.add("dropdown-texte--onclick");
      arrow.setAttribute("data-open", "true");
      arrow.classList.add("dropdown-arrow_down--onclick");
      container.classList.add("dropdown-container--onclick");
    } else {
      dropdownTexte.classList.remove("dropdown-texte--onclick");
      arrow.setAttribute("data-open", "false");
      arrow.classList.remove("dropdown-arrow_down--onclick");
      container.classList.remove("dropdown-container--onclick");
    }
  }

  return (
    <div className={props.container}>
      <h3 className="dropdown-title">{props.title}</h3>
      <img src={arrow_down} alt="Arrow down" className="dropdown-arrow_down" data-open="false" onClick={handleClick} />
      <div className="dropdown-texte">{props.content}</div>
    </div>
  );
}

export default Dropdown;
