import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { ConnectDb } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5001;

app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  next();
});

app.use(rateLimiter);
app.use("/api/notes", noteRoutes);

ConnectDb().then(() => {
  app.listen(PORT, () => {
    console.log("server running on PORT : 5001");
  });
});
