"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemSeedData = exports.listSeedData = exports.groupSeedData = exports.userSeedData = void 0;
const group_model_1 = __importDefault(require("../models/group.model"));
const item_model_1 = __importDefault(require("../models/item.model"));
const list_model_1 = __importDefault(require("../models/list.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const adjectives_1 = __importDefault(require("./adjectives"));
const nouns_1 = __importDefault(require("./nouns"));
function userSeedData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        // Get a random adjective and noun
        let adjective = adjectives_1.default[Math.floor(Math.random() * adjectives_1.default.length)];
        let noun = nouns_1.default[Math.floor(Math.random() * nouns_1.default.length)];
        // Capitalize first letters 
        adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
        noun = noun.charAt(0).toUpperCase() + noun.slice(1);
        // Make user document
        const user = new user_model_1.default({
            firstName: adjective,
            lastName: noun,
            email: 'seeded@gmail.com',
            password: 'password',
            country: 'US',
            street: noun + " Street",
            city: 'Raleigh',
            state: 'NC',
            zip: '27511'
        });
        // Push it to the array
        data.push(user);
    }
    return data;
}
exports.userSeedData = userSeedData;
function groupSeedData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        // Get a random adjective and noun
        let adjective = adjectives_1.default[Math.floor(Math.random() * adjectives_1.default.length)];
        let noun = nouns_1.default[Math.floor(Math.random() * nouns_1.default.length)];
        // Capitalize first letters 
        adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
        noun = noun.charAt(0).toUpperCase() + noun.slice(1);
        // Name consists of a random adjective, a random noun, and the word "Pack"
        const name = adjective + noun + "Pack";
        // Make group document
        const group = new group_model_1.default({
            name: name
        });
        // Push it to the array
        data.push(group);
    }
    return data;
}
exports.groupSeedData = groupSeedData;
function listSeedData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        // Get a random noun
        let noun = nouns_1.default[Math.floor(Math.random() * nouns_1.default.length)];
        // Capitalize first letter
        noun = noun.charAt(0).toUpperCase() + noun.slice(1);
        // Name consists of a random noun and the word "List"
        const name = noun + " List";
        // Make list document
        const list = new list_model_1.default({
            name: name
        });
        // Push it to the array
        data.push(list);
    }
    return data;
}
exports.listSeedData = listSeedData;
function itemSeedData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        // Get a random noun
        let noun = nouns_1.default[Math.floor(Math.random() * nouns_1.default.length)];
        // Capitalize first letter
        noun = noun.charAt(0).toUpperCase() + noun.slice(1);
        // Name consists of a random noun
        const name = noun;
        const price = Math.round(Math.random() * 200);
        // Make item document
        const item = new item_model_1.default({
            name: name,
            price: price,
            inStock: Math.round(Math.random()) ? true : false
        });
        // Push it to the array
        data.push(item);
    }
    return data;
}
exports.itemSeedData = itemSeedData;
//# sourceMappingURL=seedData.js.map