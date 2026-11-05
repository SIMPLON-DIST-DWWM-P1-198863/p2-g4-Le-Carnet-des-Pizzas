import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/header.tsx";
import HomePage from "./components/HomePage.tsx";
import { Footer } from "./components/footer.tsx";
import Fiche from "./components/Fiche.tsx";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Créer une fonction qui appelle l'api
    const fetchData = async () => {
      // Appeler mon api (je reçois du text degueu)
      const result = await fetch(
        "https://materiel-apprentissage.github.io/api/pizza.json",
      );
      // Transformer le txt en json
      const data = await result.json();
      // Stocker le resultat dans un state
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Fiche" element={<Fiche />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
