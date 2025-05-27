import logo from '../assets/gymmate-logo.png';
import FM from '../assets/FrightMleft.png';
import SearchBar from '../components/SearchBar';
import ClickButton from '../components/ClickButton';



const Home = () => {
    return (    
    <>
      <div className="flex-col justify-center bg-gray-50 min-h-screen overflow-y-auto">
        {/* Top section */}
        <div className='h-[100px] flex items-center justify-between '>
          {/* Logo on Top Left */}
          <div className='absolute top-4 left-12 p-4 flex items-center space-x-2'>
            {/* <h1 className="text-3xl text-gray-800 font-bold ">GYMMATE</h1> */}
            <ClickButton title='GYMMATE' onClick={() => console.log("GYMMATE")}
                className="text-3xl text-gray-800 font-bold hover:cursor-pointer"/>
            <img src={logo} alt="GymMate Logo" className="w-16" />
          </div>

          {/* Buttons on Top Right */}
          <div className='absolute top-4 right-12 p-4 flex space-x-8'>
            <ClickButton title="Sign up" onClick={() => console.log("Sign Up")} 
                className="w-10 h-10 cursor-pointer text-gray-800 whitespace-nowrap hover:text-sky-500"/>
            <ClickButton title="Login" onClick={() => console.log("Login")} 
                className="w-10 h-10 cursor-pointer text-gray-800 whitespace-nowrap hover:text-sky-500"/>
          </div>
        </div>

        {/* middle section */}
        <div className='bg-violet-50 p-4 mb-20 h-[250px] flex flex-col'>
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
          <ClickButton title="Diet Plan" onClick={() => console.log("Diet Plan")}
            className={"w-[50vw] h-[70px] bg-white text-center flex items-center justify-center font-mono text-xl rounded-l-full rounded-r-full whitespace-nowrap overflow-hidden hover:bg-gray-100 transition cursor-pointer border-2 border-black shadow-lg hover:shadow-xl"}/>
          <ClickButton title="Workout Plan" onClick={() => console.log("Workout Plan")}
            className={"w-[50vw] h-[70px] bg-white text-center flex items-center justify-center font-mono text-xl rounded-l-full rounded-r-full whitespace-nowrap overflow-hidden hover:bg-gray-100  transition cursor-pointer border-2 border-black shadow-lg hover:shadow-xl"}/>
          <ClickButton title="Nutrition" onClick={() => console.log(" Nutrition")}
            className={"w-[50vw] h-[70px] bg-white text-center flex items-center justify-center font-mono text-xl rounded-l-full rounded-r-full whitespace-nowrap overflow-hidden hover:bg-gray-100 transition cursor-pointer border-2 border-black shadow-lg hover:shadow-xl"}/>
        </div>
      </div>
    </>
  );
}
export default Home;