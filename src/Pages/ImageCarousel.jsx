import React, { useState } from 'react';
import image1 from '../assests/Slider-1.jpg';
// import image2 from '../assests/Slider-2.jpg';
import image3 from '../assests/Slider-3.jpg';

const images = [image1,  image3];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Carousel ${currentIndex + 1}`} />
      <div className="button-con">
        <button onClick={prevImage}>&lt;</button>
        <button onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
};

export default ImageCarousel;