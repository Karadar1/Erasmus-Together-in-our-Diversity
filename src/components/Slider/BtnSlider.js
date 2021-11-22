import React from 'react';
import leftArrow from '../../assets/left-arrow-full.svg';
import rightArrow from '../../assets/right-arrow-full.svg';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </button>
  );
}
