/*---------------------------PRODUCTOS---------------------------*/
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const listProducts = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


adminController = {
    
    show: (req, res) => {

        res.render ("../views/admin/products-admin.ejs", {"todosLosProductos": listProducts});

    }, 
    create: (req, res) => {

        let seccionURL = req.params.seccion;

        function buscarUltimoID(){

            if (seccionURL == "mujer" || seccionURL == "hombre" || seccionURL == "niña" || seccionURL == "niño" || seccionURL == "bebe"){
                let articulosSeccionX = listProducts.filter((listProducts)=>{
                    return listProducts.seccion == seccionURL;
                });
            
                return articulosSeccionX[articulosSeccionX.length - 1].id;
            }
        }

        let ultimoID = buscarUltimoID();

        res.render ("../views/admin/products-create.ejs", {"ultimoID": ultimoID, "seccionURL": seccionURL});

    },
    store: (req, res) => {

        let filenames = req.files.map((file) => {
            return file.filename;
        });

        let rutaImage = filenames.map ((file) =>{
            return "/img/productos/" + file;
        });

        let nuevoProducto = {
			id            : req.body.id,
			nombre        : req.body.nombre,
			precio        : req.body.precio,
			descripcion   : req.body.descripcion,
			colores       : rutaImage,
			catalogo      : req.body.catalogo,
            descuento     : req.body.descuento,
            disponibilidad: req.body.disponibilidad,
            seccion       : req.body.seccion,
            categoria     : req.body.categoria,
            talla         : req.body.talla,
		}
		listProducts.push(nuevoProducto);
		fs.writeFileSync(productsFilePath, JSON.stringify(listProducts, null, 2));
		res.redirect("/productos");
    },
    edit: (req, res) => {
		let idURL = req.params.id;

		let edicionDeProducto = listProducts.filter((listProducts)=>{
			return listProducts.id == idURL;
		});
		res.render("../views/admin/products-edit.ejs", {"edicionDeProducto": edicionDeProducto, "todosLosProductos": listProducts, "idURL": idURL});
	},
    update: (req, res) => {

		let idURL = req.params.id;

        //Para recuperar los colores seleccionados

        let colores = [];
        let coloresExistentes = colores.concat(req.body.coloresExistentes);

        let filenames = req.files.map((file) => {
            return file.filename;
        });

        let coloresNuevos = filenames.map ((file) =>{
            return "/img/productos/" + file;
        });

        let rutaImage = coloresExistentes.concat(coloresNuevos);

        //Para recuperar las tallas seleccionadas

        let tallasExistentes = req.body.tallasExistentes;

        let tallasNuevas = req.body.tallasNuevas;
console.log(tallasNuevas);

        function tallas() {
            if(tallasNuevas == undefined) {
                return tallasExistentes;
            }else {
                return tallasExistentes.concat(tallasNuevas);
            }
        }

        let tallasSeleccionadas = tallas();

		listProducts.forEach((listProducts) => {
			if( idURL == listProducts.id) {
				listProducts.nombre         = req.body.nombre;
				listProducts.precio         = req.body.precio;
				listProducts.descripcion    = req.body.descripcion;
				listProducts.colores        = rutaImage;
				listProducts.catalogo       = req.body.catalogo;
                listProducts.descuento      = req.body.descuento;
				listProducts.disponibilidad = req.body.disponibilidad;
				listProducts.seccion        = req.body.seccion;
                listProducts.categoria      = req.body.categoria;
                listProducts.talla          = tallasSeleccionadas;
			}
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(listProducts, null, 2));
		res.redirect("/productos");
	},
    destroy : (req, res) => {
		let idURL = req.params.id;

		let eliminarProducto = listProducts.filter((listProducts)=>{
			return listProducts.id != idURL;
		});
		
		fs.writeFileSync(productsFilePath, JSON.stringify(eliminarProducto, null, 2));
		res.redirect("/productos");
	}
}

module.exports = adminController;