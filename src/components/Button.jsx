import propTypes from 'prop-types';

const Button = ({
  label,
  iconUrl,
  bgColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 rounded-full
      border font-montserrat text-lg leading-none ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'
      } ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="ICON" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

Button.propTypes = {
  label: propTypes.string,
  iconUrl: propTypes.string,
};

Button.propTypes = {
  bgColor: propTypes.string,
  textColor: propTypes.string,
  borderColor: propTypes.string,
  fullWidth: propTypes.string,
};

export default Button;
