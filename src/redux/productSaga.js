
import {put, takeEvery} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'


function* getProducts (){
    let data = yield fetch ("https://fakestoreapi.com/products")
    
    console.log("Hello This is ",data)
    data = yield data.json()
    console.log("Product List Called Here : ",data)
    // console.log("Called Api")
    yield put({type : SET_PRODUCT_LIST , data})
}

function* productSaga(){

    yield takeEvery(PRODUCT_LIST , getProducts)

}
export default productSaga