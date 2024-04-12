import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Profile from './pages/Profile'


function App() {

  return (
    <>
    <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route path='/profile' element={<Profile/>}/>






    </Routes>
    
    
    
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
