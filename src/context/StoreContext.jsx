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

    useEffect(()=>{
        console.log(cartItem);
        
    }, [cartItem])

    const contextValue= {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
    }
    return(
        <StoreContext.Provider value={contextValue}>
           {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;