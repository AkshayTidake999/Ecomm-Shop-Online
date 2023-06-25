import { PRODUCT_LIST } from "./constant";

export const productList = ()=>{
    // let data = await fetch ("https://api.storerestapi.com/products")
    // data = await data.json()
    // console.log("Product List Called Here : ",data)
    return{
        type : PRODUCT_LIST
     
    }
}

