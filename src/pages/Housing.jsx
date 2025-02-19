/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import housings from '../data/housings.json';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Chip from '../components/Chip';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import styles from '../styles/housing-page.module.scss';

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const housing = housings.find((h) => h.id === id);

  useEffect(() => {
    if (!housing) {
      navigate('/error');
    }
  }, [id, navigate, housing]);

  if (!housing) {
    return null;
  }

  const equipmentList = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {housing.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  );

  return (
    <main className={styles['housing-page']}>
      <Slideshow images={housing.pictures} />
      <div className={styles['info-wrapper']}>
        <div className={styles['primary-secondary-info-wrapper']}>
          <div className={styles['primary-info']}>
            <h1 className={styles['housing-title']}>{housing.title}</h1>
            <p className={styles['housing-location']}>{housing.location}</p>
            <div className={styles['chips-container']}>
              {housing.tags.map((tag, index) => (
                <Chip key={index} label={tag} />
              ))}
            </div>
          </div>
          <div className={styles['secondary-info']}>
            <Host name={housing.host.name} picture={housing.host.picture} />
            <Rating rating={housing.rating} />
          </div>
        </div>
        <div className={styles['tertiary-info']}>
          <Collapse
            title="Description"
            content={housing.description}
            size="Medium"
          />
          <Collapse title="Équipements" content={equipmentList} size="Medium" />
        </div>
      </div>
    </main>
  );
};

export default Housing;
