import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";

function NotFountPage() {
    return ( 
        <>
          <Navbar/>
          <br></br>
          <h1> 404 Page not found.</h1>
          <p>Page does not exist visit homepage.</p>
          <br></br>
          <Footer/>
        </>
     );
}

export default NotFountPage;