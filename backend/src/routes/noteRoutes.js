import express from "express";
import {
  createANote,
  deleteAnote,
  getAllNotes,
  updateAnote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createANote);

router.put("/:id", updateAnote);

router.delete("/:id", deleteAnote);

export default router;
