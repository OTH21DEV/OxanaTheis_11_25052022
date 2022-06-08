import "../../styles/Property.css";
import { Link } from "react-router-dom";


import { PropertiesContext } from "../useContext/propertiesContext";
import React, { useContext} from "react";


function Property() {
  //test de useContext

  const [properties,setProperties] = useContext(PropertiesContext)


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
    <div>
      {properties.map((property) => (
        <div className="property">
          <Link to={`/property/${property.id}`}>
            <img className="property__img" src={property.cover} key={property.id} alt="" />
          </Link>

          <h3 className="property__title">{property.title}</h3>
        </div>
      ))}
    </div>
  );
}
export default Property;
