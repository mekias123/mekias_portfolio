import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../components/Tag.jsx';
import styles from './Blog.module.css';

export default function Blog() {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || ''}/api/posts`)
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch posts');
        return r.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <h1>Blog</h1>
        <p className="text-muted mt-2 mb-4" style={{ maxWidth: '520px' }}>
          Notes on histopathology, optics, machine learning, and the places
          where they unexpectedly agree.
        </p>

        {loading && <p className="text-muted">Loading&hellip;</p>}
        {error   && <p className="text-muted">Could not load posts: {error}</p>}

        {!loading && !error && (
          <ul className={styles.list}>
            {posts.map(post => (
              <li key={post._id} className={styles.item}>
                <Link to={`/blog/${post.slug}`} className={styles.itemLink}>
                  <article className={styles.card}>
                    <div className={styles.cardTop}>
                      <h2 className={styles.cardTitle}>{post.title}</h2>
                      {post.publishedAt && (
                        <time
                          dateTime={post.publishedAt}
                          className={styles.date}
                        >
                          {new Date(post.publishedAt).toLocaleDateString(
                            'en-US',
                            { year: 'numeric', month: 'long', day: 'numeric' }
                          )}
                        </time>
                      )}
                    </div>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    {post.tags?.length > 0 && (
                      <div className={styles.tags}>
                        {post.tags.map(t => <Tag key={t} label={t} />)}
                      </div>
                    )}
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
