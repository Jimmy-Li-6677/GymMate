import { useNavigate } from 'react-router-dom';

const ClickButton = ({ title, onClick, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "GYMMATE") {
      navigate('/');
    } else if (title === 'Sign up') {
      navigate('/signup');
    } else {
      onClick?.();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={className}>
      <span>{title}</span>
    </button>
  );
};
export default ClickButton;