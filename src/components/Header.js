import {BrowserRouter ,NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import FormDialog from "./Login"
import SearchBar from "./SearchBar"
const Header = () =>{
    const result = useSelector((state)=>state.cartData)
    console.log("redux data in header ",result.length)
    return (
        <div className="header-top">
            {/* <h1>Header</h1> */}
            {/* <span className="shop-head">Shop</span> */}
            <SearchBar />
            <span className="cart-item-length">{result.length}</span>
            <img className="cart-icon" alt="cart-icon" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" />
            <FormDialog />     
        </div>
    )
}
export default Header 