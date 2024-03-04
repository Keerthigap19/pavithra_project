import React from "react";
import './CSS/Loginopt.css'
import {useNavigate} from "react-router-dom";

const Loginopt=()=>{
    const navigate=useNavigate();
    return(
        <div className="loginopt">
            <div className="loginopt-containers">
            <button className="user">User Login</button>
            <button className="admin" onClick={()=>navigate('/adminlogin')}>Admin Login</button>
            <div className="choose">
                    <div>Choose one to Login</div>     
                </div>
            </div>
    </div>
    )
}
export default Loginopt