import "../css/Fiche.css";

export default function Fiche() {
  return (
    <>
      <ul className="fiche-informations">
        <li>
          <div className="fiche-texte">
            <img src="../public/pizza-random.png" alt="" />
            <h1 className="fiche-nom">Nom de la Pizza</h1>
          </div>
          <p className="fiche-description">
            Ceci est le texte qui servira de description pour le Pizza
          </p>
        </li>
      </ul>
    </>
  );
}
