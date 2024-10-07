// eslint-disable-next-line react/prop-types
const Die = ({ value, className, holdDice }) => {
  return (
    <div onClick={holdDice} className={className}>
      {value}
    </div>
  );
};

export default Die;
