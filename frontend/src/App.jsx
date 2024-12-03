import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Nav from './components/Navbar/Nav'
import Home from './Pages/Home/Home'
import Booking from './Pages/Booking/Booking'
import Footer from './components/Footer/Footer'
import Privateroute from './components/Authenticate/Privateroute'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import LoginSignup from './components/Authenticate/LoginSignup'
import SeatSelection from './Pages/SeatSelection/SeatSelection'
import MovieDetails from './Pages/MovieDetails/MovieDetails'

function App() {

  const location=useLocation();

  return (
    <>
    {location.pathname !== '/auth' && <Nav/>}
    <div className="app">
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/auth' element={<LoginSignup/>}></Route>
      <Route path='/booking' element={<Booking/>}></Route>
      <Route path='/moviedetails' element={<MovieDetails/>}></Route>
      <Route path='/seatselection' element={<SeatSelection/>}></Route>

      <Route path='/admin/dashboard' element={<Privateroute> <AdminDashboard/> </Privateroute>}></Route>

     </Routes>
    </div>
    {location.pathname !== './auth' || <Footer/>}
    
   </>
  )
}

export default App
