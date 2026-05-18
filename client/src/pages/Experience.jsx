import React from 'react';
import styles from './Experience.module.css';

const entries = [
  // ── Work ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    kind: 'Work',
    title: 'Research Engineer',
    org: 'Sensors, Energy, and Automation Laboratory (SEAL)',
    period: 'May 2026 – Present',
    description:
      'Working within the SEAL lab at UW on sensor and automation systems. Focus on applied engineering research bridging physical sensor hardware and computational methods.',
  },
  
  {
    id: 3,
    kind: 'Work',
    title: 'Data Scientist — Etzioni Lab',
    org: 'Fred Hutch Cancer Center',
    period: 'May 2025 – Present',
    description:
      'Building machine learning pipelines on large-scale histopathology data to predict clinical biomarkers for cancer diagnostics. Work spans whole-slide image processing, model development, and evaluation for downstream clinical use. Contributed to Modeling and Analytics for Cancer Diagnostics research within the Etzioni Lab. Developed and validated quantitative models for biomarker prediction from complex clinical datasets.',
  },
  {
    id: 4,
    kind: 'Work',
    title: 'Data Scientist',
    org: 'UW Department of Statistics',
    period: 'Nov 2021 – Jan 2022',
    description:
      'Collaborated on statistical research projects within the UW Statistics department. Applied data analysis and modeling techniques to research datasets.',
  },
  // ── Research ──────────────────────────────────────────────────────────────
  {
    id: 5,
    kind: 'Research',
    title: 'Undergraduate Researcher',
    org: 'Applied Physics Laboratory — UW',
    period: 'Jun 2024 – Sep 2024',
    description:
      'Conducted research at the UW Applied Physics Laboratory. Gained hands-on experience with physics-based instrumentation and experimental methods in an applied research setting.',
  },
  // ── Community ─────────────────────────────────────────────────────────────
  {
    id: 6,
    kind: 'Community',
    title: 'Mentor',
    org: 'Young Executives In Our Community',
    period: 'Sep 2022 – Sep 2023',
    description:
      'Mentored youth in the Seattle area through the YEOC program, providing academic and professional guidance to help students navigate college preparation and early career paths.',
  },
  {
    id: 7,
    kind: 'Community',
    title: 'Lead Educator — STEM Camp',
    org: 'The Museum of Flight',
    period: 'Jun 2021 – Sep 2022',
    description:
      'Led STEM education programming for K–12 students at the Museum of Flight\'s summer camp. Designed and delivered hands-on lessons in aviation, engineering, and physics.',
  },
  // ── Education ─────────────────────────────────────────────────────────────
  {
    id: 8,
    kind: 'Education',
    title: 'B.S. Physics (Applied) & Informatics (Data Science)',
    org: 'University of Washington, Seattle',
    period: '2021 – 2026',
    description:
      'Double degree combining Applied Physics with an optics and photonics focus and Informatics with a data science concentration. Coursework spans wave optics, electromagnetic theory, statistical inference, machine learning, and human-centered data analysis.',
  },
  {
    id: 9,
    kind: 'Education',
    title: 'High School Diploma',
    org: 'Raisbeck Aviation High School',
    period: '2017 – 2021',
    description:
      'STEM-focused aviation high school with an emphasis on engineering, mathematics, and aerospace science.',
  },
];

const kindOrder = ['Work', 'Research', 'Community', 'Education'];

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1>Experience</h1>
        <p className={`text-muted mt-2 mb-4`} style={{ maxWidth: '520px' }}>
          Research, data science, and community work across physics, medicine,
          and education.
        </p>

        <div className={styles.timeline}>
          {kindOrder.flatMap(kind => {
            const group = entries.filter(e => e.kind === kind);
            if (!group.length) return [];
            return [
              <div key={`label-${kind}`} className={styles.kindLabel}>
                {kind}
              </div>,
              ...group.map(entry => (
                <article key={entry.id} className={styles.card}>
                  <div className={styles.cardMeta}>
                    <span className={styles.period}>{entry.period}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{entry.title}</h3>
                    <p className={styles.cardOrg}>{entry.org}</p>
                    <p className={styles.cardDesc}>{entry.description}</p>
                  </div>
                </article>
              )),
            ];
          })}
        </div>
      </div>
    </section>
  );
}
