import "../css/Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <div className="header">
      <Link to="./">
        <img src="../public/logo.png" alt="logo" className="logo" />
      </Link>

      <h1>Le carnet des pizzas</h1>
      <Link to="/favoris" className="lienfavoris">
        🤍
      </Link>
    </div>
  );
}

export default Header;
