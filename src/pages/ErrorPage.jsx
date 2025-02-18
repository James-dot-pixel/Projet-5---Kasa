import { useNavigate } from 'react-router-dom';
import styles from '../styles/error-page.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className={styles['error-page']}>
      <h1>404</h1>
      <p>{`Oups! La page que vous demandez n'existe pas.`}</p>
      <a href="#" onClick={() => navigate('/')}>
        {`Retourner sur la page d'accueil`}
      </a>
    </main>
  );
};

export default ErrorPage;
