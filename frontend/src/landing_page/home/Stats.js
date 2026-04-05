import React from 'react';
function Stats() {
    return ( 
        <div className="container p-5">
           <div className="row p-5">
              <div className="col-6 p-5">
                <h1 className="heading fs-2 mb-5">Trust with Confidence</h1>
                <h2 className="subHeading fs-4">Customer-first always</h2>
                <p className="para text-muted">That's why 1.3 crore customers trust Zerodha with <i class="fa-solid fa-indian-rupee-sign"></i>.3.5+ lakh crores worth of equity investment.</p>

                <h2 className="subHeading fs-5">No spam or gimmicks</h2>
                <p>No gimmicks, spam, "gamification", or annoying push notifications.High quality apps that you use at your pace,the way you like.</p>

                <h2 className="subHeading fs-5">The zerodha universe</h2>
                <p>Not just an app, but a whole ecosystem, our investment in 30+ fintech startsup offer you tailered services specific to your needs.</p>

                <h2 className="subHeading fs-5">Do better with money</h2>
                <p>With initiation the Nudge and kill switch,we don't just facilities transactions, but actively helps you do better with your money.</p>


              </div>

              <div className="col-6 p-5">
                 <img src="media/images/ecosystem.png" style={{width:"90%"}}/>
                 <div>
                    <a href="#" className="link mx-5" style={{textDecoration:"none"}}>Explore our product <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="#" className="link mx-5" style={{textDecoration:"none"}}>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                 </div>
              </div>
           </div>
        </div>
     );
}

export default Stats;