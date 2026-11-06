import "../css/header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="../public/logo.png" alt="logo" className="logo" />
        <h1>Le carnet des pizzas</h1>
        <a href="/favoris" className="lienfavoris">
        🤍
        </a>
    </header>
  );
}

export default Header;
