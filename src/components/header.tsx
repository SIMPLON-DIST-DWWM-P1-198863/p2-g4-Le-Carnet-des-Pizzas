import "../css/header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="../public/logo.png" alt="logo" className="logo" />
      </Link>
      <h1>Le carnet des pizzas</h1>
      <Link to="/Preferences" className="lienfavoris">
        ♥
      </Link>
    </header>
  );
}

export default Header;
