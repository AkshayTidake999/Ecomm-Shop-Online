import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constant"

export const cartData = (data = [] , action) =>{
    console.log("Reducer Called Here..." , action)
    switch(action.type){
        case ADD_TO_CART : 
        console.log("ADD_TO_CART Called From Reducer :" , action)
            return [action.data , ...data]
            // here destrcturing becoz to add old data with new data


        case REMOVE_FROM_CART : 
            console.log("REMOVE_FROM_CART Called From Reducer :" , action)
            // initaialValue.length=initaialValue.length-1 it will error when item i 0 and click on again remove button
            // data.length = data.length ? data.length-1 : []
            // return [...data]
            const remainingItems= data.filter((item)=>item.id!==action.data)
                return [...remainingItems]

        case CLEAR_CART :
            console.log("Clear Cart Called From Reducer");
            data=[]
            return [...data]
        default : 
            return data
    }

}
