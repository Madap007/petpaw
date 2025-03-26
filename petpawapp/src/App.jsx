import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Petlist from './pages/Petlist'
import Adoptionform from './components/Adoptionform'
import PetDetails from './components/PetDetails'
import Aboutus from './pages/Aboutus'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Petlist />} />
        <Route path="/adoption-form" element={<Adoptionform />} />
        <Route path='/petdetails' element={<PetDetails/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
      </Routes>
    </Router>
  )
}

export default App
