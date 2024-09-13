import aboutStyle from '../styles/view-styles/about.module.css'
import vans from '../assets/vans.png'
// import Team from '../components/about-components/Team'
import { usePageStore } from "../store/basicStore"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
  }, [location])

  const { selectAbout } = usePageStore()
    
  useEffect(() => {
    selectAbout()
  }, [])

  return (
    <main className={aboutStyle.about}>
      <div className={aboutStyle.aboutContainer}>
        <section className={aboutStyle.aboutUs}>
          <div className={aboutStyle.aboutUsContainer}>
            <div className={aboutStyle.content}>
              <h1 className='page-title' style={{textAlign: 'center', width: '100%', paddingTop: 0}}>About Us</h1>
              <p style={{width: '100%', textAlign: 'center'}}>Welcome to New Leaders Hotel, where luxury meets unparalleled elegance. Our hotel is a sanctuary of sophistication and comfort, designed to provide an exceptional experience for discerning travelers. At New Leaders Hotel, we redefine luxury with meticulous attention to detail and a commitment to excellence.</p>
            </div>
            <div className={aboutStyle.video}>
            <iframe className={aboutStyle.videoIframe} src="https://player.vimeo.com/video/811970471?h=b0339dee01&autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0"  
            allow="autoplay">
            </iframe>
              {/* <video autoPlay loop muted>
                <source src={newleadersvideo} type="video/mp4"/>
                Your browser does not support the video tag.
              </video> */}
            </div>
          </div>
        </section>
        <section className={aboutStyle.brand}>
          <div className={aboutStyle.brandContainer}>
            <div className={aboutStyle.first}>
              <h2 style={{width: '100%', textAlign: 'center'}}>Our Story</h2>
              <p style={{textAlign: 'center'}}>Established in 2024, New Leaders Hotel was born from a vision to create an oasis of luxury in the heart of Amasaman. From the moment you step into our grand lobby, you are transported into a world of refined opulence. Our journey has been one of passion and dedication, continually evolving to set new standards in hospitality.</p>
            </div>
            <div className={aboutStyle.second}>
              <h2 style={{width: '100%', textAlign: 'center'}}>Our Values</h2>
              <div className={aboutStyle.trait}>
                <div className={aboutStyle.property}>
                  <h3>Exelence</h3>
                  <p>We strive for perfection in every aspect of our service</p>
                </div>
                <div className={aboutStyle.property}>
                  <h3>Elegance</h3>
                  <p>Our decor and ambiance reflect timeless elegance and sophistication</p>
                </div>
                <div className={aboutStyle.property}>
                  <h3>Guest Satisfaction</h3>
                  <p>Your comfort and satisfaction are our top priorities</p>
                </div>
                <div className={aboutStyle.property}>
                  <h3>Innovation</h3>
                  <p>We continually seek new ways to enhance your experience</p>
                </div>
              </div>
            </div>
            <div className={aboutStyle.third}>
              <h2 style={{width: '100%', textAlign: 'center'}}>Why Choose Us?</h2>
              <div className={aboutStyle.trait}>
                <div className={aboutStyle.property}>
                  <h3>Prime Location</h3>
                  <p>Situated in the heart of Amasaman, our hotel offers easy access to the city’s premier attractions and shopping districts.</p>
                </div>
                <div className={aboutStyle.property}>
                  <h3>Exquisite Design</h3>
                  <p>Our interiors are designed with the finest materials and a keen eye for detail, creating an ambiance of refined elegance</p>
                </div>
                <div className={aboutStyle.property}>
                  <h3>Exceptional Service</h3>
                  <p>From personalized check-ins to 24/7 concierge service, we are dedicated to making your stay as comfortable and enjoyable as possible</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='offer' className={aboutStyle.offer}>
          <section className={aboutStyle.offerContainer}>
          <div className={aboutStyle.first}>
              <h1 style={{width: '100%', textAlign: 'center', color: '#B22222'}}>What we offer</h1>
              <div className={aboutStyle.trait}>
                <div className={aboutStyle.property}>
                  <h3>Luxurious Rooms & Suites</h3>
                  <p style={{textAlign: 'center'}}>Exquisitely designed with plush furnishings. Our rooms and suites offer the perfect blend of comfort and style</p>
                </div>
                <div className={aboutStyle.property}>
                  <h3>Fine Dining</h3>
                  <p style={{textAlign: 'center'}}>Indulge in gourmet cuisines at our renowned restaurants, where culinary excellence meets impeccable service</p>
                </div>
                <div className={aboutStyle.property}>
                  <h3>Spa & Wellness</h3>
                  <p style={{textAlign: 'center'}}>Rejuvenate your mind and body at our state-of-the-art spa, offering a range of treatments designed to relax and invigorate</p>
                </div>
                <div className={aboutStyle.property}>
                  <h3>Event Spaces</h3>
                  <p style={{textAlign: 'center'}}>Our elegant event spaces are perfect for weddings, corporate events, and special occasions, ensuring a memorable experience</p>
                </div>
              </div>
            </div>
            {/* <div className={aboutStyle.right}> */}
              <img src={vans} alt="2 new leader hotel vans" />
            {/* </div> */}
          </section>
        </section>
        {/* <Team/> */}
      </div>
    </main>
  )
}

export default About
