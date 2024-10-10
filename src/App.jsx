/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import "./App.css"
import Home from './Pages/Home/home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import LogIn from './component/LoginPopUp/LogIn'
const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  
  return (
    <>
      {showLogin ? <LogIn setShowLogin={setShowLogin} /> : <></>}
    <div className='container'>
        <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App