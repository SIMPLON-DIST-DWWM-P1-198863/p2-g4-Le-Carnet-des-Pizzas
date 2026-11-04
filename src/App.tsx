import { Routes, Route } from "react-router";
import "./reset.css";
import "./App.css";
import Header from "./components/header.tsx";
import { Footer } from "./components/footer.tsx";
import HomePage from "./components/HomePage.tsx";
import Fiche from "./components/Fiche.tsx";
import Preferences from "./components/Preferences.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Fiche" element={<Fiche />}></Route>
        <Route path="/Preferences" element={<Preferences />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
