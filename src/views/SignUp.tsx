import signUpStyle from "../styles/view-styles/signUp.module.css"
import loginImg from "../assets/loginImg.png"
import google from "../assets/google.png"
import { Link } from 'react-router-dom'
import { ArrowBackRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <main className={signUpStyle.signUp}>
      <div className={signUpStyle.signUpContainer}>
        <section className={signUpStyle.image}>
          {/* <KeyboardReturn style={{color: 'black'}}/> */}
          <img src={loginImg} alt="Swimming pool" />
        </section>
        <section className={signUpStyle.signUpFormCont}>
        <section style={{height: '760px'}} className={signUpStyle.signUpForm}>
        <div className={signUpStyle.backArrow}><ArrowBackRounded onClick={() => {navigate(-1)}}></ArrowBackRounded></div>
          <h2 className='callout-text'>We're glad to have you</h2>
          <form action="">
            <fieldset>
              <label className={signUpStyle.signLabel} htmlFor="firstname">First Name</label>
              <input
                type="text"
                id='firstname'
              />
            </fieldset>
            <fieldset>
              <label className={signUpStyle.signLabel} htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id='lastname'
              />
            </fieldset>
            <fieldset>
              <label  className={signUpStyle.signLabel} htmlFor="email">Email</label>
              <input
                type="text"
                id='email'
              />
            </fieldset>
            <fieldset>
              <label className={signUpStyle.signLabel} htmlFor="password">Password</label>
              <input
                type="password"
                id='password'
              />
            </fieldset>
            <fieldset>
              <label className={signUpStyle.signLabel} htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id='confirmPassword'
              />
            </fieldset>
            {/* <fieldset>
              <label className={signUpStyle.signLabel} htmlFor="verificationCode">Verification code</label>
              <input
                type="text"
                id='verificationCode'
              />
            </fieldset> */}
            <fieldset className={signUpStyle.newsletter}>
            <div className={signUpStyle.group}>
              <label className={signUpStyle.switch}>
              {/* <input type="checkbox" checked={isChecked} onChange={onToggle} /> */}
              <input type="checkbox" />
              <span className={`${signUpStyle.slider} ${signUpStyle.round}`}></span>
              </label>
              <label className={signUpStyle.subscribeNote}>Subscribe to newsletter</label>
            </div>
            {/* <label className={signUpStyle.verify}>Receive verification code</label> */}
            </fieldset>
            <div className={signUpStyle.btnContainer}>
              <button className={signUpStyle.sign}>Sign Up</button>
              <h3>or</h3>
              <button className={signUpStyle.google}><img src={google} alt="Google icon" />Sign Up with Google</button>
              <span className={signUpStyle.account}><label htmlFor="">Already have an account?</label><label><Link style={{color: '#3B0908', letterSpacing: '0', padding: 0}} to='/login'>Sign in now</Link></label></span>
            </div>
          </form>
          </section>
          </section>
      </div>
    </main>
  )
}

export default SignUp
