function Validation(values){
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(values.email===""){
        error.email="Email Should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Give correct format of the email"
    }
    else{
        error.email=""
    }
    if(values.password===""){
        error.password="Password Should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="Incorrect password"
    }
    else{
        error.password=""
    }
    
    
    return error;

}
export default Validation