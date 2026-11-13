import { Link } from "react-router";
import { useState, useEffect } from "react";
import "../css/Preferences.css";
import Favoris from "./Favoris.tsx";

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

export default function Preferences() {
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
  console.log(data);
  return (
    <>
      <div className="bloc-classement">
        <p className="titre">Classement</p>
        <ol>
          <div className="podium">
            <li>
              <Link to={`/Fiche/${data[0]?.id}`} className="classement">
                <img src={data[0]?.img} alt="pizza" className="image-pizza" />
                <figcaption>{data[0]?.name}</figcaption>
              </Link>
              <div className="border1"></div>
            </li>
            <li>
              <Link to={`/Fiche/${data[1]?.id}`} className="classement">
                <img src={data[1]?.img} alt="pizza" className="image-pizza" />
                <figcaption>{data[1]?.name}</figcaption>
              </Link>
              <div className="border2"></div>
            </li>
            <li>
              <Link to={`/Fiche/${data[6]?.id}`} className="classement">
                <img src={data[6]?.img} alt="pizza" className="image-pizza" />
                <figcaption>{data[6]?.name}</figcaption>
              </Link>
              <div className="border3"></div>
            </li>
          </div>
          <div className="bloc-45">
            <li>
              <Link to={`/Fiche/${data[28]?.id}`} className="classement">
                <img src={data[28]?.img} alt="pizza" className="image-pizza" />
                <figcaption>{data[28]?.name}</figcaption>
              </Link>
            </li>
            <li>
              <Link to={`/Fiche/${data[29]?.id}`} className="classement">
                <img src={data[29]?.img} alt="pizza" className="image-pizza" />
                <figcaption>{data[29]?.name}</figcaption>
              </Link>
            </li>
          </div>
        </ol>
      </div>

      <Favoris />
    </>
  );
}
