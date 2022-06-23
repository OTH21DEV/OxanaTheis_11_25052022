
import "../../components/Footer/Footer.css"
import logo from "../../assets/logo.png";

function Footer() {
  return (
  
    <div className="footer">
       
      <img src={logo} alt="Kasa" className="nav-logo"/>
      <p>© 2020 Kasa. All rights reserved</p>

    </div>
    
  );
}

export default Footer;
