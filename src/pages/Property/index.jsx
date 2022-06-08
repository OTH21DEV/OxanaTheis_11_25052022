import Header from "../../components/Header";
import { useParams } from "react-router-dom";
//import React, { useContext,useEffect, useState } from "react";
import Tag from "../../components/Tag";
import Footer from "../../components/Footer";

import { PropertiesProvider } from "../../components/useContext/propertiesContext";

function PropertyPage() {
  const { id } = useParams();

  console.log(id);

  return (
    <div>
      <Header></Header>
      <PropertiesProvider>
        <Tag></Tag>
      </PropertiesProvider>
      <Footer></Footer>
    </div>
  );
}

export default PropertyPage;
