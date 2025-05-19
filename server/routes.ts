import type { Express } from "express";
import { createServer, type Server } from "http";
import path from 'path';
import express from 'express';
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Static file hosting
  if (process.env.NODE_ENV === 'production') {
    const staticPath = path.resolve(process.cwd(), 'dist/public');
    app.use(express.static(staticPath));
  }

  const httpServer = createServer(app);

  return httpServer;
}
