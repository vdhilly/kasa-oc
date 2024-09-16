import { Link, useLocation } from "react-router-dom";
import KasaLogo from "../../assets/logo-kasa.svg";

function Header() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <header>
      <Link to="/">
        <img src={KasaLogo} alt="Logo Kasa" />
      </Link>
      <nav>
        <Link to="/" className={path === "/" ? "active" : ""}>
          Accueil
        </Link>
        <Link to="/a-propos" className={path === "/a-propos" ? "active" : ""}>
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
