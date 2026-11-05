import { useState, useEffect } from "react";

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
  return <p>{data.length}</p>;
}
