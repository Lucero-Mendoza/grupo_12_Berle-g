productsController = {
    catalogWomen: (req, res) => {
        res.render ("../views/products/detail-women-catalog.ejs");
    },
    catalogMen: (req, res) => {
        res.render ("../views/products/detail-men-catalog.ejs");
    }
};

module.exports = productsController;