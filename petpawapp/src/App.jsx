import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Petlist from './pages/Petlist'
import AdoptionForm from './components/Adoptionform'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Petlist />} />
        <Route path="/adoption-form" element={<AdoptionForm />} />
      </Routes>
    </Router>
  )
}

export default App
