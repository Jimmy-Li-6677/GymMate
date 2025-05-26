const Card = ({ title, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-[50vw] h-[70px] bg-white text-center flex items-center justify-center font-mono text-xl rounded-l-full rounded-r-full whitespace-nowrap overflow-hidden hover:bg-gray-100 transition cursor-pointer border-2 border-black shadow-lg hover:shadow-xl">
      <span className='w-[30vw]'>{title}</span>
    </button>
  );
};
export default Card;