import { Link } from "react-router";
import "../css/Preferences.css";
import Favoris from "./Favoris.tsx";

export default function Preferences() {
  return (
    <>
      {/* SECTION 1 */}
      <div className="bloc-classement">
        <p className="titre">Classement</p>
        <ol>
          <div className="podium">
            <li>
              <Link to="/Fiche" className="classement">
                <img src="../public/pizza-random.png" alt="pizza" />
                Pizza #1
              </Link>
              <div className="border1"></div>
            </li>
            <li>
              <Link to="/Fiche" className="classement">
                <img src="../public/pizza-random.png" alt="pizza" />
                Pizza #2
              </Link>
              <div className="border2"></div>
            </li>
            <li>
              <Link to="/Fiche" className="classement">
                <img src="../public/pizza-random.png" alt="pizza" />
                Pizza #3
              </Link>
              <div className="border3"></div>
            </li>
          </div>
          <li>
            <Link to="/Fiche" className="classement">
              <img src="../public/pizza-random.png" alt="pizza" />
              Pizza #4
            </Link>
          </li>
          <li>
            <Link to="/Fiche" className="classement">
              <img src="../public/pizza-random.png" alt="pizza" />
              Pizza #5
            </Link>
          </li>
        </ol>
      </div>

      <Favoris />
    </>
  );
}
