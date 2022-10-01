import UserModel, { UserDocument } from "../models/user.model";

function userSeedData(): Array<UserDocument> {
	const data = [
		new UserModel({
			name: 'TestUser1',
			email: 'seeded@gmail.com',
			password: 'password'
		}),
		new UserModel({
			name: 'TestUser2',
			password: 'banana'
		})
	]

	return data
}

export { userSeedData }