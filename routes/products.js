const express = require ("express");
const router = express.Router();
const productsController = require ("../controllers/productsController");

router.get ("/:seccion/:catalogo", productsController.catalog);
router.get ("/:seccion", productsController.section);
router.get ("/detalle/:seccion/:id", productsController.detail);

module.exports = router;