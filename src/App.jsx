import React from 'react'
import Navbar from './component/Navbar/Navbar'
import "./App.css"
import Home from './Pages/Home/home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App