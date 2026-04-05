import React from 'react';

function CreateTicket() {
  return (
    
      <div className='container p-5'>
        <div className='row p-5'>
          <h3>To createa ticket, select a relevent topic</h3>
          <div className='col-4 p-5'>
            <h5 className='py-3'><i className="fa-solid fa-circle-plus"></i> Account Opening</h5>
            <div className='linkTicket'>
              <a href="#">Online account Openening</a><br/>
              <a href="#">Offline account opening</a><br/>
              <a href="#">Company,Partnership and HUF Account Opening</a><br/>
              <a href="#">NRI Account Opening</a><br/>
              <a href="#">Charges at Zerodha</a><br/>
              <a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
              <a href="#">Getting Started</a><br/>
            </div>
          </div>

          <div className='col-4 p-5'>
            <h5 className='py-3'><i className="fa-solid fa-user"></i> Your Zerodha ACcount</h5>
            <div className='linkTicket'>
              <a href="#">Login Credentials</a><br/>
              <a href="#">Account Modification and Segment Addition</a><br/>
              <a href="#">DP ID and bank details</a><br/>
              <a href="#">Your Profile</a><br/>
              <a href="#">Transfer and conversion of shares</a><br/>
            </div>
          </div>

          <div className='col-4 p-5'>
            <h5 className='py-3'> <i className="fa-solid fa-chart-column"></i> Your Zerodha Account</h5>
            <div className='linkTicket'>
              <a href="#">Margin/leverage, Product and Order types</a><br></br>
              <a href="#">Kite web and mobile</a><br/>
              <a href="#">Trading FAQs</a><br/>
              <a href="#">Corporate actions</a><br/>
              <a href="#">Sentinel</a><br/>
              <a href="#">Kite API</a><br/>
              <a href="#">PI and other platform</a><br/>
              <a href="#">Stockreports+</a><br/>
              <a href="#">GTT</a><br/>
            </div>
          </div>
        </div>
          <div className='row p-5'>
            <div className='col-4 p-5'>
              <h5 className='py-3'><i className="fa-solid fa-money-bill"></i> Funds</h5>
              <div className='linkTicket'>
                <a href="#">Adding Funds</a><br/>
                <a href="#">Funds withdrawal</a><br/>
                <a href="#">eMandates</a><br/>
                <a href="#">Adding Bank Accounts</a><br/>
              </div>
            </div>

            <div className='col-4 p-5'>
              <h5 className='py-3'> <i className="fa-solid fa-circle-notch"></i>Console</h5>
              <div className='linkTicket'>
                <a href="#">Reports</a><br/>
                <a href="#">Corporate actions</a><br/>
                <a href="#">60 days challenge</a><br/>
                <a href="#">IPO</a><br/>
                <a href="#">Referral Program</a><br/>
             </div>
            </div>

            <div className='col-4 p-5'>
              <h5 className='py-3'><i className="fa-regular fa-circle"></i>Coin</h5>
              <div className='linkTicket'>
                <a href="#">Understanding Mutual Funds</a><br/>
                <a href="#">About Coin</a><br/>
                <a href="#">Buying and Selling through Coin</a><br/>
                <a href="#">Starting an SIP</a><br/>
                <a href="#">Managing your Portfolio</a><br/>
                <a href="#">Coin App</a><br/>
                <a href="#">Moving to Coin</a><br/>
                <a href="#">Government Securities</a><br/>
              </div>
            </div>

          </div>
        </div>
      
    
  );
}

export default CreateTicket;