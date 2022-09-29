import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  groups: string[];
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
});

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password!, 10);
  this.password = hash;

  return next();
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
