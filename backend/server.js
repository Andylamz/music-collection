import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import favouritePage from "./routes/music.js";
import authPage from "./routes/auth.js";
import cors from "cors";
import path from "path";
import checkTokenMiddleware from "./middlewares/checkTokenMiddleware.js";

const __dirname = path.resolve();
const app = express();

// CORS
dotenv.config();
app.use(cors());

// PORT
const PORT = process.env.PORT || 8080;

// parse - req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.use("/favourite", checkTokenMiddleware, favouritePage);
app.use("/auth", authPage);

// Static folder
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
