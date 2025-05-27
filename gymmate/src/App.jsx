import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
  import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App
