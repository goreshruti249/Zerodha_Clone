import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googleApp, appStore}) {
  return (
    <>
      <div className='container p-5 border-top'>
        <div className='row'>
          <div className='col-6'>
            <img src={imageURL}/>
          </div>

          <div className='col-6 p-5 mt-5'>
             <h3>{productName}</h3>
             <p>{productDescription}</p>
             <div>
                <a href={tryDemo} style={{marginRight:"90px"}}>Try Demo <i class="fa-solid fa-arrow-right" ></i></a>
                <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
             </div>
             
             <div className='mt-3'>
                <a href={googleApp}  style={{marginRight:"50px"}}><img src="media/images/googlePlayBadge.svg"/></a>
                <a href= {appStore}><img src="media/images/appstoreBadge.svg"/></a>
             </div>
             
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;