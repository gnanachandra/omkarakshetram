import express from "express";
import {
  createStream,
  deleteStream,
  getStreams,
  updateStream,
} from "../controllers/streamController.js";
const router = express.Router();

router.route("/").get(getStreams).post(createStream);
router.route("/:id").patch(updateStream).delete(deleteStream);

export default router;
