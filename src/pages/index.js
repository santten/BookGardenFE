import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About';
import BestSellers from '../components/BestSellers';
import Genres from '../components/Genres'
import Arrivals from '../components/Arrivals';
import CustomerReviews from "../components/CustomerReviews";
import Subscriptions from  "../components/Subscriptions";

function index() {
    return (
        <div className="w-full min-h-[90vh]">
            {/* remove this comment + replace the <p> with your code */}
        <main>
        {/* About */}
        <Hero/>
        <About />
        <BestSellers/>
        <Genres/>
        <Arrivals/>
        <CustomerReviews/>
        <Subscriptions/>

      </main>        
      </div>
    )
}

export default index
