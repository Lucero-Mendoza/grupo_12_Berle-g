const express = require ("express");
const router = express.Router();
const productsController = require ("../controllers/productsController")

router.get ("/women-spring-summer", productsController.catalogWomen);
router.get ("/men-spring-summer", productsController.catalogMen);

module.exports = router;