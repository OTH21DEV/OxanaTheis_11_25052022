//import React, { useEffect, useState } from "react";

import getDataApi from "../../services/api";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Property from "../../components/Property";
import Footer from "../../components/Footer";

/*Verion avec fetch
function Home() {
  
 const linkToJson = "data/logements.json";

 const [properties, setProperties] = useState([]);

useEffect(() => {
  async function fetchData() {
    let data = await fetch(linkToJson).then((res) => {
  return res.json();
  });

      setProperties(data);
  //  console.log(data);
  }
    fetchData();
   }, []);

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
*/

function Home() {
  const data = new getDataApi();
  const properties = data.getProperties();

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
