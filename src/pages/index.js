import Hero from '../components/index/Hero';
import About from '../components/index/About';
import BestSellers from '../components/index/BestSellers';
import Genres from '../components/index/Genres';
import Arrivals from '../components/index/Arrivals';
import CustomerReviews from "../components/index/CustomerReviews";
import Subscriptions from "../components/index/Subscriptions";

function Index() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <BestSellers />
      <Genres />
      <Arrivals />
      <CustomerReviews />
      <Subscriptions />
    </div>
  );
}

export default Index;