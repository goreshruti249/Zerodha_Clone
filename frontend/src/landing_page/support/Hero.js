import React from 'react';

function Hero() {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className="p-4" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href=""className='fs-5'>Track Tickets</a>
        </div>
        <div className="row p-3 m-5">
          <div className="col-6 px-3">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input placeholder="Eg. how do I activate F&O" />
            <br />
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
          <div className="col-6 px-5 ml-5">
            <h1 className="fs-3 px-4">Featured</h1>
            <ol className='px-5'>
              <li>
                <a href="">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;