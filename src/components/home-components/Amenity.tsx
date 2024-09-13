import React from 'react';
import amenityStyle from '../../styles/component-styles/home-components/amenities.module.css';
import { useScreenSizeStore } from '../../store/basicStore';

interface AmenityProps {
  amenities: {
    id: number;
    image: string;
    imagePositionRight: boolean;
    title: string;
    content: string;
  };
}

const Amenity: React.FC<AmenityProps> = ({ amenities }) => {
  const { screenWidth } = useScreenSizeStore();

  const layoutStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: screenWidth > 599
      ? amenities.imagePositionRight
        ? 'row'
        : 'row-reverse'
      : 'column',
  };

  return (
    <section
      style={layoutStyle}
      className={amenityStyle.amenity}
      key={amenities.id}
    >
      <div className={amenityStyle.amenityImage}>
        <img src={amenities.image} alt={amenities.title} />
      </div>
      <div className={amenityStyle.amenityInfo}>
        <h5 className='secondary-text'>Local Amenities</h5>
        <h1>{amenities.title}</h1>
        <p>{amenities.content}</p>
        {/* <div className={amenityStyle.learnMore}> */}
          <button className='secondary-button' style={{margin: '20px'}}>Learn more</button>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Amenity;
