/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/host.module.scss';

const Host = ({ name, picture }) => (
  <div className={styles['host']}>
    <p className={styles['host-name']}>{name}</p>
    <img src={picture} alt="Picture of the host" />
  </div>
);

export default Host;
