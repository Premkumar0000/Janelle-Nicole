// src/App.js
import './App.css';
import image1 from './assests/Resume.jpg'; 
import image2 from './assests/img2.jpg'; 
import image3 from './assests/About.jpeg'; 
import image4 from './assests/Book.jpg'; 
import image5 from './assests/Trailer.jpeg'; 
import image6 from './assests/Gentelman.jpeg'; 

function App() {
  // Array of image data
  const images = [
    { src: image1, alt: 'Image 1 Description' },
    { src: image2, alt: 'Image 2 Description' },
    { src: image3, alt: 'Image 3 Description' },
    { src: image4, alt: 'Image 3 Description' },
    { src: image5, alt: 'Image 3 Description' },
    { src: image6, alt: 'Image 3 Description' },
  ];

  return (
    <div>
      <h1 className="Title">Janelle Carothers</h1>
      <h2 className="sub">Costume Designer + Stylist</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="image" />
        ))}
      </div>
    </div>
  );
}

export default App;