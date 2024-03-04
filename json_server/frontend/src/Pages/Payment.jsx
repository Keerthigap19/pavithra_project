import React,{useContext} from "react";
import {useNavigate} from "react-router-dom";

import { ShopContext } from "../Context/ShopContext";
import './CSS/Payment.css'
const Payment=()=>{
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
    const amount= getTotalCartAmount();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (amount ===""){
            alert ("Amount is zero");
        }
         else {
                var options = {
                    key: "rzp_test_DkBGNycAINhjtp",
                    key_secret:"i3ev1GjuLOPvuR4uT1dGISS4",
                    amount: amount *100,
                    currency:"INR",
                    name:"Pet Goodied Payment",
                    description:"Payment",
                    handler: function(response){
                      alert(response.razorpay_payment_id);
                    },
                    prefill: {
                        name:"Keerthiga",
                        email:"keerthi@gmail.com",
                        contact:"9148284364"
                      },  
                     notes:{
                        address:"Razorpay Corporate office"
                      }, 
                      theme: {
                        color:"#3399cc"
                      }
                    };
                    var pay = new window.Razorpay(options);
                    pay.open();    
            
        }
    }
    return(
        <div className="payment">
            <div className="payment-containers">
           <button className="pay" onClick={handleSubmit}>Pay</button>
           <h3 className="total">Total: Rs.{getTotalCartAmount()}</h3>
             <p className="para">Payment through Razorpay</p>
            </div>
            
    </div>
    );
}
export default Payment