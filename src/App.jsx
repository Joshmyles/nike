import Nav from './components/Nav';
import {
  Hero,
  PopularProducts,
  Footer,
  CustomerReviews,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections/Index';

const App = () => {
  return (
    <main className="relative">
      {/* Navbar */}
      <Nav />
      {/* Hero */}
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      {/* Popular products section */}
      <section className="padding">
        <PopularProducts />
      </section>
      {/* Super quality section */}
      <section className="padding">
        <SuperQuality />
      </section>
      {/* Services section */}
      <section className="padding-x py-10">
        <Services />
      </section>
      {/* Special offers section */}
      <section className="padding">
        <SpecialOffer />
      </section>
      {/* Customer Reviews section */}
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      {/* Subscribe section */}
      <section className="sm:py-32 py-16 w-full padding-x">
        <Subscribe />
      </section>
      {/* Footer section */}
      <section className="bg-black pb-8 padding-x padding-t">
        <Footer />
      </section>
    </main>
  );
};

export default App;
