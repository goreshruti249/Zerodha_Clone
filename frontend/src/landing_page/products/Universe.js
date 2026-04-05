import React from 'react';
import { Link } from "react-router-dom";
function Universe() {
  return (
    <>
      <div className='container p-5'>
        <div className='row text-center'>
          <h1>The Zerodha Universe</h1>
          <p className='mb-5'>
            Extend your trading and investment experience even further with our partner platforms
          </p>

          
            <div className='col-4 p-3'>
              <img src="media/images/smallcaseLogo.png" style={{ height: "40px", weidth: "90px" }}></img>
              <p className='text-muted text-small'>Thematic investment platform</p>
            </div>

            <div className='col-4 p-3'>
              <img src="media/images/streakLogo.png" style={{ height: "40px", weidth: "90px" }}></img>
              <p className='text-muted text-small'>Alpo & strategy platform</p>
            </div>

            <div className='col-4 p-3'>
              <img src="media/images/sensibullLogo.svg" style={{ height: "40px", weidth: "90px" }}></img>
              <p className='text-muted text-small'>Options trading platform</p>
            </div>

            <div className='col-4 p-3'>
              <img src="media/images/zerodhaFundhouse.png" style={{ height: "40px", weidth: "90px" }}></img>
              <p className='text-muted text-small'>Assets management</p>
            </div>

            <div className='col-4 p-3'>
              <img src="media/images/goldenpiLogo.png" style={{ height: "40px", weidth: "90px" }}></img>
              <p className='text-muted text-small'>Bonds tracking platform</p>
            </div>

            <div className='col-4 p-3'>
              <img src="media/images/dittoLogo.png" style={{ height: "40px", weidth: "90px" }}></img>
              <p className='text-muted text-small'>Insurance</p>
            </div>
          <Link to="/signup">
               <button className="btn btn-primary fs-5 p-2 mt-5" style={{ width: "20%", margin: "0 auto" }}>Sign Up Now</button>
          </Link>
          
        </div>
      </div>

    </>
  );
}

export default Universe;