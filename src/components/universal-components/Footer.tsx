import footerImg from '../../assets/footerImg.png'
import footerStyle from "../../styles/component-styles/universal-components/footer.module.css"
import { Instagram, Twitter, FacebookRounded, LinkedIn } from '@mui/icons-material'
import { useScreenSizeStore } from '../../store/basicStore'; // Import the screen size store
import { Link } from 'react-router-dom';

const Footer = () => {
  const { screenWidth } = useScreenSizeStore(); // Use the screen size store
  
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.footerContainer}>
        <section className={footerStyle.top}>
          <section className={footerStyle.partA}>
            <section className={footerStyle.firstSec}>
              <img style={{display: 'none'}} src={footerImg} alt="New leaders logo with white background" />
              <p className='footer-text' style={{textAlign: 'center', padding: '6px'}}>Discover the pinnacle of luxury and comfort</p>
              <div className={footerStyle.socialMedia}>
                <Instagram style={(screenWidth <= 800) ? { color: '#E1E1E1', fontSize: 16.8 } : (screenWidth <= 1024) ? { color: '#E1E1E1', fontSize: 22.5 } : { color: '#E1E1E1', fontSize: 30 }} />
                <Twitter style={(screenWidth <= 800) ? { color: '#E1E1E1', fontSize: 16.8 } : (screenWidth <= 1024) ? { color: '#E1E1E1', fontSize: 22.5 } : { color: '#E1E1E1', fontSize: 30 }}/>
                <FacebookRounded style={(screenWidth <= 800) ? { color: '#E1E1E1', fontSize: 16.8 } : (screenWidth <= 1024) ? { color: '#E1E1E1', fontSize: 22.5 } : { color: '#E1E1E1', fontSize: 30 }}/>
                <LinkedIn style={(screenWidth <= 800) ? { color: '#E1E1E1', fontSize: 16.8 } : (screenWidth <= 1024) ? { color: '#E1E1E1', fontSize: 22.5 } : { color: '#E1E1E1', fontSize: 30 }}/>
              </div>
            </section>
            <section className={footerStyle.secondSec}>
              <h3>Support</h3>
              <p><Link className='link' to='/contact#faq'>FAQ</Link></p>
              <p><Link className='link' to='/contact#contactUs'>Contact us</Link></p>
            </section>
            <section className={footerStyle.thirdSec}>
              <h3>Product</h3>
              <p><Link className='link'  to='/about#offer'>Services</Link></p>
              <p><Link className='link'  to='/rooms-and-suites#roomprices'>Pricing</Link></p>
            </section>
            <section className={footerStyle.fourthSec}>
            <h3>Subscribe here</h3>
            <form action="">
              <input
                type="text"
                id='subscribe'
                placeholder='Kindly enter email here'
                aria-label='Subcription mail input bar'
              />
              <label htmlFor="subscribe">Subscribe</label>
            </form>
          </section>
          </section>
          <section className={footerStyle.partB}>
            <h3  style={{width: '100%', textAlign: 'center'}}>Subscribe to our newsletter</h3>
            <form action="">
              <input
                type="text"
                id='subscribe'
                placeholder='Kindly enter email here'
                aria-label='Subcription mail input bar'
              />
              <label htmlFor="subscribe">Subscribe</label>
            </form>
          </section>
        </section>
        <hr />
        <section className={footerStyle.bottom}>
          <div className="left"><p className='footer-text'>NewLeadersHotel&copy;2024</p></div>
          <div className={footerStyle.right}>
            <p className='footer-text'>Terms & condition</p>
            <p className='footer-text'>Privacy Policy</p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
