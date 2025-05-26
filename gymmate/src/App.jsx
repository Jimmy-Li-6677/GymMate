import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/gymmate-logo.png';
import FM from './assets/FrightMleft.png';

import SearchBar from './components/SearchBar';
import ClickButton from './components/ClickButton';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <div className="flex-col justify-center bg-gray-50 min-h-screen overflow-y-auto">
        {/* Top section */}
        <div className='h-[100px] flex items-center justify-between '>
          {/* Logo on Top Left */}
          <div className='absolute top-4 left-12 p-4 flex items-center space-x-2'>
            <h1 className="text-3xl text-gray-800 font-bold ">GYMMATE</h1> 
            <img src={logo} alt="GymMate Logo" className="w-16" />
          </div>

          {/* Buttons on Top Right */}
          <div className='absolute top-4 right-12 p-4 flex space-x-8'>
            <ClickButton title="Sign up" onClick={() => console.log("Sign Up")}/>
            <ClickButton title="Login" onClick={() => console.log("Login")}/>
          </div>
        </div>

        {/* middle section */}
        <div className='bg-violet-50 p-4 mb-20 h-[250px] flex flex-col reletive'>
          {/* Main Section: Image + Text Side-by-Side */}
          <div className="flex flex-col lg:flex-row justify-between px-6 py-8 space-y-6 lg:space-y-0 lg:space-x-12">
          
            {/* Text + SearchBar on Left  */}
            <div className="flex flex-col items-start space-y-4">
              <h2 className="text-5xl text-gray-800 font-bold mb-4">
                Your Personalized Fitness & Nutrition Hub
              </h2>
              <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
            </div>

            {/* Image on Right */}
            <img src={FM} alt="Female right Male left" className="w-60 h-auto ml-10 mt-10" />
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center space-y-4">
          <Card title="Diet Plan" onClick={() => console.log("Diet Plan")}/>
          <Card title="Workout Plan" onClick={() => console.log("Workout Plan")}/>
          <Card title="Nutrition" onClick={() => console.log(" Nutrition")}/>
        </div>
      </div>
    </>
  )
}

export default App
