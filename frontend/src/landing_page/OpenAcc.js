import React from 'react';
import { Link } from "react-router-dom";
function OpenAcc() {
    return ( 
         <div className="container p-5">
            <div className="row text-center">
                <h1 className="heading mt-5 mb-2">Open a Zerodha Account</h1>
                <p>Modern platform andapps, Rs.0investments, and flst Rs.20 intraday ant.</p>

                <Link to="/signup">
                     <button className="btn btn-primary fs-5 p-2 mt-2" style={{width:"20%" ,margin:"0 auto"}}>Sign Up Now</button>
                </Link>
               
            </div>
       </div>
     );
}

export default OpenAcc;