import React from "react";
import "./explorMenu.css";
import { menu_list} from "../../assets/assets";

const ExplorMenu = ({category , setCategory}) => {
  return (
    <div className="explore-menu">
      <h2>explore our menu</h2>
      <p className="explore-menu-text">
        chisse frin a diverse menu featuring a deleectable array of dishes Our
        mission is to satisfy your crvings and elevate your dining experience ,
        one delicious meal at a time
      </p>
      <div className="explore-menu-list" >
        {menu_list.map((item ,index ) => { 
            return(
                <div key={index} onClick={() => { 
                    setCategory(prev => prev === item.menu_name ? "all" : item.menu_name )
//prev this is the prev value of the category "all" if stetment = "all" === item.menu_name   ? true it will return all cat 
//in case of false we will update the value of state to make it equal the item.menu_name ==> setCategory= item.menu_name  this is the first step then we will 
//comper the value of new cat with item.menu_name in the className  of the img  if item.menu_name=item.menu_name ==> className=active. 

 //category === item.menu_name ====then it will put new className = active and the active class has a spsifc style
 //that make it some propareteis like padding and border in casae of it return false it remove the class active some it back 
 //to the prec state == "all"                   
        }} className="product">
                    <img className={category === item.menu_name ?"active" : "all"} src={item.menu_image} alt="" />
                     <p>{item.menu_name}</p>
                </div>
            )
         })}
      </div>
      <hr />
    </div>
  );
};

export default ExplorMenu;
