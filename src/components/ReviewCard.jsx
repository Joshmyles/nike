import { star } from '../assets/icons';
import propTypes from 'prop-types';

const ReviewCard = ({ customerName, rating, feedback, imgURL }) => {
  return (
    <section className="flex justify-center items-center text-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm info-text">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt=""
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </section>
  );
};

ReviewCard.propTypes = {
  imgURL: propTypes.string,
  customerName: propTypes.string,
  rating: propTypes.string,
  feedback: propTypes.string,
};

export default ReviewCard;
