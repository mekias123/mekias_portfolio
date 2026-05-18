import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Tag from '../components/Tag.jsx';
import styles from './BlogPost.module.css';

function renderBody(body) {
  return body.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i}>{block.slice(3)}</h2>;
    }
    if (block.startsWith('```')) {
      const code = block.replace(/^```[a-z]*\n?/, '').replace(/\n?```$/, '');
      return <pre key={i}><code>{code}</code></pre>;
    }
    return <p key={i}>{block}</p>;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/posts/${slug}`)
      .then(r => {
        if (!r.ok) throw new Error(r.status === 404 ? 'Post not found.' : 'Failed to fetch post');
        return r.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return (
    <div className="container" style={{ paddingTop: '5rem' }}>
      <p className="text-muted">Loading&hellip;</p>
    </div>
  );

  if (error) return (
    <div className="container" style={{ paddingTop: '5rem' }}>
      <p className="text-muted">{error}</p>
      <Link to="/blog" style={{ display: 'inline-block', marginTop: '1rem' }}>
        &larr; Back to blog
      </Link>
    </div>
  );

  return (
    <article className={styles.article}>
      <div className="container">
        <Link to="/blog" className={styles.back}>&larr; Blog</Link>

        <header className={styles.header}>
          {post.publishedAt && (
            <time dateTime={post.publishedAt} className={styles.date}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </time>
          )}
          <h1 className={styles.title}>{post.title}</h1>
          {post.tags?.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map(t => <Tag key={t} label={t} />)}
            </div>
          )}
        </header>

        <hr />

        <div className={styles.body}>
          {renderBody(post.body)}
        </div>
      </div>
    </article>
  );
}
