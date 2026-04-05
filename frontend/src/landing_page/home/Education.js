import React from 'react';

function Education() {
    return ( 
        <div className="container p-5">
           <div className="row">
              <div className="col-6">
                <img href="#" src="/media/images/education.svg" style={{width:"80%"}}/>
              </div>

              <div className="col-6">
                <h2>Free and open market education</h2>
                <p className="para mt-5">Varify the largest online stock market education book in the world covering everything from the basic to advanced trading.</p>
                <a href="#" className="link" style={{textDecoration:"none"}}>Verify <i class="fa-solid fa-arrow-right"></i></a>
                <p className="para mt-5">TradingQ&A , the most active trading and investment community in India for all your market related query.</p>
               <a href="#" className="link" style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
              </div>
           </div>
        </div>
     );
}

export default Education;