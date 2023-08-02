import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import CategoryArticle from './Pages/CategoryArticle/CategoryArticle'

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/category/:categoryName' element={<CategoryArticle/>} />
        
      </Routes>
    </BrowserRouter>
  )
}
//we add a : after the / to denote the param we want to use
export default App
