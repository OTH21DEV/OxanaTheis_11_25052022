import Header from "../../components/Header";
import { useParams } from "react-router-dom";
//import React, { useContext,useEffect, useState } from "react";
import Tag from "../../components/Tag";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";
//import { PropertiesProvider } from "../../components/useContext/propertiesContext";

function PropertyPage() {
  const linkToJson = "../data/logements.json";

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

  const { id } = useParams();
  const selectedProperty = properties.find((property) => {
    return property.id === id;
  });
  console.log(id);
  console.log(selectedProperty);

  return (
    <div>
      <Header></Header>

      <Tag {...selectedProperty}></Tag>

      <Footer></Footer>
    </div>
  );
}

export default PropertyPage;
