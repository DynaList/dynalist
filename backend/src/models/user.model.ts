import mongoose, { Types, HydratedDocument } from "mongoose";
import bcrypt from "bcrypt";
import { GroupDocument } from "./group.model";

export interface UserDocument extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  // groups: Array<GroupDocument["_id"]>;
  groups: Array<string>;
  comparePassword(givenPassword: string): Promise<boolean>;
  addGroup(group: GroupDocument): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument>({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
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
  country: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  groups: [
    {
      type: Types.ObjectId,
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

userSchema.methods.addGroup = async function (
  group: GroupDocument
): Promise<boolean> {
  const user = this as UserDocument;

  if (user.groups?.includes(group.id)) {
    return false;
  }

  user.groups.push(group.id);
  group.members.push(user.id);
  await user.save();
  await group.save();
  return true;
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
