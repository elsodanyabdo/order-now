import React, { useContext } from 'react'
import "./cart.css"
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const {cartItem , food_list , removeFromCart ,getTotalCartAmount} = useContext(StoreContext)
  const navgite = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>item</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <hr />
        <hr />
        {food_list.map((item, index)=>
        {
          if (cartItem[item._id]> 0)
             {
            return(
             <div key={index}>
               <div  className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>
                <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
              </div>
              <hr />
             </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-detials">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
              <hr />
            <div className="cart-total-detials">
              <p>deleviry fee</p>
              <p>${getTotalCartAmount()=== 0 ? 0 :5}</p>
            </div>
              <hr />
            <div className="cart-total-detials">
              <b>total</b>
              <b>${getTotalCartAmount()=== 0 ? 0 : getTotalCartAmount() + 5}</b>
            </div>
          <button onClick={()=> navgite("/PlaceOrder")}>PROCED TO CHECKOUT</button>
          </div>
        </div>
          <div className="cart-promocode">
            <p>if you have a promocode , enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart