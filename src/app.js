import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import birthdaysRoutes from './routes/birthdays.routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
  // origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  //origin: "http://localhost:5173",
  origin: true,
  credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", birthdaysRoutes);

export default app;