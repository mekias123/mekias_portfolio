import React from 'react';
import styles from './About.module.css';

const interests = [
  'ML/AI for Medical Imaging',
  'Optics & Photonics Hardware',
  'Computer Vision',
  'Histopathology & Cancer Diagnostics',
  'Computational Optics',
  'Scientific Python Ecosystem',
];

const skills = [
  { group: 'Physics',      items: 'Optics, Photonics, EM Theory, Applied Physics, MATLAB' },
  { group: 'Data Science', items: 'Python, PyTorch, scikit-learn, NumPy, Pandas, SQL' },
  { group: 'Engineering',  items: 'React, Node.js, Express, MongoDB, Git, Computer Vision' },
];

export default function About() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.bio}>
            <h1>Hello.</h1>
            <p className={styles.lead}>
              Mekias is a Senior at the University of Washington studying Applied Physics and Informatics 
              (double degree) with a focus on optics and data Science. His interests span from machine 
              learning to optical engineering for applications within the healthcare industry. 
              Mekias plans to apply for graduate school in the next year for a masters in Biomedical Engineering 
              so he can further hone his skills within AI/ML and optics topics. Mekias would like to use his 
              education to pursue a brief career in academic research then join industry by ideally starting 
              or joining a startup!
            </p>
            {/* <p>
              I work with large, messy, and complex histopathology data at Fred
              Hutch Cancer Center, building models that predict key clinical
              biomarkers to advance cancer diagnostics. My interests sit at the
              intersection of ML/AI and optics/photonics hardware for medical
              imaging applications.
            </p> */}
            {/* <p>
              I find the mathematical connections between physical systems and
              data science frameworks — Fourier optics and CNNs, spatial filters
              and convolutions — to be some of the most clarifying ideas in both
              fields.
            </p> */}
          </div>

          <div className={styles.headshot}>
            {<img src="/headshot.png" alt="Mekias Kebede" className={styles.headshotImg} />}
            <div className={styles.headshotPlaceholder} aria-hidden="true" />
          </div>
        </div>

        <hr />

        <div className={styles.columns}>
          <div>
            <h2>Interests</h2>
            <ul className={styles.list}>
              {interests.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Skills</h2>
            <dl className={styles.skillList}>
              {skills.map(({ group, items }) => (
                <div key={group} className={styles.skillRow}>
                  <dt>{group}</dt>
                  <dd>{items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
