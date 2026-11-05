import { Link } from "react-router";
import "../css/Favoris.css";

export default function () {
  return (
    <>
      <div className="bloc-favoris">
        <p className="titre1">Pizzas Favorites</p>
        <div className="favoris">
          <Link to="/Fiche" className="favoris">
            <figure>
              <img src="../public/pizza-random.png" alt="pizza" />
              <figcaption>Pizza #6</figcaption>
            </figure>
          </Link>
          <Link to="/Fiche" className="favoris">
            <figure>
              <img src="../public/pizza-random.png" alt="pizza" />
              <figcaption>Pizza #7</figcaption>
            </figure>
          </Link>
          <Link to="/Fiche" className="favoris">
            <figure>
              <img src="../public/pizza-random.png" alt="pizza" />
              <figcaption>Pizza #8</figcaption>
            </figure>
          </Link>
          <Link to="/Fiche" className="favoris">
            <figure>
              <img src="../public/pizza-random.png" alt="pizza" />
              <figcaption>Pizza #9</figcaption>
            </figure>
          </Link>
          <Link to="/Fiche" className="favoris">
            <figure>
              <img src="../public/pizza-random.png" alt="pizza" />
              <figcaption>Pizza #10</figcaption>
            </figure>
          </Link>
          <Link to="/Fiche" className="favoris">
            <figure>
              <img src="../public/pizza-random.png" alt="pizza" />
              <figcaption>Pizza #11</figcaption>
            </figure>
          </Link>
          <Link to="/Fiche" className="favoris">
            <figure>
              <img src="../public/pizza-random.png" alt="pizza" />
              <figcaption>Pizza #12</figcaption>
            </figure>
          </Link>
          <Link to="/Fiche" className="favoris">
            <figure>
              <img src="../public/pizza-random.png" alt="pizza" />
              <figcaption>Pizza #13</figcaption>
            </figure>
          </Link>
        </div>
      </div>
    </>
  );
}
