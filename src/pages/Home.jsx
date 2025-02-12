// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from '../components/Banner.jsx';
import styles from '../styles/home.module.scss';
import HousingCard from '../components/HousingCard';
import housings from '../data/housings.json';

const listItems = housings.map((housing) => (
  <li key={housing.id}>
    <HousingCard housing={housing} />
  </li>
));

const Home = () => {
  return (
    <main>
      <Banner
        title="Chez vous, partout et ailleurs"
        backgroundImage="/src/assets/home-banner-bg.jpg"
      />
      <ul className={styles['housings-grid']}>{listItems}</ul>
    </main>
  );
};

export default Home;
