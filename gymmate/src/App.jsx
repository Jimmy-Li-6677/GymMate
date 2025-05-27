import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
  import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import DietPlan from './pages/DietPlan'
import WorkoutPlan from './pages/WorkoutPlan.jsx'
import Nutrition from './pages/Nutrition.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dietplan" element={<DietPlan />} />
      <Route path="/workoutplan" element={<WorkoutPlan/>} />
      <Route path="/nutrition" element={<Nutrition/>} />
    </Routes>
  )
}

export default App
