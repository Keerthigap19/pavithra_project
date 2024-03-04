import React, { useState } from "react";
import './CSS/Login.css'
import { useNavigate } from "react-router-dom";
import './Loginvalidation';
import Validation from "./Loginvalidation";
import axios from 'axios'
function Login(){
    const navigate=useNavigate();
    const [values,setValues]=useState({
        email:'',
        password:'',
    })
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values))
            if(errors.email==="" && errors.password===""){
                axios.post('http://localhost:8081/userlogin',values)
                .then(res=> {
                   if(res.data === "Success"){
                    navigate('/');
                   }
                   else{
                    alert("Login Unsuccessful")
                   }
                })
                .catch(err => console.log(err));
          
    }
}
    return(
        <div className="login">
            <div className="login-container">
                <h1> User Login</h1>
                <div className="fields">
                <input onChange={handleInput} type="email" name="email" placeholder="Enter Your Email Address"/>
                {errors.email && <span className="empty-email">  {errors.email}</span>}
                <input onChange={handleInput}type="password" name="password" placeholder="Password"/>
                {errors.password && <span className="empty-password">  {errors.password}</span>}
                </div>
                <button onClick={handleSubmit}>Login</button> 
                <p className="newaccount"> New User?<span className="newsignup" onClick={()=>navigate('/login')}>Sign up</span></p>
                </div>

                </div>
           

      
    
    )
}
export default Login