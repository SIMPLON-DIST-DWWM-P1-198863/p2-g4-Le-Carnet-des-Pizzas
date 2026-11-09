import "../css/header.css";
import { Link } from "react-router";

function header() {
  return (
    <header>
      <img src="../public/logo.png" alt="logo" className="logo" />
      <h1>Le carnet des pizzas</h1>
      <Link to="/favoris" className="lienfavoris">
        🤍
      </Link>
    </header>
  );
}

export default header;