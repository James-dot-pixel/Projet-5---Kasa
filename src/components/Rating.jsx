/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import starActive from '../assets/star-active.svg';
import starInactive from '../assets/star-inactive.svg';
import styles from '../styles/rating.module.scss';

const Rating = ({ rating }) => {
  const maxRating = 5;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    if (i < rating) {
      stars.push(
        <img
          className={styles['rating-icon']}
          key={i}
          src={starActive}
          alt="Étoile active"
        />,
      );
    } else {
      stars.push(
        <img
          className={styles['rating-icon']}
          key={i}
          src={starInactive}
          alt="Étoile inactive"
        />,
      );
    }
  }

  return <div className={styles['rating-wrapper']}>{stars}</div>;
};

export default Rating;
