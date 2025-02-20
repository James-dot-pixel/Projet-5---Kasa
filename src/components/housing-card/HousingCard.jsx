/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './housing-card.module.scss';

const HousingCard = ({ housing }) => {
  const imageUrl = housing.pictures[0];
  const title = housing.title;

  return (
    <div className={styles['housing-card']}>
      <img src={imageUrl} alt={title} />
      <div className={styles['heading-wrapper']}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default HousingCard;
