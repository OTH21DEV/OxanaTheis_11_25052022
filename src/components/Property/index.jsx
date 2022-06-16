import "../../styles/Property.css";
import { Link } from "react-router-dom";

//import { PropertiesContext } from "../useContext/propertiesContext";
//import React, { useContext} from "react";

function Property(props) {
  //test de useContext

  //const [properties,setProperties] = useContext(PropertiesContext)

  //............................
  //test appel de useEffect ici
  /*
  
  const linkToJson = "data/logements.json";

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var data = await fetch(linkToJson).then((res) => {
        return res.json();
      });
      //console.log(data);
      setProperties(data);
      console.log(data);
    }
    fetchData();
  }, []);


  return (
    <div>
      {properties.map((property, index) => (
        <div className="property">
          <Link to={`/property/${property.id}`}>
            <img className="property__img" src={property.cover} key={index} alt="" />
          </Link>

          <h3 className="property__title">{property.title}</h3>
        </div>
      ))}
    
    </div>
  );

  */

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
