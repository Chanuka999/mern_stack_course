import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { ConnectDb } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  next();
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(rateLimiter);
app.use(express.json());
app.use("/api/notes", noteRoutes);

ConnectDb().then(() => {
  app.listen(PORT, () => {
    console.log("server running on PORT : 5001");
  });
});
