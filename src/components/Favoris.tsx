import { Link } from "react-router";
import { useState, useEffect } from "react";
import "../css/Favoris.css";

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

export default function () {
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
      <div className="bloc-favoris">
        <p className="titre1">Pizzas Favorites</p>
        <div className="favoris">
          <Link to={`/Fiche/${data[42]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[42]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[42]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[2]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[2]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[2]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[3]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[3]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[3]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[4]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[4]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[4]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[5]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[5]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[5]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[32]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[32]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[32]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[47]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[47]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[47]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[8]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[8]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[8]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[30]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[30]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[30]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[10]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[10]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[10]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[31]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[31]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[31]?.name}</figcaption>
            </figure>
          </Link>
          <Link to={`/Fiche/${data[14]?.id}`} className="nom-pizza">
            <figure>
              <img src={data[14]?.img} alt="pizza" className="image-pizza" />
              <figcaption>{data[14]?.name}</figcaption>
            </figure>
          </Link>
        </div>
      </div>
      ;
    </>
  );
}
