import express from "express";
import { commentOnPost, createPost, deletePost, getAllPosts, getFollowingPost, getLikedPosts, getUserPosts, likeUnlikePost } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "inside post routes",
  });
});
router.get("/all",protectRoute,getAllPosts);
router.get("/following",protectRoute,getFollowingPost);
router.get("/likes/:id",protectRoute,getLikedPosts);
router.get("/user/:username",protectRoute,getUserPosts);
router.post("/create", protectRoute, createPost);
router.post("/like/:id",protectRoute,likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);
export default router;
