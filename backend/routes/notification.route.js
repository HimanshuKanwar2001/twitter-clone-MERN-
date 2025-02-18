import express from "express";
import { protectRoute } from "../middleware/protectRoute";
import {
  deleteNotifications,
  getNotifications,
} from "../controllers/notification.controller";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
// router.delete("/:id", protectRoute, deleteNotification);

export default router;
