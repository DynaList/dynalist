import GroupModel, { GroupDocument } from "../models/group.model";
import ItemModel, { ItemDocument } from "../models/item.model";
import ListModel, { ListDocument } from "../models/list.model";
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

		// Make user document
		const user = new UserModel({
			firstName: adjective,
			lastName: noun,
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

function listSeedData(count: Number): Array<ListDocument> {
	const data: Array<ListDocument> = []

	for (let i = 0; i < count; i++) {
		// Get a random noun
		let noun = nouns[Math.floor(Math.random() * nouns.length)]
	
		// Capitalize first letter
		noun = noun.charAt(0).toUpperCase() + noun.slice(1)

		// Name consists of a random noun and the word "List"
		const name = noun + " List"

		// Make list document
		const list = new ListModel({
			name: name
		})

		// Push it to the array
		data.push(list)
	}

	return data
}

function itemSeedData(count: Number): Array<ItemDocument> {
	const data: Array<ItemDocument> = []

	for (let i = 0; i < count; i++) {
		// Get a random noun
		let noun = nouns[Math.floor(Math.random() * nouns.length)]
	
		// Capitalize first letter
		noun = noun.charAt(0).toUpperCase() + noun.slice(1)

		// Name consists of a random noun
		const name = noun

		const price = "$" + Math.random() * 200

		// Make item document
		const item = new ItemModel({
			name: name,
			price: price,
			inStock: Math.round(Math.random()) ? true : false
		})

		// Push it to the array
		data.push(item)
	}

	return data
}

export { userSeedData, groupSeedData, listSeedData, itemSeedData }