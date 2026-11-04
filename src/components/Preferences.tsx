import { Link } from "react-router";
import "../css/Preferences.css";
export default function Preferences() {
  return (
    <>
      <div>
        <p className="titre">Classement</p>
        <ol>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="" />
            </Link>
            Pizza #1
          </li>
          <div className="ma-bande"></div>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="" />
            </Link>
            Pizza #2
          </li>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="" />
            </Link>
            Pizza #3
          </li>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="" />
            </Link>
            Pizza #4
          </li>
          <li className="classement">
            <Link to="/Fiche">
              <img src="../public/pizza-random.png" alt="" />
            </Link>
            Pizza #5
          </li>
        </ol>
      </div>
    </>
  );
}
