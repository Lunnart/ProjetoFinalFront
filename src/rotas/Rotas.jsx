import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import PageCarrinho from '../pages/PageCarrinho.jsx'

const Rotas = () => {
  return (
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='carrinho' element={<ProductListingPage />}/>
                <Route path='produtos/:id' element={<ProductViewPage />}/>   
            </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default Rotas
