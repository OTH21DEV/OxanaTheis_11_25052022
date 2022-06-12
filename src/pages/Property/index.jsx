//import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Tag from "../../components/Tag";
import Raiting from "../../components/Raiting";
import Host from "../../components/Host";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import getDataApi from "../../services/api";
import "../../styles/PropertyPage.css";
import "../../styles/Dropdown.css";

//Version avec fetch _probleme d'usage objet retourné-selectedProperty
/*
function PropertyPage() {
  
  const linkToJson = "../data/logements.json";
  const { id } = useParams();
  const [properties, setProperties] = useState([]);

  
  
  useEffect(() => {
    async function fetchData() {
      let data = await fetch(linkToJson).then((res) => {
        return res.json();
      });

      setProperties(data);
   
      console.log(data);
    }
    fetchData();
  }, []);

  let selectedProperty = properties.find((property) => {
    return property.id === id;
  });
  

  return (
    <div>
      <Header></Header>

      <Tag value={property.tags}></Tag>

      <Footer></Footer>
    </div>
  );

  }
*/

// V2
function PropertyPage() {
  
  const propertyData = new getDataApi();
  const { id } = useParams();
  const property = propertyData.getProperty(id);
 

console.log(property.pictures)
  return (
    <div>
      <Header></Header>
      <section className="property-heading">
        <h1>{property.title}</h1>
        <h2>{property.location}</h2>
      </section>
      <Tag value={property.tags}></Tag>
      <section className="property-raiting-host">
        <Raiting value={property.rating}></Raiting>

        <Host value={property.host}></Host>
      </section>
      <Dropdown title="Description" container="dropdown-description" content={property.description}></Dropdown>
      <Dropdown
        title="Equipments"
        container="dropdown-equipments"
        content={property.equipments.map((item) => (
          <h3 className="dropdown-equipments__text">{item}</h3>
        ))}
      ></Dropdown>
      <Footer></Footer>
    </div>
  );
}

export default PropertyPage;
