import React from 'react';
import ImageGallery from 'react-image-gallery';


import pizza from '../../assets/pizza1.jpg';
import icecream from '../../assets/ice-cream.jpg';
import burger from '../../assets/burger.jpeg';
import salad from '../../assets/salad.jpeg';
import chicken from '../../assets/chicken-wing.jpeg'


 
const images = [
  {
    original: pizza,
    thumbnail: pizza,
  },
  {
    original: salad,
    thumbnail: salad,
  },
  {
    original: burger,
    thumbnail: burger,
  },
  {
    original: icecream,
    thumbnail: icecream,
  },
  {
    original: chicken,
    thumbnail: chicken,
  },
];

const HomeSlider = (props) => {    
    return <ImageGallery items={images} thumbnailPosition="top" autoPlay={true} infinite={true} additionalClass="add-index" slideDuration={2000} slideInterval={2000}/>;
}

export default HomeSlider;