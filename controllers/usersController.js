usersController = {
    login: (req, res) => {
        res.render ("../views/users/login.ejs");
    },
    register: (req, res) => {
        res.render ("../views/users/register.ejs");
    }
};

module.exports = usersController;