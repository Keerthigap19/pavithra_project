import React from "react";
import './Footer.css'
import instagram_icon from"../Assets/instagram_icon.png"
import whatsapp_icon from"../Assets/whatsapp_icon.png"
import logo from "../Assets/logo.png"
import { useNavigate } from "react-router-dom";

const Footer=()=>{
    const navigate=useNavigate();
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={logo}alt="" />
                <p>PET GOODIES</p>
            
            </div>
            <ul className="footer-links">
                <li onClick={()=>navigate('/about')}>Company</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt=""/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p> Copyright @ 2024 All Rights Reserver</p>
            </div>
        </div>
    )
}
export default Footer