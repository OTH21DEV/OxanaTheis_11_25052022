//import React, { useEffect,useState} from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Property from "../../components/Property";
//import Footer from "../../components/Footer";

function Home() {
  //? ou mettre .json -dossier public , ne fonctionnait pas dans src?
/*
  const linkToJson = "data/logements.json";
  
  const [data, setData] = useState({})
 

  
  useEffect(() => {
    fetch(linkToJson)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data[0].title);
      
      
      
      
    })
    
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  console.log(setData(data))
*/
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Property></Property>
    </div>
  );
}

export default Home;
