/*---------------------------PRODUCTOS---------------------------*/
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const listProducts = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


productsController = {
    
    articles: (req, res) => {

        res.render ("../views/products/articles.ejs", {"todosLosProductos": listProducts});

    },
    section: (req, res) => {

        let seccionURL = req.params.seccion;

        function seccionX(){

            if (seccionURL == "mujer" || seccionURL == "hombre" || seccionURL == "niña" || seccionURL == "niño" || seccionURL == "bebe" || seccionURL == "novedades" || seccionURL == "los-mas-vendidos" || seccionURL == "lo-mas-buscado"){
                let listaProductosAUsar = listProducts.filter(function(listProducts){
                    return listProducts.seccion == seccionURL || listProducts.categoria == seccionURL;
                });
            
                return listaProductosAUsar;
            }
        }

        let listaProductos = seccionX();

        res.render ("../views/products/sections.ejs", {"listaProductos": listaProductos, "seccionURL":seccionURL});
    },
    detail: (req, res) => {

        let idURL = req.params.id;
        let seccionURL = req.params.seccion;

        function articuloID(){

            if (seccionURL == "mujer" || seccionURL == "hombre" || seccionURL == "niña" || seccionURL == "niño" || seccionURL == "bebe"){
                let buscandoArticulo = listProducts.filter(function(listProducts){
                    return listProducts.id == idURL && listProducts.seccion == seccionURL;
                });
            
                return buscandoArticulo;
            }
        }

        let articuloBuscado = articuloID();
        res.render ("../views/products/detail-article.ejs", {"articuloBuscado": articuloBuscado});
    },
    catalog: (req, res) => {

        let catalogoURL = req.params.catalogo;
        let seccionURL = req.params.seccion;

        function catalogo(){

            if (seccionURL == "mujer" || seccionURL == "hombre" || seccionURL == "niña" || seccionURL == "niño" || seccionURL == "bebe"){
                let buscandoCatalogo = listProducts.filter(function(listProducts){
                    return listProducts.catalogo == catalogoURL && listProducts.seccion == seccionURL;
                });
            
                return buscandoCatalogo;
            }
        }

        let catalogoBuscado = catalogo();
        res.render ("../views/products/catalogs.ejs", {"catalogoBuscado": catalogoBuscado});
    },
};

module.exports = productsController;
