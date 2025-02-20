// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from '../../components/banner/Banner';
import styles from './home-page.module.scss';
import HousingCard from '../../components/housing-card/HousingCard';
import housings from '../../data/housings.json';
import { Link } from 'react-router-dom';

const listItems = housings.map((housing) => (
  <li key={housing.id}>
    <Link to={`/housing/${housing.id}`}>
      <HousingCard housing={housing} />
    </Link>
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
