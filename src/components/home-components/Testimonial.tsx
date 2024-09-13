import React from 'react';
import testimonialStyle from '../../styles/component-styles/home-components/testimonial.module.css';
import ArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import ArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Avatar } from '@mui/material';
import star from '../../assets/Star.png';
import { useScreenSizeStore } from '../../store/basicStore';
import { useState } from 'react';

const Testimonial: React.FC = () => {
    const { screenWidth } = useScreenSizeStore();

    const testimony = [
        {
        id: 1,
        numberOfStars: 5,
        content: "Staying at New Leaders Hotel was an unforgettable experience! From the luxurious comfort of the rooms to the exquisite dining in the restaurant, every detail was perfect. The staff went above and beyond to make our stay special, and the amenities were top-notch. I can't wait to return and experience this level of luxury again!",
        nameOfPerson: "Benjamin Botwe",
        about: "Acme Corp."
        },
        {
        id: 2,
        numberOfStars: 4,
        content: "Staying at New Leaders Hotel was a delightful experience. The rooms were beautifully decorated, and the dining options were impressive. The staff were friendly and accommodating, making sure we had everything we needed. The only downside was the pool area, which was a bit crowded during our stay. Overall, it was a wonderful stay, and we would definitely recommend this hotel to others!",
        nameOfPerson: "Mark Bruce",
        about: "Executive Director"
        },
        {
        id: 3,
        numberOfStars: 5,
        content: "New Leaders Hotel exceeded all our expectations! The attention to detail in every aspect of our stay was remarkable. The rooms were spacious and elegantly furnished, providing the ultimate in comfort. The restaurant served some of the best meals we've ever had, and the staff were incredibly attentive and professional. The amenities, including the spa and fitness center, were first-class. We can't wait to return and enjoy another luxurious stay at this fantastic hotel!",
        nameOfPerson: "Shila Arthur",
        about: "Accountant, Books.inc"
        }
    ] 

    const [current, setCurrent] = useState(0);
    const len = testimony.length;
  
    const handleRightClick = () => {
      setCurrent((prevCurrent) => (prevCurrent === len - 1 ? 0 : prevCurrent + 1));
      console.log(current);
      console.log(len);
    };   
  
    const handleLeftClick = () => {
      setCurrent((prevCurrent) => (prevCurrent === 0 ? len - 1 : prevCurrent - 1));
      console.log(current);
      console.log(len);
    };   

  return (
    <section className={testimonialStyle.testimonial}>
      <section className={testimonialStyle.testimonialContainer}>
        <button className={testimonialStyle.arrow} onClick={handleLeftClick}>
          <ArrowLeft />
        </button>
        <article className={testimonialStyle.testimony}>
          <div className={testimonialStyle.star}>
            {[...Array(testimony[current].numberOfStars)].map((_, index) => (
              <img key={index} src={star} alt="Star review" />
            ))}
          </div>
            <p className={testimonialStyle.quote}>
                      {testimony[current].content}
            </p>
          <div className={testimonialStyle.testimonyReference}>
            <div className={testimonialStyle.testimonyAvatar}>
                          <Avatar style={
                            (screenWidth > 1024) ?
                                  { width: '75px', height: '75px', color: '#F0F0F7', backgroundColor: '#FFFFFF' } : 
                                  { width: '56.25px', height: '56.25px', color: '#F0F0F7', backgroundColor: '#FFFFFF' }
                          } />
            </div>
            <div className={testimonialStyle.isWho}>
                <h3 style={{textAlign: 'center'}} className='caption'>{ testimony[current].nameOfPerson} </h3>
                <label>{ testimony[current].about} </label>
            </div>
          </div>
        </article>
        <button className={testimonialStyle.arrow} onClick={handleRightClick}>
          <ArrowRight />
        </button>
              <div className={testimonialStyle.smallScreenBtn}>
              <button className={testimonialStyle.smallArrow} onClick={handleLeftClick}>
                <ArrowLeft />
               </button>
              <button className={testimonialStyle.smallArrow} onClick={handleRightClick}>
                <ArrowRight />
               </button>
              </div>   
      </section>
    </section>
  );
};

export default Testimonial;
