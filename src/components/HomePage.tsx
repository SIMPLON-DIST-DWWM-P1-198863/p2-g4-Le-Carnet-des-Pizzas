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
                  <div>
                    <PizzAPI categorie="tomate-viande" />
                  </div>
                </li>
              </ul>
            </li>
            <li className="hero-categorie">
              Végétarien
              <ul>
                <li className="hero-pizzas">
                  <div>
                    <PizzAPI categorie="tomate-vegetarien" />
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="hero-autressauces">
          Autre Sauces
          <ul>
            <li className="hero-categorie">
              Viande
              <ul>
                <li className="hero-pizzas">
                  <div>
                    <PizzAPI categorie="autre-viande" />
                  </div>
                </li>
              </ul>
            </li>
            <li className="hero-categorie">
              Végétarien
              <ul>
                <li className="hero-pizzas">
                  <div>
                    <PizzAPI categorie="autre-vegetarien" />
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
