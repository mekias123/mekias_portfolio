import { Router } from 'express';
import { isConnected } from '../db.js';
import BlogPost from '../models/BlogPost.js';
import { mockPosts } from '../data/mockPosts.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    if (isConnected()) {
      const posts = await BlogPost.find({ published: true })
        .select('title slug excerpt tags publishedAt')
        .sort({ publishedAt: -1 });
      return res.json(posts);
    }

    const list = mockPosts
      .filter(p => p.published)
      .sort((a, b) => b.publishedAt - a.publishedAt)
      .map(({ body: _body, ...rest }) => rest);
    return res.json(list);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    if (isConnected()) {
      const post = await BlogPost.findOne({ slug, published: true });
      if (!post) return res.status(404).json({ error: 'Post not found' });
      return res.json(post);
    }

    const post = mockPosts.find(p => p.slug === slug && p.published);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    return res.json(post);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
