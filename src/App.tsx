import { Routes, Route } from 'react-router'
import './reset.css'
import HomePage from './Components/homepage.tsx'
import Fiche from './Components/Fiche.tsx'

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
