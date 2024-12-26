// src/App.js
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import image1 from './assests/Resume.jpg'; 
import image2 from './assests/img2.jpg'; 
import image3 from './assests/About.jpeg'; 
import image4 from './assests/Book.jpg'; 
import image5 from './assests/Trailer.jpeg'; 
import image6 from './assests/Gentelman.jpeg'; 

import Resume from './Pages/Resume';
import Portifoliyo from './Pages/Portifoliyo'; 
import About from './Pages/About';
import Trailer from './Pages/Trailer';
import Books from './Pages/Books';
import Gentelman from './Pages/Gentelman';
import Layout from './Pages/Layout';

function App() {
  const images = [
    { src: image1, alt: 'Resume', path: '/resume', title: 'Resume' },
    { src: image2, alt: 'Portfolio', path: '/portfolio', title: 'Portifoliyo' },
    { src: image3, alt: 'About', path: '/about', title: 'About' },
    { src: image4, alt: 'Book', path: '/book', title: 'Book' },
    { src: image5, alt: 'Trailer', path: '/trailer', title: 'Trailer' },
    { src: image6, alt: 'Gentleman', path: '/gentleman', title: 'Gentleman' },
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path="/" 
            element={
              <Layout>
                <div className="image-gallery">
                  {images.map((image, index) => (
                    <Link to={image.path} key={index} className="image-container">
                      <img src={image.src} alt={image.alt} className="image" />
                      <div className="overlay"></div>
                      <div className="image-title">{image.title}</div> {/* Title added here */}
                    </Link>
                  ))}
                </div>
              </Layout>
            } 
          />
          <Route path="/resume" element={<Layout><Resume /></Layout>} />
          <Route path="/portfolio" element={<Layout><Portifoliyo /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/book" element={<Layout><Books /></Layout>} />
          <Route path="/trailer" element={<Layout><Trailer /></Layout>} />
          <Route path="/gentleman" element={<Layout><Gentelman /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;