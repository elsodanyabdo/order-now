import React, { useContext } from 'react'
import "./placeorder.css"
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form action="" className="placeorder">
      <div className="placeoreder-left">
        <p className="title">deleviry information</p>
        <div className="multi-feilds">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
          <input type="text" placeholder="Email adderss" />
          <input type="text" placeholder="street" />
        <div className="multi-feilds">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder="zip code" />
          <input type="text" placeholder="countruy" />
        </div>
        <input type="text" placeholder='phone'  />
      </div>
      <div className="placorder-right">
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
            <button>PROCED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </form> 
  )
}

export default PlaceOrder