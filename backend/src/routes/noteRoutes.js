import express from "express";
import {
  createANote,
  deleteAnote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createANote);
router.put("/:id", updateNote);
router.delete("/:id", deleteAnote);

export default router;
