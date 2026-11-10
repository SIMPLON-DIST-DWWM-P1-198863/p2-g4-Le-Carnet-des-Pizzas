import PizzAPI from "./PizzAPI.tsx";
import "../css/HomePage.css";

export default function HomePage() {
  return (
    <div>
      <p className="hero-description">
        Bienvenue dans Le Carnet des Pizzas le temple ultime de la pizza et de
        tout son univers
      </p>
      <ul>
        <li className="hero-saucetomate">
          Sauce Tomate
          <ul>
            <li className="hero-categorie">
              Viande
              <ul>
                <li className="hero-pizzas">
                  <PizzAPI categorie="tomate-viande" />
                </li>
              </ul>
            </li>
            <li className="hero-categorie">
              Poisson
              <ul>
                <li className="hero-pizzas">
                  <PizzAPI categorie="tomato-poisson" />
                </li>
              </ul>
            </li>
            <li className="hero-categorie">
              Végétarien
              <ul>
                <li className="hero-pizzas">
                  <PizzAPI categorie="tomato-vegetarien" />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="hero-cremefraiche">
          Crème Fraîche
          <ul>
            <li className="hero-categorie">
              Viande
              <ul>
                <li className="hero-pizzas">
                  <PizzAPI categorie="autre-viande" />
                </li>
              </ul>
            </li>
            <li className="hero-categorie">
              Poisson
              <ul>
                <li className="hero-pizzas">
                  <PizzAPI categorie="autre-poisson" />
                </li>
              </ul>
            </li>
            <li className="hero-categorie">
              Végétarien
              <ul>
                <li className="hero-pizzas">
                  <PizzAPI categorie="autre-vegetarien" />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
