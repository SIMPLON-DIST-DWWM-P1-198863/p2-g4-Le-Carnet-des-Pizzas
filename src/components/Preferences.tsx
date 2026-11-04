import { Link } from "react-router";
import "../css/Preferences.css";
export default function Preferences() {
  return (
    <>
      {/* SECTION 1 */}
      <div className="bloc-classement">
        <p className="titre">Classement</p>
        <ol>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="pizza" />
            </Link>
            Pizza #1
          </li>
          <div className="border1"></div>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="pizza" />
            </Link>
            Pizza #2
          </li>
          <div className="border2"></div>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="pizza" />
            </Link>
            Pizza #3
          </li>
          <div className="border3"></div>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="pizza" />
            </Link>
            Pizza #4
          </li>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="pizza" />
            </Link>
            Pizza #5
          </li>
        </ol>
      </div>
      {/* SECTION 2 */}
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
