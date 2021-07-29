const express = require("express");
const methodOverride =  require('method-override');
const app     = express();
const rutasAdmin = require("./routes/admin");
const rutasMain = require("./routes/main");
const rutasCart = require("./routes/cart");
const rutasProducts = require("./routes/products");
const rutasUsers = require("./routes/users");

/*-------------------------------Comandos con app-------------------------------*/

app.listen( process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
} );

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride('_method'));

app.use("/", rutasMain);
app.use("/administrador", rutasAdmin);
app.use("/carrito", rutasCart);
app.use("/productos", rutasProducts);
app.use("/usuarios", rutasUsers);

