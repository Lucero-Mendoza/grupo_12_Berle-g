const express = require ("express");
const router = express.Router();
const cartController = require ("../controllers/cartController")

router.get ("/product-cart", cartController.productCart);

module.exports = router;