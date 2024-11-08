import signUpStyle from "../styles/view-styles/signUp.module.css";
import loginImg from "../assets/loginImg.png";
// import google from "../assets/google.png";
import { Link } from 'react-router-dom';
import { useAuth } from '../store/authStore';
import { useBookingStatus, useBookingState, useBookingStyleChanges } from '../store/bookingStore';
import { useNavigate } from 'react-router-dom';
import { ArrowBackRounded } from '@mui/icons-material'


const Login = () => {
  const { login } = useAuth();
  const { completeSignIn } = useBookingStatus();
  const { completedSignInState, activeBookingState, defaultPaymentState } = useBookingStyleChanges();
  const { setSignInStateObj, setBookingStateObj, setPaymentStateObj } = useBookingState();


  const navigate = useNavigate();

  const handleSignIn = async (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent form submission refresh
  
    
    await login();  // Wait for login to complete
    await completeSignIn();  // Wait for sign-in completion
    await setSignInStateObj(completedSignInState);
    await setBookingStateObj(activeBookingState);
    await setPaymentStateObj(defaultPaymentState);

  
    navigate(-1);  // Navigate back after everything is done
  };
  

  return (
    <main className={signUpStyle.signUp}>
      <div className={signUpStyle.signUpContainer}>
        <section className={signUpStyle.image}>
          <img src={loginImg} alt="Swimming pool" />
        </section>
        <section className={signUpStyle.signUpFormCont}>
        <section className={signUpStyle.signUpForm}>
        <div className={signUpStyle.backArrow}><ArrowBackRounded onClick={() => {navigate(-1)}}></ArrowBackRounded></div>
          <h2 className='callout-text'>Nice to have you again</h2>
          <form onSubmit={handleSignIn}>
            <fieldset>
              <label className={signUpStyle.signLabel} htmlFor="login">Login</label>
              <input type="text" id="login" />
            </fieldset>
            <fieldset>
              <label className={signUpStyle.signLabel} htmlFor="password">Password</label>
              <input type="password" id="password" />
            </fieldset>
            <fieldset className={signUpStyle.newsletter}>
              <div className={signUpStyle.group}>
                <label className={signUpStyle.switch}>
                  <input type="checkbox" />
                  <span className={`${signUpStyle.slider} ${signUpStyle.round}`}></span>
                </label>
                <label>Remember me</label>
              </div>
              <label className={signUpStyle.verify}>Forgot password</label>
            </fieldset>
            <div className={signUpStyle.btnContainer}>
              <button type="submit" className={signUpStyle.sign}>Sign In</button>
              {/* <h3>or</h3> */}
              {/* <button type="button" className={signUpStyle.google}>
                <img src={google} alt="Google icon" />
                Sign In with Google
              </button> */}
              <span className={signUpStyle.account}>
                <label htmlFor="">Don't have an account?</label>
                <label>
                  <Link style={{ color: '#3B0908', letterSpacing: '0', padding: 0 }} to='/sign-up'>
                    Sign up now
                  </Link>
                </label>
              </span>
            </div>
          </form>
          </section>
          </section>
      </div>
    </main>
  );
};

export default Login;
