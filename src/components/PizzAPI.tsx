import { Link } from "react-router";
import { useState, useEffect } from "react";

interface pizza {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
  list_of_ingredients: [string];
  spicy: boolean;
  size: string;
}

export default function PizzAPI() {
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
  return (
    <>
      {data.map((pizza) => (
        <Link to="/Fiche" className="pizzapi-link">
          <div key={pizza.id}>
            <img src="../public/pizza-random.png" alt={pizza.name} />
            <p className="pizzapi-titre">{pizza.name}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
