import React, { useEffect} from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Property from "../../components/Property";
//import Footer from "../../components/Footer";

function Home() {
  //? ou mettre .json -dossier public , ne fonctionnait pas dans src?

  const linkToJson = "data/logements.json";
  /*
  const [test, setTest] = useState({})
  setTest(data)
  console.log(setTest(data))*/


 // useEffect(() => {
    fetch(linkToJson)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (data) {
        console.log(data);

        for (let property of data) {
          console.log(property);

        }
      

      })

      .catch(function (error) {
        console.log(error);
      });
  //}, []);

  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Property></Property>
    </div>
  );
}

export default Home;
