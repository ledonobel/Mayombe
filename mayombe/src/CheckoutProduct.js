import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        //remove from the basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (

        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                <p> {[...Array(rating)].map((star) => {        
                     return (         
                <span className="star">&#9733;</span>        
                     );
                 })}
               </p> 
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>

        </div>

    )
}

export default CheckoutProduct;