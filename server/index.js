import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
import postRoutes from './routes/posts.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/posts', postRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
