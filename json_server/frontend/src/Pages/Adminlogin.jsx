import React,{ useState }  from "react";
import './CSS/Adminlogin.css'
import './Loginvalidation';
import Validation from "./Loginvalidation";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Login(){
    const nav=useNavigate();
    const [values,setValues]=useState({
        email:'',
        password:''
    })
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values))
        if(errors.email==="" && errors.password===""){
            axios.post('http://localhost:8081/adminlogin',values)
            .then(res=> {
               if(res.data === "Success"){
                nav('/addproduct');
               
               }
               else{
                alert("Login Unsuccessful")
               }
            })
            .catch(err => console.log(err));
      
}
}
    
    
    return(
        <div className="adlogin">
            <div className="adlogin-container">
                <h1> Admin Login</h1>
                <div className="adfields">
                <input onChange={handleInput} type="email" name="email" placeholder="Enter Your Email Address"/>
                {errors.email && <span className="empty-email">  {errors.email}</span>}
                <input onChange={handleInput} type="password" name="password" placeholder="Password"/>
                {errors.password && <span className="empty-password">  {errors.password}</span>}
                </div>
                <button  onClick={handleSubmit}>Login</button> 
               
                </div>

                </div>
           

      
    
    )
}
export default Login