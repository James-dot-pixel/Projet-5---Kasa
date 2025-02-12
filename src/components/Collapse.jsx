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
        {isOpen ? (
          <img
            src="src/assets/arrow-up.svg"
            alt="Arrow Up"
            className={styles['icon']}
          />
        ) : (
          <img
            src="src/assets/arrow-down.svg"
            alt="Arrow Down"
            className={styles['icon']}
          />
        )}
      </button>
      {isOpen && (
        <div className={styles['collapse-content']}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
