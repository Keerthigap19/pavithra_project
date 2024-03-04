import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar=()=>{
  const[menu,setMenu]=useState('shop');
    const {getTotalCartItems}=useContext(ShopContext);
    return(
        <nav className="navbar">
            <div className="nav-logo">
                <img  id="logo" src={logo} alt=""/>
                <p>PET STORE</p>
                <img id="petpic" src="https://i.pinimg.com/originals/9f/df/93/9fdf93860f9269c05411e27291a7b936.gif" alt=""/>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("accessories")}}><Link style={{textDecoration:'none'}}to='/accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("wetfood")}}><Link style={{textDecoration:'none'}}to='/wetfood'>Wet food</Link>{menu==="wetfood"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("dryfood")}}><Link style={{textDecoration:'none'}}to='/dryfood'>Dry food</Link>{menu==="dryfood"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("suppliments")}}><Link style={{textDecoration:'none'}}to='/suppliments'>Suppliments</Link>{menu==="suppliments"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
            <Link to='/login'><button >Sign Up</button></Link> 
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
               
        </div>
        </nav>
        
    )
} 
export default Navbar
