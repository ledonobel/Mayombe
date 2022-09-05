import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";


function Checkout(){

    const[{basket}] = useStateValue();

    return(
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" src="/images/promo.jpg"  alt=""/>
        
         <div>
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>
             {basket.map(item =>(<CheckoutProduct id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating}/>))};
         </div>
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>

    </div>
    );
}

export default Checkout;