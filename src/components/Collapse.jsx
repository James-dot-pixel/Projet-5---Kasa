/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from '../styles/collapse.module.scss';

const Collapse = ({ title, content, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles['collapse']}>
      <button
        className={`${styles['collapse-header']} ${
          size === 'Large' ? styles['large'] : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          src="src/assets/arrow-down.svg"
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
