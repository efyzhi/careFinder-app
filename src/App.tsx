import './App.css'
import NavBar from './comps/NavBar'
import Home from './pages/Home'
import About from './pages/About';
import FindHospital from './pages/FindHospital';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/find' element={<FindHospital />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/dashboard' element={<AdminDashboard />}/>
      </Routes>
    </>
  )
}

export default App
