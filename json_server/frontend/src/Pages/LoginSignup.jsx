import React,{useState}from "react";
import './CSS/LoginSignup.css'
import { useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios'

const LoginSignup=()=>{
    const navigate=useNavigate();
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:''
    })
     const nav=useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values))
        if(errors.name===""&& errors.email==="" && errors.password===""){
            axios.post('http://localhost:8081/login',values)
            .then(res=> {
                nav('/userlogin');
            })
            .catch(err => console.log(err));
        }
    }
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1> Sign Up</h1>
                <div className="loginsignup-fields">
                <input onChange={handleInput} type="text" name="name" placeholder=" Enter Your Name"/>
                {errors.name && <span className="empty-email">  {errors.name}</span>}
                <input onChange={handleInput} type="email" name="email" placeholder="Enter Your Email Address"/>
                {errors.email && <span className="empty-email">  {errors.email}</span>}
                <input onChange={handleInput} type="password" name="password" placeholder="Password"/>
                {errors.password && <span className="empty-email">  {errors.password}</span>}
                </div>
                <button  onClick={handleSubmit}>Continue</button>
                <p className="loginsignup-login"> Already have an account?<span className="loginalready" onClick={()=>navigate('/first')}>Login here</span></p>
                <div className="loginsignup-agree">
                <input type="checkbox" name='' id=''/> 
                <p>By continuing, I agree to the terms and conditions.</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup