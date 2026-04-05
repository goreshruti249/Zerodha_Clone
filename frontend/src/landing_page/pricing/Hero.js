import React from 'react';

function Hero() {
  return (
    <>
      <div className='container'>
        <div className='row p-5'>
          <h1 className="text-center ">Pricing</h1>
          <h5 className='text-center text-muted '> Free equity investments and flat ₹20 traday and F&O trades</h5>
        </div>

        <div className='row border-top p-4'>
          <div className='col-4 p-5 '>
            <img src="media/images/pricingEquity.svg"></img>
            <h3>Free equity delivery</h3>
            <p> All equity delivery investments (NSE, BSE), are absolutely free — ₹
              0 brokerage.
            </p>
          </div>

          <div className='col-4 p-5'>
            <img src="media/images/intradayTrades.svg"></img>
            <h3>Intraday and F&O trades</h3>
            <p> Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>

          <div className='col-4 p-5'>
            <img src="media/images/pricingEquity.svg"></img>
            <h3>Free direct MF</h3>
            <p> All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Hero;