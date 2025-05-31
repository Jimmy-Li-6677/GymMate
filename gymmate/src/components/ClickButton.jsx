import { useNavigate } from 'react-router-dom';

const ClickButton = ({ title, onClick, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "GYMMATE") {
      console.log("GYMMATE clicked");
      // Navigate to the home page
      navigate('/');
    } else if (title === 'Sign up') {
      console.log("Sign up clicked");
      // Navigate to the signup page
      navigate('/signup');
    } else if (title === 'Diet Plan') {
      console.log("Diet Plan clicked");
      // Navigate to the diet plan page
      navigate('/dietplan');
    } else if (title === 'Workout Plan') {
      console.log("Workout Plan clicked");
      // Navigate to the workout plan page
      navigate('/workoutplan');
    } else if (title === 'Nutrition') {
      console.log("Nutrition clicked");
      // Navigate to the nutrition page
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