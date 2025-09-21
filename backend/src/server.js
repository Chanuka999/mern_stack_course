import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { ConnectDb } from "./config/db.js";
const app = express();

app.use("/api/notes", noteRoutes);

ConnectDb();

app.listen(5001, () => {
  console.log("server running on PORT : 5001");
});
