import express from "express";
import FavouriteModel from "../Models/FavouriteModel.js";

const router = express.Router();
//get all songs
router.get("/", async (req, res) => {
  try {
    // console.log(req.user);
    const userId = req.user.id;
    const data = await FavouriteModel.find({ userId });
    if (!data.length) {
      return res
        .status(200)
        .json({ code: "0000", msg: "No favourites", data: null });
    }
    return res.status(200).json({ code: "0000", msg: "fetch completed", data });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "1111", msg: "fetch failed", data: null });
  }
});

// add song
router.post("/", async (req, res) => {
  try {
    const userId = req.user.id;
    const { trackId, title, name, image } = req.body;
    const isFavourited = await FavouriteModel.findOne({ userId, trackId });
    if (isFavourited) {
      return res
        .status(200)
        .json({ code: "1111", msg: "Already in favourite", data: null });
    }
    console.log(trackId, title, name, image);

    const data = await FavouriteModel.create({
      userId,
      trackId,
      title,
      name,
      image,
    });
    return res.status(200).json({ code: "0000", msg: "created", data });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "1111", msg: "fetch failed", data: null });
  }
});

// delete song
router.delete("/", async (req, res) => {
  const trackId = req.body.trackId;
  console.log(trackId);
  try {
    const userId = req.user.id;
    const data = await FavouriteModel.findOneAndDelete({ userId, trackId });
    return res.status(200).json({ code: "0000", msg: "deleted", data });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "1111", msg: "fetch failed", data: null });
  }
});
export default router;
