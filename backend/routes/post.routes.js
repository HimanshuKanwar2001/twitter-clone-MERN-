import express from "express";
import { commentOnPost, createPost, deletePost, likeUnlikePost } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "inside post routes",
  });
});

router.post("/create", protectRoute, createPost);
router.post("/like/:id",protectRoute,likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);
export default router;
