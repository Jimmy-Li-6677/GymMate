const ClickButton = ({ title, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-10 h-10 cursor-pointer text-gray-800 whitespace-nowrap hover:text-sky-500">
      <span>{title}</span>
    </button>
  );
};
export default ClickButton;