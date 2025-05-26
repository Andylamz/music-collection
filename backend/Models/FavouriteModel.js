import mongoose from "mongoose";

// Schema
const FavouriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  trackId: String,
  title: String,
  name: String,
  image: String,
  preview: String,
});

const FavouriteModel = new mongoose.model("favourite", FavouriteSchema);

export default FavouriteModel;
