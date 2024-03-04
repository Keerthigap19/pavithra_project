import React from "react";
import './Newsletter.css'

const Newsletter=()=>{
    return(
        <div className="newsletter"> 
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to stay updated</p>

        <div> <input type="email" paceholder="Enter yout email here"/>
        <button onClick={() => alert('Thank you, Subscribed Successfully!')}>Subscribe</button>

        </div>

        </div>
    )
}

export default Newsletter