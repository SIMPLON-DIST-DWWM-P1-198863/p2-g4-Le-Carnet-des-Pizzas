import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "../css/Fiche.css";

export default function Fiche() {
  const { id } = useParams();

  const [image, setImage] = useState("");
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prix, setPrix] = useState("");

  useEffect(() => {
    async function fetchData() {
      const url = "https://materiel-apprentissage.github.io/api/pizza.json";
      const rawData = await fetch(url);
      const cookedData = await rawData.json();
      for (let i = 0; i < cookedData.length; i++) {
        if (String(cookedData[i].id) == id) {
          setImage(cookedData[i].img);
          setNom(cookedData[i].name);
          setDescription(cookedData[i].description);
          setIngredients(cookedData[i].list_of_ingredients);
          setPrix(cookedData[i].price);
        }
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <ul>
        <li className="fiche-informations">
          <div className="fiche-texte">
            <img src={image} alt={nom} className="fiche-image" />
            <h1 className="fiche-nom">{nom}</h1>
            <p className="etoile-fav">☆</p>
          </div>
          <p className="fiche-description">{description}</p>
          <h2 className="fiche-prix">Prix : {prix} $</h2>
        </li>
        <li className="fiche-ingredient">
          <h3>Liste des Ingrédients</h3>
          <p className="fiche-listedesingredients">{ingredients}</p>
        </li>
        <li></li>
      </ul>
    </>
  );
}
