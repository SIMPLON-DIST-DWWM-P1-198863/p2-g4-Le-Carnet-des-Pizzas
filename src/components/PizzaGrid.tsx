import "../css/PizzaGrid.css";

export function PizzaGrid() {
  return (
    <>
      <a href="/Fiche" className="pizzas-link">
        <figure>
          <img src="../public/pizza-random.png" alt="" />
          <figcaption>Pizza 1</figcaption>
        </figure>
      </a>
      <a href="/Fiche" className="pizzas-link">
        <figure>
          <img src="../public/pizza-random.png" alt="" />
          <figcaption>Pizza 2</figcaption>
        </figure>
      </a>
      <a href="/Fiche" className="pizzas-link">
        <figure>
          <img src="../public/pizza-random.png" alt="" />
          <figcaption>Pizza 3</figcaption>
        </figure>
      </a>
      <a href="/Fiche" className="pizzas-link">
        <figure>
          <img src="../public/pizza-random.png" alt="" />
          <figcaption>Pizza 4</figcaption>
        </figure>
      </a>
      <a href="/Fiche" className="pizzas-link">
        <figure>
          <img src="../public/pizza-random.png" alt="" />
          <figcaption>Pizza 5</figcaption>
        </figure>
      </a>
    </>
  );
}

export default PizzaGrid;
