import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }){

    const [{basket}, dispatch] = useStateValue();
    console.log( basket );
    const addToBasket = () => {
        //dispatch items into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            },
        });
    };
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="prduct_rating">
                {[...Array(rating)].map((star) => {        
                     return (         
                <span className="star">&#9733;</span>        
                     );
                 })}
            
    
            </div>
            </div>
            <img src={image} alt=""/>
                <button onClick={addToBasket}> Add to basket </button>
        </div>
    )

}

export default Product;