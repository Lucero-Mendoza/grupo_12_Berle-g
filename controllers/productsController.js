productsController = {
    
    section: (req, res) => {

        let seccionURL = req.params.seccion;

        function seccionX(){

            if (seccionURL == "mujer" || seccionURL == "hombre" || seccionURL == "niña" || seccionURL == "niño" || seccionURL == "bebe"){
                let listaProductosAUsar = listProducts.filter(function(listProducts){
                    return listProducts.seccion == seccionURL;
                });
            
                return listaProductosAUsar;
            }
        }

        let listaProductos = seccionX();

        res.render ("../views/products/sections.ejs", {"listaProductos": listaProductos});
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

/*---------------------------PRODUCTOS-MUJERES---------------------------*/
let listProducts = [
    {
        id: 11,
        nombre        : "Blusa corta con estampado floral",
        precio        : "$359.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-mujeres/blusa-floral.jpg",
        color1        : "/img/img-mujeres/blusa-floral.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-60%",
        disponibilidad: "Disponible",
        seccion       : "mujer",
    },
    {
        id: 12,
        nombre        : "Blusa corta con nudo delantero",
        precio        : "$499.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-mujeres/blusa-nudo-roja.jpg",
        color1        : "/img/img-mujeres/blusa-nudo-roja.jpg",
        color2        : "/img/img-mujeres/blusa-nudo-negra.jpg",
        color3        : "/img/img-mujeres/blusa-nudo-cafe.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-10%",
        disponibilidad: "Disponible",
        seccion       : "mujer",
    },
    {
        id: 13,
        nombre        : "Camiseta color block tee",
        precio        : "$339.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-mujeres/camiseta-colorblock.jpg",
        color1        : "/img/img-mujeres/camiseta-colorblock.jpg",
        catalogo      :"primavera-verano-2021",
        descuento     : "-60%",
        disponibilidad: "No disponible",
        seccion       : "mujer",
    },
    {
        id: 14,
        nombre        : "Camiseta de tirantes con ojales",
        precio        : "$250.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-mujeres/camiseta-tirantes.jpg",
        color1        : "/img/img-mujeres/camiseta-tirantes.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-50%",
        disponibilidad: "Disponible",
        seccion       : "mujer",
    },

/*---------------------------PRODUCTOS-HOMBRES---------------------------*/

    {
        id: 21,
        nombre        : "Camiseta con estampado de manos",
        precio        : "$359.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-hombres/camiseta-beige-manos.jpg",
        color1        : "/img/img-hombres/camiseta-beige-manos.jpg",
        color2        : "/img/img-hombres/camiseta-azul-manos.jpg",
        color3        : "/img/img-hombres/camiseta-rosa-manos.jpg",
        color4        : "/img/img-hombres/camiseta-blanca-manos.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-60%",
        disponibilidad: "No disponible",
        seccion       : "hombre",
    },
    {
        id: 22,
        nombre        : "Camiseta color block tee",
        precio        : "$499.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-hombres/camiseta-colorblock-guinda.jpg",
        color1        : "/img/img-hombres/camiseta-colorblock-guinda.jpg",
        color2        : "/img/img-hombres/camiseta-colorblock-morada.jpg",
        color3        : "/img/img-hombres/camiseta-colorblock-azul-turquesa.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-10%",
        disponibilidad: "Disponible",
        seccion       : "hombre",
    },
    {
        id: 23,
        nombre        : "Camiseta con estampado de rayas",
        precio        : "$339.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-hombres/camiseta-rayas.jpg",
        color1        : "/img/img-hombres/camiseta-rayas.jpg",
        color2        : "/img/img-hombres/camiseta-rayas-azul-turquesa.jpg",
        color3        : "/img/img-hombres/camiseta-rayas-azul-rey.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-60%",
        disponibilidad: "Disponible",
        seccion       : "hombre",
    },
    {
        id: 24,
        nombre        : "Camiseta color pink",
        precio        : "$250.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-hombres/camiseta-rosa.jpg",
        color1        : "/img/img-hombres/camiseta-rosa.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-50%",
        disponibilidad: "Disponible",
        seccion       : "hombre",
    },

/*---------------------------PRODUCTOS-NIÑAS---------------------------*/

    {
        id: 31,
        nombre        : "Camiseta rosa love",
        precio        : "$224.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niñas/blusa-rosa.jpg",
        color1        : "/img/img-niñas/blusa-rosa.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-30%",
        disponibilidad: "Disponible",
        seccion       : "niña",
    },
    {
        id: 32,
        nombre        : "Chamarra mezclilla clara",
        precio        : "$1452.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niñas/chamarra-mezclilla.jpg",
        color1        : "/img/img-niñas/chamarra-mezclilla.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-10%",
        disponibilidad: "Disponible",
        seccion       : "niña",
    },
    {
        id: 33,
        nombre        : "Vestido balet",
        precio        : "$1200.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niñas/vestido-rosa.jpg",
        color1        : "/img/img-niñas/vestido-rosa.jpg",
        color2        : "/img/img-niñas/vestido-amarillo.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-20%",
        disponibilidad: "Disponible",
        seccion       : "niña",
    },
    {
        id: 34,
        nombre        : "Vestido de flores",
        precio        : "$250.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niñas/vestido-azul-flores.jpg",
        color1        : "/img/img-niñas/vestido-azul-flores.jpg",
        color2        : "/img/img-niñas/vestido-multicolor-flores.jpg",
        color3        : "/img/img-niñas/vestido-rojo-marsala-claro-flores.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-5%",
        disponibilidad: "Disponible",
        seccion       : "niña",
    },

/*---------------------------PRODUCTOS-NIÑOS---------------------------*/

    {
        id: 41,
        nombre        : "Chaleco acolchonado",
        precio        : "$902.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niños/chaleco-acolchonado-azul-dos-tonos.jpg",
        color1        : "/img/img-niños/chaleco-acolchonado-azul-dos-tonos.jpg",
        color2        : "/img/img-niños/chaleco-acolchonado-azul-mostaza.jpg",
        color3        : "/img/img-niños/chaleco-acolchonado-negro-blanco.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-10%",
        disponibilidad: "No disponible",
        seccion       : "niño",
    },
    {
        id: 42,
        nombre        : "Chamarra biker",
        precio        : "$499.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niños/chamarra-biker.jpg",
        color1        : "/img/img-niños/chamarra-biker.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-10%",
        disponibilidad: "No disponible",
        seccion       : "niño",
    },
    {
        id: 43,
        nombre        : "Pantalón super soft",
        precio        : "$339.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niños/pantalon-super-soft-azul.jpg",
        color1        : "/img/img-niños/pantalon-super-soft-azul.jpg",
        color2        : "/img/img-niños/pantalon-super-soft-gris.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-60%",
        disponibilidad: "Disponible",
        seccion       : "niño",
    },
    {
        id: 44,
        nombre        : "Playera polo piqué",
        precio        : "$535.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niños/playera-polo-pique-amarillo-azul.jpg",
        color1        : "/img/img-niños/playera-polo-pique-amarillo-azul.jpg",
        color1        : "/img/img-niños/playera-polo-pique-azul-cafe.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-10%",
        disponibilidad: "Disponible",
        seccion       : "niño",
    },
    {
        id: 45,
        nombre        : "Sudadera Pokemón",
        precio        : "$250.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niños/sudadera-pokemon.jpg",
        color1        : "/img/img-niños/sudadera-pokemon.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-50%",
        disponibilidad: "Disponible",
        seccion       : "niño",
    },
    {
        id: 46,
        nombre        : "Sudadera Space Jam",
        precio        : "$499.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-niños/sudadera-space-jam.jpg",
        color1        : "/img/img-niños/sudadera-space-jam.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-50%",
        disponibilidad: "No disponible",
        seccion       : "niño",
    },

    /*---------------------------PRODUCTOS-BEBES---------------------------*/

    {
        id: 51,
        nombre        : "Conjunto de algodón niña",
        precio        : "$359.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-bebes/conjunto-algodon-azul-lion.jpg",
        color1        : "/img/img-bebes/conjunto-algodon-azul-lion.jpg",
        color2        : "/img/img-bebes/conjunto-algodon-beige-carita.jpg",
        color3        : "/img/img-bebes/conjunto-algodon-blanco-love.jpg",
        color4        : "/img/img-bebes/conjunto-algodon-rosa-love.jpg",
        color4        : "/img/img-bebes/conjunto-algodon-rosa-puntos.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-60%",
        disponibilidad: "No disponible",
        seccion       : "bebe",
    },
    {
        id: 52,
        nombre        : "Set de 3 piezas Winnie Pooh",
        precio        : "$499.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-bebes/set-tres-winnie-pooh.jpg",
        color1        : "/img/img-bebes/set-tres-winnie-pooh.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-10%",
        disponibilidad: "No disponible",
        seccion       : "bebe",
    },
    {
        id: 53,
        nombre        : "Set de 3 piezas Batman",
        precio        : "$339.00",
        descripcion   : "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen        : "/img/img-bebes/set-tres-batman.jpg",
        color1        : "/img/img-bebes/set-tres-batman.jpg",
        catalogo      : "primavera-verano-2021",
        descuento     : "-60%",
        disponibilidad: "Disponible",
        seccion       : "bebe",
    },
];