import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
       <div className="container p-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="homeHeroImg" className="image"></img>
                <h1 className="heading mt-5">Invest in everything</h1>
                <p>Online Platform to invest instocks, derivateives, mutual funds, and more</p>
                <Link to="/signup">
                   <button className="btn btn-primary fs-5 p-2" style={{width:"20%" ,margin:"0 auto"}}>SignUp Now</button>
                </Link>
                
            </div>
       </div>
     );
}

export default Hero;