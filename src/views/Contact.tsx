import React, { useState } from 'react';
import contactStyle from '../styles/view-styles/contact.module.css';
import { Instagram, Twitter, FacebookRounded, LinkedIn, CloseRounded, ExpandMore } from '@mui/icons-material';
import { usePageStore } from "../store/basicStore"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What exactly do you do?',
    answer: 'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.'
  },
  {
    id: 2,
    question: 'What are your check-in and check-out times?',
    answer: 'Check-in is from 3 PM, and check-out is until 11 AM. Early check-in and late check-out can be arranged based on availability.'
  },
  {
    id: 3,
    question: 'Do you offer airport shuttle services?',
    answer: 'Yes, we offer complimentary airport shuttle services for our guests. Please provide your flight details in advance.'
  },
  {
    id: 4,
    question: 'Are pets allowed in the hotel?',
    answer: 'Unfortunately, pets are not allowed in the hotel to ensure the comfort of all our guests.'
  },
  {
    id: 5,
    question: 'Do you have facilities for disabled guests?',
    answer: 'Yes, we have several rooms and facilities that are accessible for disabled guests. Please let us know your requirements when booking.'
  },
  {
    id: 6,
    question: 'What dining options are available?',
    answer: 'Our hotel features a variety of dining options, including a gourmet restaurant, a casual cafe, and 24-hour room service.'
  }
];

const Contact: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (id: number) => {
    setOpenFaqs((prevOpenFaqs) => ({
      ...prevOpenFaqs,
      [id]: !prevOpenFaqs[id]
    }));
  };

  const { selectContact } = usePageStore()
    
  useEffect(() => {
    selectContact()
  }, [])


  return (
    <main className={contactStyle.contact}>
      <div className={contactStyle.contactContainer}>
        <div id='contactUs' className={contactStyle.getInTouch}>
          <div className={contactStyle.getIntouchContainer}>
            <h1 style={{textAlign: 'center'}} id='touch'>Get in touch with us</h1>
            <div className={contactStyle.contactInfo}>
              <div className={contactStyle.contactDetail}>
                <p className={contactStyle.key}>Address</p>
                <div className={contactStyle.value} id="address">
                  <p className=''>Ghana, Accra</p>
                  <p>Amasaman</p>
                  <p>MJVX+WX, Achiaman</p>
                </div>
              </div>
              <div className={contactStyle.contactDetail}>
                <p className={contactStyle.key}>Phone Number</p>
                <div className={contactStyle.value} id="phone">
                  <p>0248498755</p>
                </div>
              </div>
              <div className={contactStyle.contactDetail}>
                <p className={contactStyle.key}>Email Address</p>
                <div className={contactStyle.value} id="email">
                  <p>newleadershotel@outlook.com</p>
                </div>
              </div>
              <div className={contactStyle.contactDetail}>
                <p className={contactStyle.key}>Opening Hours</p>
                <div className={contactStyle.value} id="workingTime">
                  <p>Monday - Sunday | 24hrs</p>
                </div>
              </div>
              <div className={contactStyle.contactDetail}>
                <p className={contactStyle.key}>Social Media</p>
                <div className={contactStyle.value} style={{ display: 'flex', gap: '15px', alignItems: 'center' }} id="socialMedia">
                  <Instagram style={{ width: '30px', height: '30px' }} />
                  <Twitter style={{ width: '30px', height: '30px' }} />
                  <FacebookRounded style={{ width: '30px', height: '30px' }} />
                  <LinkedIn style={{ width: '30px', height: '30px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='faq' className={contactStyle.getInTouch}>
          <div className={contactStyle.getIntouchContainer}>
            <h1 style={{textAlign: 'center'}}>Frequently Asked Questions</h1>
            <div className={contactStyle.faqContainer}>
              {faqs.map((faq) => (
                <div key={faq.id} className={contactStyle.faq}>
                  <h1 className='page-title' style={{padding: 0}}>{faq.id < 10 ? `0${faq.id}` : faq.id}</h1>
                  <div className={contactStyle.faqBody}>
                    <div className={contactStyle.question} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h2 style={{width: '85%'}}>{faq.question}</h2>
                      <button onClick={() => toggleFaq(faq.id)}>
                        {openFaqs[faq.id] ? <CloseRounded /> : <ExpandMore />}
                      </button>
                    </div>
                    {openFaqs[faq.id] && (
                      <div className={contactStyle.answer}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={contactStyle.formAndMap}>
          <div className={contactStyle.formAndMapContainer}>
            <div className={contactStyle.form}>
              <h1 style={{textAlign: 'center'}}>Still have a question?</h1>
              <p className='callout-text'>Our friendly team would love to hear from you</p>
              <form action="">
                <fieldset>
                  <section className={contactStyle.name}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id='firstName'
                    />
                  </section>
                  <section className={contactStyle.name}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id='lastName'
                    />
                  </section>
                </fieldset>
                <section className={contactStyle.emailAndPhone}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id='email'
                    />
                </section>
                <section className={contactStyle.emailAndPhone}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id='phone'
                    />
                </section>
                <section className={contactStyle.message}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" />
                </section>
                <button>Send Message</button>
              </form>
            </div>
            <div className={contactStyle.map}>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1266093670138!2d-0.3525870249664423!3d5.694840694286925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa11b53b414db%3A0xcb42bf9a39a04b09!2sNew%20Leaders%20Hotel!5e0!3m2!1sen!2sgh!4v1721956192908!5m2!1sen!2sgh" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1266093670138!2d-0.3525870249664423!3d5.694840694286925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa11b53b414db%3A0xcb42bf9a39a04b09!2sNew%20Leaders%20Hotel!5e0!3m2!1sen!2sgh!4v1721956192908!5m2!1sen!2sgh" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
