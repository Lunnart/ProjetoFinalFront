import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout.jsx'
import Home from '../pages/Home.jsx'
import ProductListingPage from '../pages/ProductListingPage.jsx'
import ProductViewPage from '../pages/ProductViewPage.jsx'


const Rotas = () => {
  return (
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='produtos' element={<ProductListingPage/>}/>
                <Route path='produto/:id' element={<ProductViewPage/>}/>   
            </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default Rotas
