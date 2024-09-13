import { useState, useRef, useEffect } from 'react';import bookingStyle from '../styles/view-styles/booking.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowBackRounded, ArrowForwardRounded } from '@mui/icons-material'
import { useRoomSettingsStore, useScreenSizeStore } from '../store/basicStore'
import { useBookingStatus } from '../store/bookingStore';
import { useAuth } from '../store/authStore';
import { Check } from '@mui/icons-material'
import { Routes, Route } from 'react-router-dom'
import MyDatePicker from '../components/universal-components/MyDatePicker';
import {useBookingState, useBookingStyleChanges} from '../store/bookingStore'

const HaveLogin = () => {
  // const { bookingSignedIn, completeSignIn } = useBookingStatus();
  // const { loggedIn, login } = useAuth();
  const { signInStateObj } = useBookingState();

  return(
    <section className={bookingStyle.section1}>
      <div
        className={bookingStyle.section1Cover}
        style={
          {
            boxShadow: signInStateObj.boxShadow,
            background: 'rgba(243, 245, 246, .95)',
            // width: '413px',
            height: '100%',
            position: 'absolute',
            top: 0,
            display: signInStateObj.backgroundDisplay,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px'
          }}

      >
        <div style={{display: signInStateObj.checkDisplay}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Check
              style={
                {
                  borderRadius: '100px',
                  height: '130px',
                  width: '130px',
                  background: '#4CAF50',
                  color: '#ffffff'
                }}
            />
          </div>
          <div className={ bookingStyle.proceedToConfirm }>
            <h3 className={bookingStyle.signInSuccess} style={{color: '#1C2A48'}}>Sign In Successful</h3>
            <div className={ bookingStyle.proceed }>
              <Link className={bookingStyle.proceedLink} to='/booking/confirm-booking'>
                <h4 className={bookingStyle.proceedArrowText}>Proceed to book</h4>
                <div className={bookingStyle.forwardArrow}><ArrowForwardRounded/></div>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      {/* {bookingSignedIn && <div className={bookingStyle.complete1}><Check style={{borderRadius: '100px', height: '130px', width: '130px', background: '#4CAF50', color: '#ffffff'}}/></div> } */}
      {/* <div className={bookingStyle.complete1}><Check style={{borderRadius: '100px', height: '130px', width: '130px', background: '#4CAF50', color: '#ffffff'}}/></div>  */}
      {/* <div className={bookingStyle.complete1}></div>  */}
  <h2 className='callout-text' style={{color: '#1C2A48', textAlign: 'center'}}>
    To continue Booking <Link 
      to='/login' className='link' style={{color: '#B22222'}}><br/>Sign In</Link>  or <Link className='link' style={{color: '#B22222'}} to='/sign-up'>Sign Up</Link>
      </h2>
</section>)
}




const ConfirmBooking = () => {
  const { tempRoom, setTempRoom } = useRoomSettingsStore();
  const { completeBooking, completeSignIn } = useBookingStatus();
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const checkInRef = useRef<HTMLButtonElement | null>(null);
  const checkOutRef = useRef<HTMLButtonElement | null>(null);
  const datePickerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (checkInRef.current && !checkInRef.current.contains(event.target as Node) &&
        datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
      setIsCheckInOpen(false);
    }
    if (checkOutRef.current && !checkOutRef.current.contains(event.target as Node) &&
        datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
      setIsCheckOutOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   setTempRoom({
  //     ...tempRoom,
  //     checkIn: checkInDate,
  //     checkOut: checkOutDate
  //   });
  // }, [checkInDate, checkOutDate]);

  useEffect(() => {
    setTempRoom((prevTempRoom) => ({
      ...prevTempRoom,
      checkIn: checkInDate,
      checkOut: checkOutDate
    }));
  }, [checkInDate, checkOutDate]);
  

  const handleConfirmBooking = () => {
    // console.log(tempRoom);
    completeBooking();
  };

  const handleEditBooking = () => {
    // setSignInStateObj(completedSignInState);
    // setBookingStateObj(activeBookingState);
    completeSignIn();
    // setPaymentStateObj(activePaymentState);
  }

  const { bookingStateObj } = useBookingState();

  return (
    <section className={bookingStyle.section2}>
      <div
        className={bookingStyle.section2Cover}
        style={
          {
            boxShadow: bookingStateObj.boxShadow,
            background: 'rgba(243, 245, 246, .95)',
            // width: '413px',
            height: '100%',
            position: 'absolute',
            top: 0,
            display: bookingStateObj.backgroundDisplay,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            zIndex: '1000'
          }}

      >
        <div style={{ display: bookingStateObj.checkDisplay }}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Check
              style={
                {      
                  borderRadius: '100px',
                  height: '130px',
                  width: '130px',
                  background: '#4CAF50',
                  color: '#ffffff'
                }}
                />
          </div>
          <div className={ bookingStyle.proceedToConfirm }>
            <h3 className={bookingStyle.signInSuccess} style={{color: '#1C2A48'}}>Booking Successful</h3>
            <div className={ bookingStyle.proceed }>
              <Link className={bookingStyle.proceedLink} to='/booking/payment-choice'>
                <h4 className={bookingStyle.proceedArrowText}>Proceed to make payment choice</h4>
                <div className={bookingStyle.forwardArrow}><ArrowForwardRounded/></div>
              </Link>
                <div onClick={() => handleEditBooking()} className={bookingStyle.editBookingProcess}><h5 className={bookingStyle.editTitle}>Edit Booking</h5></div>
              
            </div>
          </div>
        </div>
      </div>
            {/* {bookingConfirmedDetail && <div className={bookingStyle.complete2}><Check style={{borderRadius: '100px', height: '130px', width: '130px', background: '#4CAF50', color: '#ffffff'}}/></div>} */}
      <div className={bookingStyle.details}>
        <h2  className={bookingStyle.sectionTitle}>Booking Details</h2>
        <form onSubmit={(event) => {event.preventDefault()}} className={bookingStyle.bookingForm} action="">
          <fieldset>
            <label htmlFor="bookId">Booking ID:</label>
            <input
              type="text"
              value='c11f3680-a7ad-40b0-b61b-d6548852e594'
              id='bookId'
              autoComplete='off'
            />
          </fieldset>
          <fieldset>
            <label htmlFor="roomType">Room Type:</label>
            {/* <input
              type="text"
              value={(tempRoom.roomType) ? tempRoom.roomType.accType : ''}
              id='roomType'
            /> */}
            <select name="roomType" id="roomType">
              <option value="VIP Lounge">VIP Lounge</option>
              <option value="Executive Lounge">Executive Lounge</option>
              <option value="Standard Double">Standard Double</option>
              <option value="Single Occupancy">Single Occupancy</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="numberOfRooms">No. Rooms:</label>
            <input
              type="number"
              value={tempRoom?.number ?? ''}
              id='numberOfRooms'
              autoComplete='off'

            />
          </fieldset>
          <fieldset>
            <label htmlFor="checkIn">Check In:</label>
            <button
              style={{ position: 'relative' }}
              ref={checkInRef}
              onClick={() => setIsCheckInOpen(!isCheckInOpen)}
              className={bookingStyle.checkInOutBtn}
            >
              {checkInDate ? checkInDate.toLocaleDateString() : 'Select Check In Date'}
              {isCheckInOpen && (
              <div className={bookingStyle.picker} ref={datePickerRef}>
                <MyDatePicker
                  selectedDate={checkInDate}
                  setSelectedDate={setCheckInDate}
                  excludedDates={[]}
                />
              </div>
            )}
            </button>

          </fieldset>
          <fieldset>
            <label htmlFor="checkOut">Check Out:</label>
            <button className={bookingStyle.checkInOutBtn}
              style={{ position: 'relative' }}
              ref={checkOutRef}
              onClick={() => setIsCheckOutOpen(!isCheckOutOpen)}
            >
              {checkOutDate ? checkOutDate.toLocaleDateString() : 'Select Check Out Date'}
              {isCheckOutOpen && (
              <div className={bookingStyle.picker} ref={datePickerRef}>
                <MyDatePicker
                  selectedDate={checkOutDate}
                  setSelectedDate={setCheckOutDate}
                  excludedDates={checkInDate ? [checkInDate] : []}
                />
              </div>
            )}
            </button>
          </fieldset> 
          <fieldset>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              value={email}
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='off'

            />
          </fieldset>
          <fieldset>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              autoComplete='off'
            />
          </fieldset>
        </form>
      </div>
      <button onClick={handleConfirmBooking} className={bookingStyle.bookingButton}><p style={{ color: "#F3F5F6", textDecoration: 'none', width: '100%', margin: 0 }}>Confirm Booking</p></button>
    </section>
  )
} 




const PaymentDecision = () => {
  const { completePaymentDecision, completeBooking } = useBookingStatus();
  const { paymentStateObj } = useBookingState();
  // const { completePaymentDecision } = useBookingStatus();

  const handleCompletePaymentDecision = () => {
    completePaymentDecision();
  }

  const handleEditChoice = () => {
    // setSignInStateObj(completedSignInState);
    // setBookingStateObj(activeBookingState);
    completeBooking();
    // setPaymentStateObj(activePaymentState);
  }



  return(
    <section className={bookingStyle.section3} >
      <div
        className={bookingStyle.section3Cover}
        style={
          {
            boxShadow: paymentStateObj.boxShadow,
            display: paymentStateObj.backgroundDisplay,
            background: 'rgba(243, 245, 246, .95)',
            // width: '413px',
            height: '100%',
            position: 'absolute',
            top: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            zIndex: 10
          }}

      >
      <div style={{display: paymentStateObj.checkDisplay}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Check
            style={
              {
                borderRadius: '100px',
                height: '130px',
                width: '130px',
                background: '#4CAF50',
                color: '#ffffff'
              }}
          />
        </div> 
        <div className={ bookingStyle.proceedToConfirm }>
          <h3 className={bookingStyle.signInSuccess}>Hotel Payment Confirmed</h3>
          <div className={ bookingStyle.proceed }>
            <Link className={bookingStyle.proceedLink} to='/booking/payment-choice'>
              <h4 className={bookingStyle.proceedArrowText}>Proceed to make view booking</h4>
              <div className={bookingStyle.forwardArrow}><ArrowForwardRounded/></div>
              </Link>  
              <div className={bookingStyle.editBookingProcess}><h5 onClick={() => handleEditChoice()} className={bookingStyle.editTitle}>Edit Choice</h5></div>  
          </div>
        </div>          
        </div>
      </div>
      {/* style={bookingPaymentDecisionMade ? { boxShadow: 'none' } : { boxShadow: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)' }} */}
      {/* {bookingPaymentDecisionMade && <div className={bookingStyle.complete3}><Check style={{ borderRadius: '100px', height: '130px', width: '130px', background: '#4CAF50', color: '#ffffff' }} /></div>} */}
  <h2 className={bookingStyle.sectionTitle}>
    Select Payment Method 
      </h2>
      <div className={bookingStyle.paymentDescription}>
        <p className={bookingStyle.optionsTitle}>Kindly select your preferred payment method:</p><br />
          <div className={bookingStyle.paymentOptions}>
            <div className={bookingStyle.option1}>
              <div style={{backgroundColor: '#4CAF50', border: '2px solid #4CAF50'}} className={bookingStyle.optionCircle}></div>
              <p>You can either pay securely online now</p>
            </div>
            <div className={bookingStyle.option1}>
              <div style={{backgroundColor: '#B22222', border: '2px solid #B22222'}} className={bookingStyle.optionCircle}></div>
              <p>or opt to pay at the hotel upon arrival.</p> 
            </div>
        </div>
      </div>
      <div className={bookingStyle.btns}>
      <button className={bookingStyle.purchaseBtn}><Link style={{ fontWeight: '600', color: "#FFFFFF",textDecoration: 'none', width: '100%' }} to='#'>Pay Online</Link></button>
      <button onClick={() => handleCompletePaymentDecision()} className={bookingStyle.bookingButton}><Link style={{ color: "#F3F5F6", textDecoration: 'none', width: '100%' }} to='#'>Pay at Hotel</Link></button>
      </div>
</section>)
}

const Booking = () => {
  const { bookingSignedIn, bookingConfirmedDetail, bookingPaymentDecisionMade } = useBookingStatus();
  const { setSignInStateObj, setBookingStateObj, setPaymentStateObj } = useBookingState();
  const { defaultSignInState, completedSignInState, defaultBookingState, activeBookingState, completedBookingState, defaultPaymentState, activePaymentState, completedPaymentState } = useBookingStyleChanges();
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  const { screenWidth, setScreenWidth } = useScreenSizeStore();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Initial setting of the screen width
    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  useEffect(() => {
    const updateStatesAsync = async () => {
      console.log(bookingSignedIn);
      console.log(bookingConfirmedDetail);
      console.log(bookingPaymentDecisionMade);
      
      if (!bookingSignedIn && !bookingConfirmedDetail && !bookingPaymentDecisionMade) {
        await setSignInStateObj(defaultSignInState);
        await setBookingStateObj(defaultBookingState);
        await setPaymentStateObj(defaultPaymentState);
      } else if (bookingSignedIn && !bookingConfirmedDetail && !bookingPaymentDecisionMade) {
        await setSignInStateObj(completedSignInState);
        await setBookingStateObj(activeBookingState);
        await setPaymentStateObj(defaultPaymentState);
      } else if (bookingSignedIn && bookingConfirmedDetail && !bookingPaymentDecisionMade) {
        await setSignInStateObj(completedSignInState);
        await setBookingStateObj(completedBookingState);
        await setPaymentStateObj(activePaymentState);
      } else if (bookingSignedIn && bookingConfirmedDetail && bookingPaymentDecisionMade) {
        await setSignInStateObj(completedSignInState);
        await setBookingStateObj(completedBookingState);
        await setPaymentStateObj(completedPaymentState);
      }
  
      // If you uncomment these lines, you can ensure they run after the above operations
      // if (bookingSignedIn) {
      //   await setSignInStateObj(completedSignInState);
      //   console.log("You're logged");
      //   // Uncomment these lines if needed:
      //   // await setBookingStateObj(completedBookingState);
      //   // await setPaymentStateObj(activePaymentState);
      //   // completeSignIn(); // this action can be awaited too if async
      // }
    };
  
    updateStatesAsync(); // Call the async function
  
  }, [bookingSignedIn, bookingConfirmedDetail, bookingPaymentDecisionMade, loggedIn]);
  
  


  return (
      <>
      <main className={bookingStyle.booking}>
        <div className={bookingStyle.bookingContainer}>
          <div className={bookingStyle.backArrow}><ArrowBackRounded onClick={() => {navigate(-1)}}></ArrowBackRounded></div>
          <div className={bookingStyle.container}>
            <div className={bookingStyle.circleSection}>
              <div className={bookingStyle.circlesContainer}>
                <Link to='/booking'><div className={bookingStyle.circle} style={(bookingSignedIn || bookingConfirmedDetail || bookingPaymentDecisionMade) ? {background: '#4CAF50'} : {background: 'none'}}></div></Link>
                <Link to='/booking/confirm-booking'><div className={bookingStyle.circle} style={(bookingConfirmedDetail || bookingPaymentDecisionMade) ? {background: '#4CAF50'} : {background: 'none'}}></div></Link>
                <Link to='/booking/payment-choice'><div className={bookingStyle.circle} style={(bookingPaymentDecisionMade) ? {background: '#4CAF50'} : {background: 'none'}}></div></Link>
              </div>
            </div>
            <div className={bookingStyle.bookingProcess}>
              {
                (screenWidth > 1080) ? (
                  <>
                    <HaveLogin />
                    <ConfirmBooking />
                    <PaymentDecision />
                  </>
                ) :
              <Routes>
                <Route path='/' element={<HaveLogin />} />
                <Route path='confirm-booking' element={<ConfirmBooking />} />
                <Route path='payment-choice' element={<PaymentDecision />} />
              </Routes>
                  
              }

            </div>
          </div>
        </div>
      </main>
      </>
  )
}

export default Booking;