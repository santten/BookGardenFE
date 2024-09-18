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
      {/* Hero Section */}
      <Hero className="h-auto sm:h-[50vh] md:h-[60vh] lg:h-[70vh]" />

      {/* About Section */}
      <About className="py-8 px-4 sm:py-12 md:py-16 lg:py-20 xl:py-24" />

      {/* Best Sellers Section */}
      <BestSellers className="py-8 px-4 sm:py-12 md:py-16 lg:py-20 xl:py-24" />

      {/* Genres Section */}
      <Genres className="py-8 px-4 sm:py-12 md:py-16 lg:py-20 xl:py-24" />

      {/* Arrivals Section */}
      <Arrivals className="py-8 px-4 sm:py-12 md:py-16 lg:py-20 xl:py-24" />

      {/* Customer Reviews Section */}
      <CustomerReviews className="py-8 px-4 sm:py-12 md:py-16 lg:py-20 xl:py-24" />

      {/* Subscriptions Section */}
      <Subscriptions className="py-8 px-4 sm:py-12 md:py-16 lg:py-20 xl:py-24" />
    </div>
  );
}

export default Index;

// import Hero from '../components/index/Hero'
// import About from '../components/index/About';
// import BestSellers from '../components/index/BestSellers';
// import Genres from '../components/index/Genres'
// import Arrivals from '../components/index/Arrivals';
// import CustomerReviews from "../components/index/CustomerReviews";
// import Subscriptions from "../components/index/Subscriptions";

// function index() {
//   return (
//     <div className="w-full">
//       <Hero />
//       <About />
//       <BestSellers />
//       <Genres />
//       <Arrivals />
//       <div className="bg-grey-light">
//         <CustomerReviews />
//       </div>
//       <Subscriptions />
//     </div>
//   )
// }

// export default index
