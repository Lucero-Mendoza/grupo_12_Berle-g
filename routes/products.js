const express = require ("express");
const router = express.Router();
const productsController = require ("../controllers/productsController")

router.get ("/men-spring-summer", productsController.catalogMen);
router.get ("/men-spring-summer/product/:id", productsController.articleDetailMen);
router.get ("/women-spring-summer", productsController.catalogWomen);
router.get ("/women-spring-summer/product/:id", productsController.articleDetailWomen);

module.exports = router;