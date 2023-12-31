import { star } from '../assets/icons';
import propTypes from 'prop-types';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} width={280} height={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
        <p className="mt-2 font-semibold font-palanquin text-2xl leading-normal">
          {name}
        </p>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

PopularProductCard.propTypes = {
  imgURL: propTypes.string,
  name: propTypes.string,
  price: propTypes.string,
};

export default PopularProductCard;
