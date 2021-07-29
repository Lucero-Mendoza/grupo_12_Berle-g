const express = require ("express");
const multer  = require("multer");
const router  = express.Router();
const adminController = require ("../controllers/adminController");
const path    = require("path");

/*---------------------MULTER PARA FORMULARIO DE CREACIÓN Y EDICIÓN DE PRODUCTOS---------------------*/

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        cb(null, path.join(__dirname, "../public/img/productos"));
    },
    filename: (req, file, cb) => {
        let nombreArchivo = Date.now() + "-" + file.originalname;
        cb(null, nombreArchivo);
    }
});

const upload = multer({storage:storage}); //Se coloca sólo storage porque es el nombre de la variable

/*------------------------------------------RUTAS------------------------------------------*/

//Creación de productos

router.get ("/agregar-nuevos-productos/:seccion", adminController.create);
router.post ("/", upload.array("colores") ,adminController.store);

//Opciones de productos

router.get ("/productos/eliminar-editar", adminController.show)
//Edición de productos

router.get("/editar-productos-existentes/:id", adminController.edit);
router.put ("/editar-productos-existentes/:id", upload.array("coloresNuevos"), adminController.update);

//Eliminación de productos

router.delete("/eliminar-productos-existentes/:id", adminController.destroy);

/*--------------------------------------CIERRE DE RUTAS--------------------------------------*/

module.exports = router;