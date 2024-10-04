import React, { useContext } from 'react'
import "./foodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id, name, image, price, description}) => {
  const {cartItem , addToCart , removeFromCart} = useContext(StoreContext)
    return (
    <div className='food_item' id={id}>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            { !cartItem[id] 
                ? <img className='add-white' onClick={() => {addToCart(id)}} src={assets.add_icon_white}/>
                : <div className="food-item-counter">
                    <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItem[id]}</p>
                    <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>

            } 
        </div>

        <div className="food-item-info">
            <div className="food-item-reating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem