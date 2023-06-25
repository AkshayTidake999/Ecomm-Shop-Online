
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/action'
import { productList } from '../redux/productAction';
import IntegrationNotistack from './CartMessage';
import { useEffect } from 'react';
import FavIcon from './FavIcon';
import { productReducer } from '../redux/productReducer';



function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "I-phone",
    price: "90000",
    color: "Silver",
    memory: "128GB"
  }

  let data = useSelector((state) => state.productReducer)

  console.log("DATA IN MAIN COMPONENT", data)

  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <div className="App">


      {/* <button onClick={()=>dispatch(removeFromCart(product))}>Remove From Cart</button><br/><br/> */}
      {/* <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>

      <button onClick={()=>dispatch(productList())}>product List </button> */}


      <div className='totalProducts'>
        {
          data.map((items) => {
            return (
              <div className='items'>
                <img src={items.image} className='item-image' />
                <span><FavIcon /></span>
                <p className='item-title'>{items.title}</p>
                <p className='item-category'>{items.category}</p>
                <p className='item-price'>Price : ₹ {items.price * 30}</p>
                <span className='rating'>{items.rating.rate} ⭐⭐⭐⭐</span>
                <p className='item-addtocart' onClick={() => dispatch(addToCart(items))}><IntegrationNotistack /></p><br /><br />

              </div>
            )
          })
        }
      </div>

    </div>
  );
}


export default Main;
