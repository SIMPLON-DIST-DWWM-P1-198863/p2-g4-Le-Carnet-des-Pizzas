import "../css/header.css";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <img src="../public/logo.png" alt="logo" className="logo" />
      <h1>Le carnet des pizzas</h1>
      <Link to="/favoris" className="lienfavoris">
        🤍
      </Link>
    </>
  );
}

export default Header;
