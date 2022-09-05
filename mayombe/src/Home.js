import React from "react";
import "./Home.css";
import Product from "./Product";


function Home () {
    return(

        <div className="home">
            <div className="home_container">
                
            <img className="home_image" src="/images/30082.jpg" alt=""></img>
            
             <div className="home_row">
                <Product id="8476256" title="the lean startup" price={29.99} image="/images/refrigerator.png" rating={5}/>
                <Product id="8437765" title="the lean startup" price={29.99} image="/images/refrigerator.png" rating={3}/>
                <Product id="3445345" title="the lean startup" price={29.99} image="/images/refrigerator.png" rating={4}/>
            </div>
             <div className="home_row">
             <Product id="2354467" title="the lean startup" price={29.99} image="/images/refrigerator.png" rating={5}/>
             <Product id="9765543" title="the lean startup" price={29.99} image="/images/refrigerator.png" rating={3}/>
             <Product id="5678006" title="the lean startup" price={29.99} image="/images/refrigerator.png" rating={5}/>
             </div>

             <div className="home_row">
             <Product id="1234579" title="the lean startup" price={29.99} image="/images/refrigerator.png" rating={4}/>
             
            </div>
           </div> 
        </div> 
        
    )
}

export default Home;