import Link from 'next/link';
import styles from './style.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/"> 
        <img src="/images/Logo.svg" alt="Logo" className={styles.logo} 
        style = {{ marginTop: '15px', marginLeft: '-4px'}} />
      </Link>
      <Link href="/"> 
        <img src="/images/Name.svg" alt="Name" className={styles.name} 
        style = {{marginLeft: '15px'}}/>
      </Link>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/about">
          <img src="images/about.svg" alt="About" className={styles.about} 
          style={{marginLeft: '240px', marginTop: '-10px'}}/>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/my_work">
          <img src="images/My Work.svg" alt="About" className={styles.about} 
          style={{marginLeft: '20px'}}/>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blog">
          <img src="images/Blog.svg" alt="About" className={styles.about} 
          style={{marginLeft: '20px'}}/>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
          <img src="images/Contact.svg" alt="About" className={styles.about} 
          style={{marginLeft: '20px'}}/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;