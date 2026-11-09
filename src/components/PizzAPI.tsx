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
  const [data, setData] = useState([]);

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
      {data.length}
      {data.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.img} alt={pizza.name} />
          <p>{pizza.name}</p>
        </div>
      ))}
    </>
  );
}
