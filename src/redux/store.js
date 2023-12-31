// import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import productSaga from './productSaga'
import createSagaMiddleware  from 'redux-saga'


const sagaMiddleware  = createSagaMiddleware();



// const store = createStore(rootReducer)
const store = configureStore(
    {
        reducer : rootReducer,
        middleware : ()=>[sagaMiddleware    ]
    }
)
console.log("Store" , store)

sagaMiddleware.run(productSaga)
export default store