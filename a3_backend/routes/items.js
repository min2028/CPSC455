var express = require('express');
var router = express.Router();
const { faker } = require('@faker-js/faker');
const ItemController = require("../controllers/ItemController");

router.get('/', ItemController.getItems);

router.post('/', ItemController.addItem);

router.delete('/:id', ItemController.deleteItem);

router.patch('/:id', ItemController.updateItem);

module.exports = router;
