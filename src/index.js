
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import PropertyPage from "./pages/Property/index";
import Error from "./components/Error/index";
import reportWebVitals from "./reportWebVitals";
//import { PropertiesProvider } from "../../components/useContext/propertiesContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   {/*<PropertiesProvider>*/}
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/property/:id" element={<PropertyPage />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
     {/* </PropertiesProvider>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
