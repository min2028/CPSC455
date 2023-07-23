const ItemModel = require("../models/ItemModel");
const { faker } = require('@faker-js/faker');

// let itemsList = [];
//
// const createItems = (n) => {
//     while (n > 0) {
//         const item = {
//             _id: faker.string.uuid(),
//             name: faker.commerce.productName(),
//             price: faker.commerce.price(),
//             description: faker.commerce.productDescription(),
//             image: faker.image.url(),
//             owner_info: {
//                 username: faker.internet.userName({firstName: faker.person.firstName()})
//             }
//         }
//         itemsList.push(item);
//         n--
//     }
// }
//
// createItems(18);
// console.log(itemsList);

const ItemController = {

// {
//     uuid: '3b4d981a-8cf2-412c-8b5d-a0c4a3897e3f',
//         name: 'Modern Soft Pants',
//     price: '459.00',
//     description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
//     image: 'https://picsum.photos/seed/Zb5sxAT/640/480'
// }

getItems: async function (req, res, next) {
        try {
            const item = await ItemModel.find()
            console.log(item);
            res.status(200).send(item)
        } catch (err) {
            console.log(err.message);
            res.status(500).send(err.message);
        }
    },
    addItem: async function (req, res, next) {
        try {
            const newItem = new ItemModel({
                _id: faker.string.uuid(),
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: req.body.image,
                owner_info: {
                    username: faker.internet.userName({firstName: faker.person.firstName()})
                }
            });
            await newItem.save();
            res.status(200).send(newItem);
        } catch (err) {
            console.log(err.message);
            res.status(500).send(err.message);
        }
    },
    deleteItem: async function (req, res, next) {
        try {
            const item = await ItemModel.findByIdAndDelete(req.params.id);
            console.log(item)
            res.status(200).send(item)
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    updateItem: async function (req, res, next) {
        try {
            const item = await ItemModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).send(item)
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = ItemController;