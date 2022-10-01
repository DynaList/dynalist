import GroupModel, { GroupDocument } from "../models/group.model";
import UserModel, { UserDocument } from "../models/user.model";
import adjectives from "./adjectives";
import nouns from "./nouns";

function userSeedData(count: Number): Array<UserDocument> {
	const data: Array<UserDocument> = []

	for (let i = 0; i < count; i++) {
		// Get a random adjective and noun
		let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
		let noun = nouns[Math.floor(Math.random() * nouns.length)]
		
		// Capitalize first letters 
		adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1)
		noun = noun.charAt(0).toUpperCase() + noun.slice(1)

		// Name consists of a random adjective, a random noun, and a number between 0 and 1000
		const name = adjective + noun + Math.floor(Math.random() * 1000)

		// Make user document
		const user = new UserModel({
			name: name,
			email: 'seeded@gmail.com',
			password: 'password'
		})

		// Push it to the array
		data.push(user)
	}

	return data
}

function groupSeedData(count: Number): Array<GroupDocument> {
	const data: Array<GroupDocument> = []

	for (let i = 0; i < count; i++) {
		// Get a random adjective and noun
		let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
		let noun = nouns[Math.floor(Math.random() * nouns.length)]
		
		// Capitalize first letters 
		adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1)
		noun = noun.charAt(0).toUpperCase() + noun.slice(1)

		// Name consists of a random adjective, a random noun, and the word "Pack"
		const name = adjective + noun + "Pack"

		// Make group document
		const group = new GroupModel({
			name: name
		})

		// Push it to the array
		data.push(group)
	}

	return data
}

export { userSeedData, groupSeedData }