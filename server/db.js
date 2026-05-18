import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn(
      '[DB] MONGO_URI not set — running without database. ' +
      'API routes will fall back to mock data.'
    );
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log('[DB] MongoDB connected');
  } catch (err) {
    console.error('[DB] Connection failed:', err.message);
    console.warn('[DB] Continuing without database — mock data in effect.');
  }
}

export function isConnected() {
  return mongoose.connection.readyState === 1;
}
