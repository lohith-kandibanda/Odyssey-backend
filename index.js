import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import storyRoutes from "./routes/storyRoutes.js";
import geminiRoutes from "./routes/geminiRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Simple health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve media files
app.use("/media", express.static("public/media"));

// API routes
app.use("/api/stories", storyRoutes);
app.use("/api/gemini", geminiRoutes);

// Mongo Connection: prefer MONGODB_URI from env, fallback to local
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/brahmi'
mongoose.connect(mongoUri)
  .then(() => console.log(`MongoDB Connected -> ${mongoUri.startsWith('mongodb://127.0.0.1') ? 'local' : 'remote'}`))
  .catch(err => console.error('MongoDB error:', err));

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});
process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled rejection at:', p, 'reason:', reason);
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1';

console.log('Starting server, pid:', process.pid);
const server = app.listen(PORT, HOST, () => {
  try {
    const addr = server.address();
    console.log(`Server listening on http://${addr.address}:${addr.port}`);
  } catch (e) {
    console.log(`Server listening on ${HOST}:${PORT}`);
  }
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
