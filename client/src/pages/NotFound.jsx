import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: '6rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)' }}>404</h1>
      <p className="text-muted mt-2">This page does not exist.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
        Go home
      </Link>
    </div>
  );
}
