import { Link } from "react-router";
import { useState, useEffect } from "react";
import "../css/PizzAPI.css";

interface pizza {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
  list_of_ingredients: string;
  spicy: boolean;
  size: string;
}

interface PizzAPIProps {
  categorie: string;
}

export default function PizzAPI({ categorie }: PizzAPIProps) {
  const [data, setData] = useState<pizza[]>([]);

  useEffect(() => {
    async function fetchData() {
      const url = "https://materiel-apprentissage.github.io/api/pizza.json";
      const rawData = await fetch(url);
      const cookedData = await rawData.json();
      setData(cookedData);
    }
    fetchData();
  }, []);

  const filtrapizza = data.filter((pizza) => {
    const ingredients = pizza.list_of_ingredients.toLowerCase();
    const saucetomate =
      ingredients.includes("tomato sauce") ||
      ingredients.includes("marinara") ||
      ingredients.includes("san marzano");
    const viande =
      ingredients.includes("chicken") ||
      ingredients.includes("pepperoni") ||
      ingredients.includes("bacon") ||
      ingredients.includes("ham") ||
      ingredients.includes("sausage") ||
      ingredients.includes("pork") ||
      ingredients.includes("beef") ||
      ingredients.includes("steak") ||
      ingredients.includes("prosciutto") ||
      ingredients.includes("meatball") ||
      ingredients.includes("salami") ||
      ingredients.includes("shrimp") ||
      ingredients.includes("tuna") ||
      ingredients.includes("salmon");

    if (categorie == "tomate-viande") {
      return saucetomate && viande;
    }
    if (categorie == "tomate-vegetarien") {
      return saucetomate && !viande;
    }
    if (categorie == "autre-viande") {
      return !saucetomate && viande;
    }
    if (categorie == "autre-vegetarien") {
      return !saucetomate && !viande;
    }
  });

  return (
    <>
      {filtrapizza.map((pizza) => (
        <div key={pizza.id}>
          <Link to="/Fiche" className="pizzapi-link">
            <img src={pizza.img} alt={pizza.name} />
            <p className="pizzapi-titre">{pizza.name}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
