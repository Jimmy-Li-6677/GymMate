const Card = ({ title, onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      className={className}>
      <span className='w-[30vw]'>{title}</span>
    </button>
  );
};
export default Card;