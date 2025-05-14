

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




const Rotas = () => {
  return (
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='produtos' element={<ProductListingPage />}/>
                <Route path='produtos/:id' element={<ProductViewPage />}/>   
            </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default Rotas
