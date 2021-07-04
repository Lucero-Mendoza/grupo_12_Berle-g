usersController = {
    login: (req, res) => {
        res.render ("../views/login.ejs");
    },
    register: (req, res) => {
        res.render ("../views/register.ejs");
    }
};

module.exports = usersController;