import getDataApi from "../../services/api";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Property from "../../components/Property";
import Footer from "../../components/Footer";

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
