var express = require('express');
var router = express.Router();

const initialItems = [
    { name: "Aung Da Grape", description: "This is a Grape", price: 1000, image: "https://m.media-amazon.com/images/I/41e30GpzsNL._AC_.jpg" },
    { name: "Aung Da Potato", description: "This is a Potato", price: 500, image: "https://m.media-amazon.com/images/I/61PoKJpmxPL._AC_SX679_.jpg" },
];



/* GET items listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
