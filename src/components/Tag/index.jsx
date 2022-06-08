//import "../../styles/Property.css";

import { PropertiesContext } from "../useContext/propertiesContext";
import React, { useContext} from "react";
import{useParams} from "react-router-dom"

function Tag() {
    const {id} = useParams();
 
    //test de useContext
 const [properties,setProperties] = useContext(PropertiesContext)

 
 console.log(id)
 console.log(properties)


 const selectedProperty = properties.find(property => {
    return property.id === id;
  });

console.log(selectedProperty)
  return (
    
   <div>
  
        <div>

          <h3>{/*selectedProperty.title*/}</h3>
        </div>

     
    </div>
  );
}
export default Tag;
