//import React, { useEffect,useState} from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Property from "../../components/Property";
import Footer from "../../components/Footer";

import React, { useEffect, useState } from "react";

//test
//import { PropertiesProvider } from "../../components/useContext/propertiesContext";

function Home() {
  
 const linkToJson = "data/logements.json";

 const [properties, setProperties] = useState([]);

useEffect(() => {
  async function fetchData() {
    var data = await fetch(linkToJson).then((res) => {
  return res.json();
  });

      setProperties(data);
    console.log(data);
  }
    fetchData();
   }, []);


  //<Property value={properties}></Property>
  // <PropertiesProvider>
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
    
        <Property value={properties}></Property>
    

      <Footer></Footer>
    </div>
  );
}

export default Home;
