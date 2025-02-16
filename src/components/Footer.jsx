import { Link } from 'react-router-dom';
import logo from '../assets/kasa-logo-white.svg';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">
          <img className={styles['brand-logo']} src={logo} alt="Logo Kasa" />
        </Link>
      </nav>
      <p className={styles['footer-text']}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
