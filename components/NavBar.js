import Link from 'next/link';
import styles from './style.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/"> {/* Wrap the logo with a Link */}
        <a>
          <img src="/images/Logo.svg" alt="Logo" className={styles.logo} />
        </a>
      </Link>
      <Link href="/"> {/* Wrap the name with a Link */}
        <a>
          <img src="/images/Name.svg" alt="Name" className={styles.name} />
        </a>
      </Link>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
