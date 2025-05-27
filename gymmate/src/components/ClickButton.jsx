import { useNavigate } from 'react-router-dom';

const ClickButton = ({ title, onClick, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "GYMMATE") {
      navigate('/');
    } else if (title === 'Sign up') {
      navigate('/signup');
    } else if (title === 'Diet Plan') {
      navigate('/dietplan');
    } else if (title === 'Workout Plan') {
      navigate('/workoutplan');
    } else if (title === 'Nutrition') {
      navigate('/nutrition');
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