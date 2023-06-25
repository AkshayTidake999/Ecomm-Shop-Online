
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constant";
 export const addToCart = (data) =>{
    console.log("Add To Cart Action Called Here : ",data);
    return {
        type : ADD_TO_CART,
        // data     
        data : data 
    }
}

export const removeFromCart = (data) =>{
    console.log("Remove From Cart Action Called Here : ",data);
    return {
        type : REMOVE_FROM_CART,
        // data     
        data : data 
    }
}

export const clearCart = () =>{
    console.log("Clear Cart Action Called Here : ");
    return {
        type : CLEAR_CART,
  
    }
}