import { combineReducers } from 'redux'
import { cartData } from './reducer'
import { productReducer } from './productReducer'


const rootReducer = combineReducers(
    {cartData  , productReducer}
    )

export default rootReducer