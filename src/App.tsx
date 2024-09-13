import './App.css'
import { Routes, Route } from 'react-router-dom'
import Pages from './views/Pages'
import Login from './views/Login'
import SignUp from './views/SignUp'
import Booking from './views/Booking'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Pages/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/booking/*' element={<Booking/>} />
      </Routes>
    </>
  )
}

export default App
