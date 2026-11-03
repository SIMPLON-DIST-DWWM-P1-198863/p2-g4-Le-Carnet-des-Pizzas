import { Routes, Route } from 'react-router'
import './reset.css'
import HomePage from './components/HomePage.tsx'
import Fiche from './components/Fiche.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/Fiche' element={<Fiche />}></Route>
      </Routes>
    </>
  )
}
export default App
