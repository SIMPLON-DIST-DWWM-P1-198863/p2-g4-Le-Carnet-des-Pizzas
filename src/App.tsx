import { Routes, Route } from "react-router";
import "./reset.css";
import "./App.css";
import Header from "./components/Header.tsx";
import HomePage from "./components/HomePage.tsx";
import { Footer } from "./components/Footer.tsx";
import Fiche from "./components/Fiche.tsx";
import Preferences from "./components/Preferences.tsx";
import Favoris from "./components/Favoris.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Fiche/:id" element={<Fiche />}></Route>
        <Route path="/Preferences" element={<Preferences />}></Route>
        <Route path="/Favoris" element={<Favoris />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
