import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  {
    src: 'https://th.bing.com/th/id/OIP.mkuFnZGgUnsjL6b5qY8C1AHaDz?w=337&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    alt: 'img1',
    caption: 'Event 1: Some description for Event 1.',
  },
  {
    src: 'http://www.tce.edu/sites/default/files/Homepage-Slider-4.jpeg',
    alt: 'img2',
    caption: 'Event 2: Some description for Event 2.',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.1W_J_2JQWIXnf3h8LOyLewHaD4?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    alt: 'img3',
    caption: 'Event 3: Some description for Event 3.',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.1W_J_2JQWIXnf3h8LOyLewHaD4?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    alt: 'img4',
    caption: 'Event 4: Some description for Event 4.',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.1W_J_2JQWIXnf3h8LOyLewHaD4?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    alt: 'img5',
    caption: 'Event 5: Some description for Event 5.',
  },
];

const Gallery = () => {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Event Gallery</h2>
      {images.length > 0 ? (
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
              <Carousel.Caption>
                <h3>{image.caption.split(':')[0]}</h3>
                <p>{image.caption.split(':')[1]}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div className="text-center">
          <p>No images available at the moment.</p>
        </div>
      )}
    </Container>
  );
};

export default Gallery;
