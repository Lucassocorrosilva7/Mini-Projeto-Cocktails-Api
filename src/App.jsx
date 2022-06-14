import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home'
import About from './Pages/About'
import SingleCocktails from './Pages/SingleCocktails'
import Error from './Pages/Error'
import Navbar from './components/Navbar'

function App() {

  return (
<BrowserRouter>
  <Navbar/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Cocktail:id" element={<SingleCocktails/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
</BrowserRouter>
  )
}

export default App
