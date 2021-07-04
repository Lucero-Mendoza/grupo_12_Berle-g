productsController = {
    catalogWomen: (req, res) => {
        res.render ("../views/detail-women-catalog.ejs");
    },
    catalogMen: (req, res) => {
        res.render ("../views/detail-men-catalog.ejs");
    }
};

module.exports = productsController;