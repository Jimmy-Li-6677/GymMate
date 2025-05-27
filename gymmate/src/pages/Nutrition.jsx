import logo from '../assets/gymmate-logo.png';
import ClickButton from '../components/ClickButton';

const Nutrition = () => {
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
                    <h1>Nutrition</h1>
                </div>
            </div>
        </>
    )
}
export default Nutrition;