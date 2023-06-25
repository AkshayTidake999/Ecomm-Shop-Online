import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";


export const productReducer = (data=[] , action) =>{
    
    switch(action.type){
        // case PRODUCT_LIST :
        //     console.log("Product List From Reducer " , action)
        //     return [action.data]
           
         case SET_PRODUCT_LIST :
            console.log("Set Product List From Reducer " , action)
            return [...action.data]
        default :    
            return data
    }
}