productsController = {
    catalogWomen: (req, res) => {
        res.render ("../views/products/detail-women-catalog.ejs", {"listProductsWomen": listProductsWomen});
    },
    catalogMen: (req, res) => {
        res.render ("../views/products/detail-men-catalog.ejs", {"listProductsMen": listProductsMen});
    },
    articleDetailWomen: (req, res) => {
        let idURL = req.params.id;
        function busquedaArticulo(numero) {
            for (let i = 0 ; i < listProductsWomen.length ; i++) {
                if(listProductsWomen[i].id == numero) {
                    return listProductsWomen[i];
                }
            }
        }
        let articuloBuscado = busquedaArticulo(idURL);
        res.render ("../views/products/detail-article-men.ejs", {"articuloBuscado": articuloBuscado});
    },
    articleDetailMen: (req, res) => {
        let idURL = req.params.id;
        function busquedaArticulo(numero) {
            for (let i = 0 ; i < listProductsMen.length ; i++) {
                if(listProductsMen[i].id == numero) {
                    return listProductsMen[i];
                }
            }
        }
        let articuloBuscado = busquedaArticulo(idURL);
        res.render ("../views/products/detail-article-women.ejs", {"articuloBuscado": articuloBuscado});
    },
};

module.exports = productsController;

/*---------------------------PRODUCTOS-MUJERES---------------------------*/
let listProductsWomen = [
    {
        id: 1,
        nombre     : "Blusa corta con estampado floral",
        precio     : "$359.00",
        descripcion: "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen     : "/img/img-mujeres/blusa-floral.jpg",
        catalogo   : "primavera-verano 2021",
        descuento  : "-60%",
        disponibilidad: "Disponible",
    },
    {
        id: 2,
        nombre     : "Blusa corta con nudo delantero",
        precio     : "$499.00",
        descripcion: "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen     : "/img/img-mujeres/blusa-nudo-roja.jpg",
        color1     : "/img/img-mujeres/blusa-nudo-roja.jpg",
        color2     : "/img/img-mujeres/blusa-nudo-negra.jpg",
        color3     : "/img/img-mujeres/blusa-nudo-cafe.jpg",
        catalogo   : "primavera-verano 2021",
        descuento  : "-10%",
        disponibilidad: "Disponible",
    },
    {
        id: 3,
        nombre     : "Camiseta color block tee",
        precio     : "$339.00",
        descripcion: "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen     : "/img/img-mujeres/camiseta-colorblock.jpg",
        catalogo   : "primavera-verano 2021",
        descuento  : "-60%",
        disponibilidad: "No disponible",
    },
    {
        id: 4,
        nombre     : "Camiseta de tirantes con ojales",
        precio     : "$250.00",
        descripcion: "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen     : "/img/img-mujeres/camiseta-tirantes.jpg",
        catalogo   : "primavera-verano 2021",
        descuento  : "-50%",
        disponibilidad: "Disponible",
    },
];

/*---------------------------PRODUCTOS-HOMBRES---------------------------*/
let listProductsMen = [
    {
        id: 1,
        nombre     : "Camiseta con estampado de manos",
        precio     : "$359.00",
        descripcion: "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen     : "/img/img-hombres/camiseta-beige-manos.jpg",
        color1     : "/img/img-hombres/camiseta-beige-manos.jpg",
        color2     : "/img/img-hombres/camiseta-azul-manos.jpg",
        color3     : "/img/img-hombres/camiseta-rosa-manos.jpg",
        color4     : "/img/img-hombres/camiseta-blanca-manos.jpg",
        catalogo   : "primavera-verano 2021",
        descuento  : "-60%",
        disponibilidad: "No disponible",
    },
    {
        id: 2,
        nombre     : "Camiseta color block tee",
        precio     : "$499.00",
        descripcion: "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen     : "/img/img-hombres/camiseta-colorblock-guinda.jpg",
        color1     : "/img/img-hombres/camiseta-colorblock-guinda.jpg",
        color2     : "/img/img-hombres/camiseta-colorblock-morada.jpg",
        color3     : "/img/img-hombres/camiseta-colorblock-azul-turquesa.jpg",
        catalogo   : "primavera-verano 2021",
        descuento  : "-10%",
        disponibilidad: "Disponible",
    },
    {
        id: 3,
        nombre     : "Camiseta con estampado de rayas",
        precio     : "$339.00",
        descripcion: "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen     : "/img/img-hombres/camiseta-rayas.jpg",
        color1     : "/img/img-hombres/camiseta-rayas.jpg",
        color2     : "/img/img-hombres/camiseta-rayas-azul-turquesa.jpg",
        color3     : "/img/img-hombres/camiseta-rayas-azul-rey.jpg",
        catalogo   : "primavera-verano 2021",
        descuento  : "-60%",
        disponibilidad: "Disponible",
    },
    {
        id: 4,
        nombre     : "Camiseta color pink",
        precio     : "$250.00",
        descripcion: "Sudadera suave de manga larga con gorro forrado en punto y cordón de ajuste. Modelo con bolsillo tipo canguro y borde acanalado en los puños y bastilla. Interior cepillado suave.",
        imagen     : "/img/img-hombres/camiseta-rosa.jpg",
        catalogo   : "primavera-verano 2021",
        descuento  : "-50%",
        disponibilidad: "Disponible",
    },
];