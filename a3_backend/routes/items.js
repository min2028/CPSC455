var express = require('express');
var router = express.Router();
const { faker } = require('@faker-js/faker');

let itemsList= {
    items: []
};
const createItems = (n) => {
    while (n > 0) {
        const item = {
            uuid: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: faker.image.url()
        }
        console.log(item)
        itemsList.items.push(item);
        n--
    }
}

createItems(10);

/* GET items listing. */
router.get('/', function(req, res, next) {
    res.send(itemsList);
});

router.post('/', function(req, res, next) {
    // console.log(req.body)
    const item = {
        uuid: faker.string.uuid(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    }
    itemsList.items.push(item);
    res.send(item);
});

router.delete('/:id', function(req, res, next) {
    console.log(req.params.id)
    itemsList.items = itemsList.items.filter(item => item.uuid !== req.params.id)
    res.send(itemsList);
});

router.patch('/:id', function(req, res, next) {
    console.log(req.params.id)
    console.log(req.body)
    const item = itemsList.items.find(item => item.uuid === req.params.id)
    for (const prop in req.body) {
        if (req.body.hasOwnProperty(prop)) {
            item[prop] = req.body[prop];
        }
    }
    // if (req.body.name) {
    //     item.name = req.body.name
    // }
    // if (req.body.price) {
    //     item.name = req.body.price
    // }
    // if (req.body.description) {
    //     item.name = req.body.description
    // }
    // if (req.body.image) {
    //     item.name = req.body.image
    // }
    res.send(item);
});
module.exports = router;
