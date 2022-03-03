import React, { useState } from 'react';
import BtnSlider from './BtnSlider';
import { SliderData } from '../../utils/SliderData';
import Link from '@mui/styled-engine-sc'

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === SliderData.length - 1) return setSlideIndex(0);
    return setSlideIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (slideIndex === 0) return setSlideIndex(SliderData.length - 1);
    return setSlideIndex((prev) => prev - 1);
  };
  return (
    <div className="carouselContainer">
      <h2 id='carouselTitle'>
        {SliderData[slideIndex].title}
      </h2>
    <div className='container-slider'>
      {SliderData.map((obj, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index ? 'slide active-anim' : 'slide'}
          >
            <img src={obj.img} className={`media_${obj.title}`} />
          </div>          
        );
      })}
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
    </div>
      <a href={SliderData[slideIndex].linkToWebsite}>{SliderData[slideIndex].descriprion}</a>
    </div>
  );
}
