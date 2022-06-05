import "../../styles/Property.css";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";

function Property() {
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
          <img className="property__img" src={property.cover} key={index} alt="" />
          <h3 className="property__title">{property.title}</h3>
        </div>
      ))}
<Footer></Footer>
    </div>
  );
}
export default Property;
