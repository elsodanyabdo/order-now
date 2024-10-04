import React, { useState } from 'react'
import  './Home.css'
import Header from '../../component/Header/Header'
import ExplorMenu from '../../component/ExplorMenu/ExplorMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'

const Home = () => {
  const [category , setCategory] =useState ("all")
  return (
    <section>
            <Header/>
            <ExplorMenu category={category }setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            
    </section>
  )
}

export default Home