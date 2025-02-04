import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/kasa-logo.svg';
import styles from '../styles/header.module.scss';

const Header = () => {
  const location = useLocation();

  function manageActiveClass(path) {
    if (location.pathname === path) {
      return styles['link-active'];
    } else {
      return '';
    }
  }

  return (
    <header>
      <nav>
        <Link to="/">
          <img className={styles['brand-logo']} src={logo} alt="Logo Kasa" />
        </Link>
      </nav>
      <nav className={styles['header-nav']}>
        <Link to="/" className={manageActiveClass('/')}>
          Accueil
        </Link>
        <Link to="/about" className={manageActiveClass('/about')}>
          A propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
