const express = require ("express");
const router = express.Router();
const cartController = require ("../controllers/cartController")

router.get ("/carrito-de-productos", cartController.productCart);

module.exports = router;