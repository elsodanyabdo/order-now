import { createContext, useEffect, useState } from "react";
import  {food_list }  from  "../assets/assets"


export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{
    const [cartItem , setCartItem] = useState({});
//for add cart to item for we dont neet to make for every food iteam funciton so we do use state and array and we wil add it to contextValue

    const addToCart = (idItem) =>{
        if(!cartItem[idItem]){
            setCartItem((prev) =>({...prev ,[idItem]:1 }) )
        }else{
            setCartItem((prev) => ({...prev ,[idItem]:prev[idItem]+1 }))
        }
    }


    const removeFromCart =(idItem) => {
        setCartItem((prev)=> ({...prev ,[idItem]:prev[idItem]-1}))
    }
    const  getTotalCartAmount = ()=>{
        let totalAmount = 0
        for(const item in cartItem){
            if(cartItem[item]> 0){
                let itemInfo = food_list.find((product)=> product._id === item);
                totalAmount += itemInfo.price*cartItem[item] 
            }
        }
        return totalAmount
    }
    const contextValue= {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }
    return(
        <StoreContext.Provider value={contextValue}>
           {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;