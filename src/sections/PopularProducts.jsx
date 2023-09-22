import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          voluptatibus placeat nobis quis amet itaque sapiente hic
          exercitationem iusto culpa.
        </p>
      </div>
      <div className="mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
