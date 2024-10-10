// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import  './Home.css'
import Header from '../../component/Header/Header'
import ExplorMenu from '../../component/ExplorMenu/ExplorMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDonwload/AppDownload'
// import Footer from '../../component/footer/footer'

const Home = () => {
  const [category , setCategory] =useState ("all")
  return (
    <section>
      <Header/>
      <ExplorMenu category={category }setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload/>
    </section>
  )
}

export default Home