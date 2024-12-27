import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import image1 from '../assests/Poti-1.png';
import image2 from '../assests/Poti-02.png';
import image3 from '../assests/Poti-3.jpg';
import image4 from '../assests/Poti-4.jpg';
import image5 from '../assests/Poti-5.jpg';
import image6 from '../assests/Poti-6.jpg';
import image7 from '../assests/poti-7.jpg';
import image8 from '../assests/poti-8.jpg';
import image9 from '../assests/poti-9.jpg';

const imageList = [image1, image2, image3, image4, image5, image6, image7, image8, image9]; 

const Portifoliyo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {selectedImage && (
        <div>
          <ImageCarousel selectedImage={selectedImage} onClose={handleCloseCarousel} />
        </div>
      )}
      <div className="portfolio-grid">
        {imageList.map((image, index) => (
          <div className="portfolio-item" key={index}>
            <div className="image-container" onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Portfolio ${index + 1}`} className="image" loading="lazy" />
              <div className="image-overlay">
                <div className="overlay-label">janelle Carothers<br /><i style={{ fontSize: "16px" }}>--view--</i></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portifoliyo;