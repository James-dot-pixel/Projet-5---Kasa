/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './slideshow.module.scss';
import backwardArrow from '../../assets/slideshow-arrow-backward.svg';
import forwardArrow from '../../assets/slideshow-arrow-forward.svg';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles['slideshow']}>
      {images.length > 1 && (
        <>
          <button className={styles['btn-previous']} onClick={handlePrevious}>
            <img
              className={styles['arrow-icon']}
              src={backwardArrow}
              alt="Précédent"
            />
          </button>
          <button className={styles['btn-next']} onClick={handleNext}>
            <img
              className={styles['arrow-icon']}
              src={forwardArrow}
              alt="Suivant"
            />
          </button>
        </>
      )}
      <img
        className={styles['image']}
        src={images[currentIndex]}
        alt="housing"
      />
      {images.length > 1 && (
        <p className={styles['numbers-stepper']}>
          {currentIndex + 1}/{images.length}
        </p>
      )}
    </div>
  );
};

export default Slideshow;
