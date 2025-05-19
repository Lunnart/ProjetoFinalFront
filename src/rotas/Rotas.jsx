import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Home from '../pages/Home.jsx'


const Rotas = () => {
  return (
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='produtos' element={<ProductListingPage />}/>
                <Route path='produto/:id' element={<ProductViewPage />}/>   
            </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default Rotas
