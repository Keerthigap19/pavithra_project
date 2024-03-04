import React, { useContext } from "react";
import './ProductDisplay.css'
import start_icon from'../Assets/star_icon.png'
import start_dull_icon from'../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay=(props)=>{
    const{product}=props;
    const {addToCart}=useContext(ShopContext);
    return(
        <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image}alt=""/>
                <img src={product.image}alt=""/>
                <img src={product.image}alt=""/>
                
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt=""/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
        <div className="productdisplay-right-stars"></div>
        <img src={start_icon} alt="" />
        <img src={start_icon} alt="" />
        <img src={start_icon} alt="" />
        <img src={start_icon}  alt="" />
        <img src={start_dull_icon} alt="" />
        <div><p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">Rs{product.old_price}</div>
            <div className="productdisplay-right-price-new">Rs{product.new_price}</div>

        </div>
        <div className="productdisplat-right-description">
            Super Healthy Treats
        </div>
        <div className="productdisplay-right-size">
            <h1> Select Quantity</h1>
            <div className="productdisplay-right-sizes">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}> ADD TO CART</button>
        <p className="productdisplay-right-category"><span> Category:</span> Bowls,Foods Dry food</p>
        <p className="productdisplay-right-category"><span> Tags:</span>Pedigree, Dry food</p>
        </div>
        </div>

    )
}
export default ProductDisplay