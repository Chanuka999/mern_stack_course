import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { ConnectDb } from "./config/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5001;

app.use("/api/notes", noteRoutes);

ConnectDb();

app.listen(PORT, () => {
  console.log("server running on PORT : 5001");
});
