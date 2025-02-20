/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './chip.module.scss';

const Chip = ({ label }) => {
  return (
    <div className={styles['chip']}>
      <span>{label}</span>
    </div>
  );
};

export default Chip;
