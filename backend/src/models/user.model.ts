import mongoose, { Schema, HydratedDocument } from "mongoose";
import bcrypt from "bcrypt";

export interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  groups: string[];
  comparePassword(givenPassword: string): Promise<boolean>;
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

userSchema.pre<HydratedDocument<UserDocument>>("save", async function (next) {
  const user = this as UserDocument;

  if (!user.isModified("password")) return next(); // Only run this function if the password was modified

  const hash = await bcrypt.hash(user.password, 10);

  user.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  givenPassword: string
): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(givenPassword, user.password).catch(() => false);
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
