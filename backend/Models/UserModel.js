import mongoose from "mongoose";

// Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = new mongoose.model("user", UserSchema);
export default UserModel;
