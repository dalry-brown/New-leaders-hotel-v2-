import { create } from "zustand";

interface useBookingStatusType {
    bookingSignedIn: boolean;
    bookingConfirmedDetail: boolean;
    bookingPaymentDecisionMade: boolean;
    completeSignIn: () => void;
    completeBooking: () => void;
    completePaymentDecision: () => void;
}

export const useBookingStatus = create<useBookingStatusType>((set) => ({
    bookingSignedIn: false,
    bookingConfirmedDetail: false,
    bookingPaymentDecisionMade: false,
    completeSignIn: () => set({
      bookingSignedIn: true,
      bookingConfirmedDetail: false,
      bookingPaymentDecisionMade: false,
    }),
    completeBooking: () => set({
      bookingSignedIn: true,
      bookingConfirmedDetail: true,
      bookingPaymentDecisionMade: false,
    }),
    completePaymentDecision: () => set({
      bookingSignedIn: true,
      bookingConfirmedDetail: true,
      bookingPaymentDecisionMade: true, 
    }),
}));

interface bookingStateType {
    boxShadow: string;
    backgroundDisplay: string;
    checkDisplay: string;
}

interface bookingStylesChangesState {
    defaultSignInState: bookingStateType;
    completedSignInState: bookingStateType;
    defaultBookingState: bookingStateType;
    activeBookingState: bookingStateType;
    completedBookingState: bookingStateType;
    defaultPaymentState: bookingStateType;
    activePaymentState: bookingStateType;
    completedPaymentState: bookingStateType;
}

export const useBookingStyleChanges = create<bookingStylesChangesState>(() => ({
    defaultSignInState: {
        boxShadow: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)',
        backgroundDisplay: 'none',
        checkDisplay: 'none',
    },
    completedSignInState: {
        boxShadow: 'none',
        backgroundDisplay: 'flex',
        checkDisplay: 'block',
    },
    defaultBookingState: {
        boxShadow: 'none',
        backgroundDisplay: 'flex',
        checkDisplay: 'none',  // Corrected from 'nonr'
    },
    activeBookingState: {
        boxShadow: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)',
        backgroundDisplay: 'none',
        checkDisplay: 'none',
    },
    completedBookingState: {
        boxShadow: 'none',
        backgroundDisplay: 'flex',
        checkDisplay: 'block',
    },
    defaultPaymentState: {
        boxShadow: 'none',
        backgroundDisplay: 'flex',
        checkDisplay: 'none',  // Corrected from 'nonr'
    },
    activePaymentState: {
        boxShadow: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)',
        backgroundDisplay: 'none',
        checkDisplay: 'none',
    },
    completedPaymentState: {
        boxShadow: 'none',
        backgroundDisplay: 'flex',
        checkDisplay: 'block',
    },
}));

interface useBookingStateType {
    signInStateObj: bookingStateType;
    bookingStateObj: bookingStateType;
    paymentStateObj: bookingStateType;
    setSignInStateObj: (object: bookingStateType) => void;
    setBookingStateObj: (object: bookingStateType) => void;
    setPaymentStateObj: (object: bookingStateType) => void;
}

export const useBookingState = create<useBookingStateType>((set) => {
    
    return {
        signInStateObj: {
            boxShadow: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)',
            backgroundDisplay: 'none',
            checkDisplay: 'none',
        },
        bookingStateObj: {
            boxShadow: 'none',
            backgroundDisplay: 'rgba(243, 245, 246, .88)',
            checkDisplay: 'none',  // Corrected from 'nonr'
        },
        paymentStateObj: {
            boxShadow: 'none',
            backgroundDisplay: 'rgba(243, 245, 246, .88)',
            checkDisplay: 'none',  // Corrected from 'nonr'
        },
        setSignInStateObj: (object: bookingStateType) => set({ signInStateObj: object }),
        setBookingStateObj: (object: bookingStateType) => set({ bookingStateObj: object }),
        setPaymentStateObj: (object: bookingStateType) => set({ paymentStateObj: object }),   
    };
});
