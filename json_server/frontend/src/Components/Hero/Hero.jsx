import React from "react";
import'./Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from'../Assets/arrow.png'
import pic8 from '../Assets/pic8.png'
const Hero=()=>{
    return(
        <div className="hero">
            <div className="hero-right">
               <img src={pic8} alt=""/>
            </div>
            <div className="hero-left">
                <h2> HI EVERYONE </h2>
            <div>
              <div className="hero-hand-icon">
                <p> New Offers</p>
                <img src={hand_icon}alt=""/>
               
              </div> 
            <div>
              <p>One Stop For </p>
              <p> All Your Pet Needs</p>
              </div>
             </div>
                <div className="hero-latest-btn">
                    <div> LATEST GOODIES </div>
                    <img src={arrow_icon} alt=""/>
                    
                </div>
          
            </div>
            
        </div>
    )
}
export default Hero