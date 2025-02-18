// eslint-disable-next-line no-unused-vars
import React from 'react';
import housings from '../data/housings.json';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

const Housing = () => {
  const { id } = useParams();
  const housing = housings.find((h) => h.id === id);

  if (!housing) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <main className="housing-page">
      <Slideshow images={housing.pictures} />
    </main>
  );
};

export default Housing;
