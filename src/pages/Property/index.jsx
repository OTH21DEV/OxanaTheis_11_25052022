import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Tag from "../../components/Tag";
import Raiting from "../../components/Raiting";
import Host from "../../components/Host";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import Error from "../../components/Error";
import getDataApi from "../../services/api";
import "../../styles/PropertyPage.css";
import "../../components/Dropdown/Dropdown.css";


function PropertyPage() {
  const propertyData = new getDataApi();
  const { id } = useParams();
  const property = propertyData.getProperty(id);

  if (!property) {
    return <Error />;
  }
  return (
    <div>
      <Header></Header>
      <Slider value={property.pictures}></Slider>
      <div className="wrapper">
        <section className="property-heading">
          <h1>{property.title}</h1>
          <h2>{property.location}</h2>
          <Tag value={property.tags}></Tag>
        </section>

        <section className="property-raiting-host">
          <Raiting value={property.rating}></Raiting>

          <Host value={property.host}></Host>
        </section>
      </div>
      <section className="wrapper-dropdown">
        <Dropdown title="Description" container="dropdown-description" content={property.description}></Dropdown>
        <Dropdown
          title="Equipments"
          container="dropdown-equipments"
          content={property.equipments.map((item, index) => (
            <h3 className="dropdown-equipments__text" key={index}>
              {item}
            </h3>
          ))}
        ></Dropdown>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default PropertyPage;
