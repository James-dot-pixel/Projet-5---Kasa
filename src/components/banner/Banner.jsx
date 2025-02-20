/* eslint-disable react/prop-types */
import styles from './banner.module.scss';

const Banner = ({ title, backgroundImage }) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
      }}
    >
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default Banner;
