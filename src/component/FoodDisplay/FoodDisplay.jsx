// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./foodDisplay.css";
import {StoreContext} from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";



// eslint-disable-next-line react/prop-types
const FoodDisplay = ({ category }) => {



  const {food_list} = useContext(StoreContext);


  
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near to you </h2>
      <div className="food-list-diaplay">
        {food_list.map((itme, index) => {

            if (category === "all" || category=== itme.category) {
                return (
                    <FoodItem
                      key={index}
                      id={itme._id}
                      name={itme.name}
                      image={itme.image}
                      price={itme.price}
                      description={itme.description}
                    />
                  );
            }
         
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
