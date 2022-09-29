import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	groups: [{
		type: Schema.Types.ObjectId,
		ref: 'Group'
	}]
})

userSchema.pre('save', async function (next) {
	const hash = await bcrypt.hash(this.password!, 10)
	this.password = hash

	return next()
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel