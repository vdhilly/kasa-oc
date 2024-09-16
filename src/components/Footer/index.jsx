import { Link } from "react-router-dom";
import KasaLogoWhite from "../../assets/logo-kasa-white.svg";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={KasaLogoWhite} alt="Kasa Logo Blanc" />
      </Link>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
