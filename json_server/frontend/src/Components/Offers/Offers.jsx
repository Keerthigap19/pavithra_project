import React from "react";
import './Offers.css'
import pic_offer from'../Assets/pic7.png'
import { useNavigate } from "react-router-dom";

const Offers=()=>{
    const navigate=useNavigate();
    return(
        <div className="offers">
<div className="offers-left">
    <h1> Exclusive offfers</h1>
    <h2>For Your Paw Friends At Affordable Price</h2>
    <button onClick={()=>navigate('/accessories')}> Check now</button>

</div>
<div className="offers-right">
<img src={pic_offer} alt=""/>

</div>
        </div>
    )
}
export default Offers