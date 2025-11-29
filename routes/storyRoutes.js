import express from "express";
import Story from "../models/Story.js";
const router = express.Router();

// GET one story by slug
router.get("/:slug", async (req, res) => {
  try {
    const story = await Story.findOne({ slug: req.params.slug });
    if (!story) return res.status(404).json({ message: "Story not found" });
    res.json(story);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
