/* eslint-disable react/prop-types */
import styles from '../styles/banner.module.scss';

const Banner = ({ title }) => {
  return <div className={styles['banner']}>{title && <h1>{title}</h1>}</div>;
};

export default Banner;
