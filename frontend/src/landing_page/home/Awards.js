import React from 'react';

function Awards() {
    return ( 
             <div className="container p-5">
               <div className="row mt-5">
                  <div className="col-6">
                    <img src="media/images/largestBroker.svg"/>
                  </div>

                  <div className="col-6 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in :</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <p>
                                    <li>Futures and Options</li>
                                </p>
                            </ul>

                            <ul>
                                <p>
                                    <li>Commodity Derivatives</li>
                                </p>
                            </ul>

                            <ul>
                                <p>
                                    <li>Currency Derivatives</li>
                                </p>
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul>
                                <p>
                                    <li>Stocks & IPOs</li>
                                </p>
                            </ul>

                            <ul>
                                <p>
                                    <li>Direct Mutual funds</li>
                                </p>
                            </ul>

                            <ul>
                                <p>
                                    <li>Bonds and Govt.Securities</li>
                                </p>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%"}}/>
                </div>
            </div>
         </div>
        );
}

export default Awards;