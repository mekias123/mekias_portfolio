import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className="text-muted text-small">
          &copy; {year} Mekias Kebede
        </span>
        <nav aria-label="Social links">
          <ul className={styles.social}>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted text-small"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mekias-kebede-2486721bb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted text-small"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
