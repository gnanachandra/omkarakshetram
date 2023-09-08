import express from "express"
import { createEvent, deleteEvent, getEvents, updateEvent } from "../controllers/eventController.js";
const router = express.Router();

router.route("/").get(getEvents).post(createEvent)
router.route("/:id").patch(updateEvent).delete(deleteEvent)

export default router;