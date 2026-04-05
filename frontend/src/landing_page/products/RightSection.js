import React from 'react';

function RightSection({ imageURL, productName, productDescription, tryDemo, learnMore }) {
  return (
    <>
      <div className='container p-5 border-top'>
        <div className='row'>

          <div className='col-6 p-5 mt-3'>
            <h3>{productName}</h3>
            <p>{productDescription}</p>
            <div>
              <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div className='col-6'>
            <img src={imageURL} />
          </div>

        </div>
      </div>
    </>
  );
}

export default RightSection;