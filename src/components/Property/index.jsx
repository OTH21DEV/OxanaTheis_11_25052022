import "../../components/Property/Property.css";
import { Link } from "react-router-dom";



function Property(props) {
  
  return (
    <section className="properties">
      <div className="property-wrapper">
        {props.value.map((property, index) => (
          <div className="property" key={index}>
            <Link to={`/property/${property.id}`}>
              <img className="property__img" src={property.cover} key={index} alt="" />
            </Link>
            <h3 className="property__title" key={index}>
              {property.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Property;
