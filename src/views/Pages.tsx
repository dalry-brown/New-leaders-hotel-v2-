import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/universal-components/Navbar'
import Footer from '../components/universal-components/Footer'
import Home from '../views/Home'
import About from '../views/About'
import RoomsAndSuites from '../views/RoomsAndSuites'
import Contacts from '../views/Contact'
import ScrollToTopOnMount from '../components/universal-components/ScrollToTopOnMount'
// import Booking from '../views/Booking'

const Pages = () => {
  return (
      <>
      <ScrollToTopOnMount/>
      <Navbar colorState={'colored'} />
            <Routes>
              <Route path='/' element={<Home/> } />
              <Route path='/about' element={<About/> } />
              <Route path='/rooms-and-suites' element={<RoomsAndSuites/> } />
              <Route path='/contact' element={<Contacts/> } />
              {/* <Route path='/booking' element={<Booking/> } /> */}
            </Routes>
          <Footer />
          
      </>
  )
}

export default Pages
