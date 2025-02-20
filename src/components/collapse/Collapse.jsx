/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './collapse.module.scss';
import arrowDown from '../../assets/arrow-down.svg';

const Collapse = ({ title, content, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles['collapse']} ${isOpen ? styles['is-open'] : ''}`}>
      <button
        className={`${styles['collapse-header']} ${
          size === 'Large' ? styles['large'] : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          src={arrowDown}
          alt="Arrow Down"
          className={`${styles['icon']} ${isOpen ? styles['rotate-icon'] : ''}`}
        />
      </button>
      <div
        className={`${styles['collapse-content']} ${
          isOpen ? styles['is-open'] : ''
        }`}
      >
        <p className={`${isOpen ? styles['is-open'] : ''}`}>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
