import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header'
import Profile from './components/Profile';
import Cart from './components/Cart';
import { BrowserRouter, NavLink , Routes , Route } from 'react-router-dom';
import FormDialog from './components/Login';
import RegisterUser from './components/RegisterUser';
import StickyFooter from './components/Footer';

function App() {

  return (
    <div className="App">
      
     <Header/>
      {/*  <Main /> */}

      <BrowserRouter>
      
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/cart">Cart</NavLink>
        <NavLink className="navlink" to="/profile">Profile</NavLink>
        <NavLink className="navlink" to="/register">Register</NavLink>
        
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/register" element={<RegisterUser/>} />


        </Routes>
      </BrowserRouter>
      {/* <StickyFooter/> */}
    </div>
  );
}

export default App;
