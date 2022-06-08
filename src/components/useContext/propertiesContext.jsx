import React, { useState,createContext } from "react";

export const PropertiesContext = createContext();

export const PropertiesProvider = (props) => {
  const linkToJson = "data/logements.json";
  const [properties, setProperties] = useState([]);

 // useEffect(() => {
    async function fetchData() {
      var data = await fetch(linkToJson).then((res) => {
        return res.json();
      });
      //console.log(data);
      setProperties(data);
      console.log(data);
    }
    fetchData();
 // }, []);

return <PropertiesContext.Provider value = {[properties,setProperties]}>
      {props.children}
  </PropertiesContext.Provider>;
};


