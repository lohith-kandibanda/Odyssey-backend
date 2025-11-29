import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  title: String,
  location: String,
  imageUrl: String,
  englishTranslation: String,
  narrationText: String,
  audioUrl: String,
  videoUrl: String
});

export default mongoose.model("Story", storySchema);
