import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { to: '/',           label: 'About'      },
  { to: '/experience', label: 'Experience' },
  { to: '/blog',       label: 'Blog'       },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.wordmark}>
          Mekias Kebede
        </NavLink>
        <nav aria-label="Main navigation">
          <ul className={styles.links}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
