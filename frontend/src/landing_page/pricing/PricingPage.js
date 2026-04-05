import React from 'react';

import Navbar from "../Navbar";
import Footer from "../Footer";

import Brokerage from "./Brokerage";
import Hero from "./Hero"; 
import OpenAcc from "../OpenAcc";

function PricingPage() {
    return ( 
        <>
           <Navbar/>
           <Hero/>
           <OpenAcc/>
           <Brokerage/>
           <Footer/>
        </>
     );
}

export default PricingPage;