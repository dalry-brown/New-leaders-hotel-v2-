import React, { useEffect } from 'react';

const ScrollToTopOnMount: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures this runs only once, on mount

  return null; // This component doesn't render anything
};

export default ScrollToTopOnMount;
