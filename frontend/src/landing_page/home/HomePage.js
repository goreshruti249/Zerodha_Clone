import React from 'react';
import Navbar from "../Navbar";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAcc from "../OpenAcc";
import Footer from "../Footer";

function HomePage() {
    return ( 
        <>
           <Navbar/>
           <Hero/>
           <Awards/>
           <Stats/>
           <Pricing/>
           <Education/>
           <OpenAcc/>
           <Footer/>
        </>
     );
}

export default HomePage;